/** 
 * Code Filename: SophisticatedWebApp.js
 * Description: A sophisticated and elaborate web application
 * Author: John Doe
 * Date: 2021-09-30
 */

// Global variables
let appData = {};
let dataList = [];
let currentDataIndex = 0;

// Function to initialize the app
function init() {
  fetchData().then(data => {
    appData = data;

    // Process the data
    processData(appData);
  }).catch(error => {
    console.error('Error occurred while fetching data:', error);
  });

  // Register event listeners
  document.getElementById('nextButton').addEventListener('click', onNextButtonClicked);
  document.getElementById('prevButton').addEventListener('click', onPrevButtonClicked);
}

// Function to fetch data from an API
function fetchData() {
  return new Promise((resolve, reject) => {
    // Make API request
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// Function to process the fetched data
function processData(data) {
  data.forEach(item => {
    // Perform complex calculations
    let result = complexCalculation(item);

    // Update the data list
    dataList.push(result);
  });

  renderData();
}

// Function to perform a complex calculation
function complexCalculation(item) {
  let result = 0;

  // Perform complex calculations using item properties
  for (let i = 0; i < item.length; i++) {
    result += item[i].value * Math.pow(2, item[i].index);
  }

  return result;
}

// Function to render the data on the page
function renderData() {
  let dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = '';

  // Create HTML elements for each data item
  dataList.forEach((dataItem, index) => {
    let listItem = document.createElement('li');
    listItem.textContent = `Data ${index + 1}: ${dataItem}`;
    dataContainer.appendChild(listItem);
  });

  // Update the UI
  updateUI();
}

// Function to update the UI after rendering data
function updateUI() {
  let prevButton = document.getElementById('prevButton');
  let nextButton = document.getElementById('nextButton');

  // Enable/disable previous button based on current data index
  prevButton.disabled = currentDataIndex === 0;

  // Enable/disable next button based on current data index
  nextButton.disabled = currentDataIndex === dataList.length - 1;
}

// Function to handle "Next" button click event
function onNextButtonClicked() {
  currentDataIndex++;

  // Render the updated data
  renderData();
}

// Function to handle "Previous" button click event
function onPrevButtonClicked() {
  currentDataIndex--;

  // Render the updated data
  renderData();
}

// Call the init function to start the app
init();
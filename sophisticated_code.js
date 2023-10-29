/* 
Filename: sophisticated_code.js
Content: Complex and sophisticated JavaScript code example
*/

// Class representing a user
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  // Method to display user information
  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Password: ${this.password}`);
  }
}

// Class representing a blog post
class BlogPost {
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
  }

  // Method to display blog post
  displayPost() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Content: ${this.content}`);
  }
}

// Array of users
const users = [
  new User("John Doe", "john@example.com", "password123"),
  new User("Jane Smith", "jane@example.com", "pass987"),
  new User("Tom Johnson", "tom@example.com", "testpass")
];

// Array of blog posts
const blogPosts = [
  new BlogPost(
    "JavaScript Basics",
    "In this post, we will cover the basics of JavaScript programming language.",
    "John Doe"
  ),
  new BlogPost(
    "Advanced JavaScript",
    "This post dives into advanced concepts and techniques in JavaScript.",
    "Jane Smith"
  ),
  new BlogPost(
    "JavaScript Frameworks",
    "Learn about popular JavaScript frameworks and their features.",
    "Tom Johnson"
  )
];

// Function to display all users
function displayAllUsers() {
  users.forEach((user) => {
    user.displayInfo();
    console.log("");
  });
}

// Function to display all blog posts
function displayAllBlogPosts() {
  blogPosts.forEach((post) => {
    post.displayPost();
    console.log("");
  });
}

// Call the display functions
displayAllUsers();
displayAllBlogPosts();
// selct elements fro html
const postList = document.getElementById("posts-ul");
const postDetails = document.getElementById("post-details");
const form = document.getElementById("new-post-form");

// main function
function main() {
    displayPosts();
    form.addEventListener('submit', addNewPostListener);
}

// function to Fetch posts from the server and display them in the list
function displayPosts() {
    fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(posts => {

            postList.innerHTML = "";// clear our ul first

            posts.forEach(post => {
                const li = document.createElement("li");
                li.innerHTML = `<span style="font-weight:bold;">${post.title}</span>`;
                li.style.cursor = "pointer";
                li.addEventListener('click', () => handlePostClick(post));// adding click event to show details of our post
                postList.appendChild(li);
            });
        })
        .catch(error => {
            postList.innerHTML = "<li>Error loading posts.</li>";
            console.error(error);
        });
}

// function to display post-details in post details section
function handlePostClick(post) {
    postDetails.innerHTML = `
        <img src="${post.image}" alt="no img preview">
        <h2>${post.title}</h2>
        <p><strong>Author: </strong>${post.author}</p>
        <p style="font-size:15px; font-family:san-serif">${post.content}</p>
    `;
}

// function to add new post after form submission
function addNewPostListener(event) {
    event.preventDefault();
    
    // selecting form inputs from DOM
    const title = document.getElementById("form-title").value;
    const author = document.getElementById("form-author").value;
    const image = document.getElementById("form-image").value;
    const content = document.getElementById("form-content").value;

    // creating new post
    const newPost = { title, author, image, content };

    // creating a list to hold our new post
    const newLi = document.createElement("li");
    newLi.innerHTML = `<span style="font-weight:bold;">${newPost.title}</span>`;
    newLi.style.cursor = "pointer";
    newLi.addEventListener('click', () => handlePostClick(newPost)); //adding click event to show details of our post
    postList.appendChild(newLi);

    handlePostClick(newPost);// let's view our new post immediately we submit
    form.reset();// reseting form inputs
}

// 
document.addEventListener("DOMContentLoaded", main);
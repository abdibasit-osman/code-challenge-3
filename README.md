<h1>Simple Blog/Post Manager</h1>
<p> This wll contain a simple application to manage blog posts, where we will be using a local API to build out the frontend for our app, implementing features to view, add, update, and delete posts.</p>
<h2>Setup</h2>
<ul>
<li>We'll create a new project folder and inside it,we add an index.html, src/index.js, css/styles.css and a db.json file.</li>
<li>We;ll run npm install -g json-server@0.17.4 to install json-server.</li>
<li>We'll add some valid JSON sample data in the db.json file.</li>
<li>We then run json-server db.json to get the backend started. This will serve our mock API.</li>
<li>We then run live-server to start the frontend in your browser.</li>
</ul>

<h2>Endpoints</h2>
<h3>Your base URL for your API will be: http://localhost:3000</h3>
<h4>The endpoints you may need are:</h4>
<ul>
<li>GET /posts - To retrieve all blog posts.</li>
<li>GET /posts/:id - To retrieve a single blog post by its ID.</li>
<li>POST /posts - To create a new blog post.</li>
<li>PATCH /posts/:id - To update an existing blog post.</li>
<li>DELETE /posts/:id - To delete a blog post.</li>
</ul>

<h2>Core Deliverables</h2>
<h3>Users should bw able to :</h3>
<ol>
<li>See all blog post titles and the images in the list. When the page loads, fire a function called displayPosts that requests the data from the server (http://localhost:3000/posts) to get all the post objects. Then, display the title for each post as a list item inside the div with the ID of #post-list.  
<li>Click on a post title from the #post-list and see its details. Attach a click event listener to each post title (or its containing element) from the #post-list div. When clicked, fire a callback function called handlePostClick to fetch and display all the info about that specific post (title, content, and author) inside the div with the ID of #post-detail.
</li>
<li>Add a new blog post. Attach a submit event listener to the form with the ID of new-post-form using a function called addNewPostListener. After the submission, create a new post object from the form input values (title, content, author) and add it to the #post-list div. The new post does not need to persist after refreshing the page for this deliverable.</li>
<li>Attention here: Your program should have a main() function that invokes displayPosts and addNewPostListener after the DOM has fully loaded and started the program logic.</li>
</ol>
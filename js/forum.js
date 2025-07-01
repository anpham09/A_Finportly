window.onload = () => {
    displayPosts(); 
};

const displayPosts = () => {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (posts.length == 0) {
        posts = [
            { id: 1, content: "How to start tracking your financial reports effectively?", comments: [] },
            { id: 2, content: "The importance of automation in financial reporting.", comments: [] },
            { id: 3, content: "Should businesses use AI for financial decision-making?", comments: [] }
        ];
        localStorage.setItem('posts', JSON.stringify(posts)); 
    };

    let postsSection = document.getElementById('postsSection');
    postsSection.innerHTML = ''; 

    posts.forEach(post => {
        let postDiv = document.createElement('div');
        postDiv.classList.add('post'); 
        postDiv.innerHTML = `
            <div class="content">${post.content}</div> <!-- Display post content -->
            <div class="comments" style="font-size: 14px;">
                ${post.comments.map(comment => `<div class="comment">${comment}</div>`).join('')} <!-- Display comments for each post -->
            </div>
            <div class="commentForm">
                <input type="text"  id="commentInput-${post.id}"  placeholder="Add a comment..." style="height: 35px;"> <!-- Input field for adding new comments -->
                <button onclick="addComment(${post.id})" style="height: 37px;">Comment</button> <!-- Button to add a comment to the post -->
            </div><br>
        `;
        postsSection.appendChild(postDiv); 
    });
};


const addPost = () => {
    let newPostContent = document.getElementById('newPostContent').value; 
    if (newPostContent) { 
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        let newPost = {
            id: posts.length + 1, 
            content: newPostContent, 
            comments: [] 
        };
        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));
        document.getElementById('newPostContent').value = ''; 
        displayPosts(); 
    }
};

const addComment = (postId) => {
    let commentInput = document.getElementById(`commentInput-${postId}`).value; 
    if (commentInput) { 
        let posts = JSON.parse(localStorage.getItem('posts')) || []; 
        let post = posts.find(post => post.id === postId);
        if (post) {
            post.comments.push(commentInput); 
            localStorage.setItem('posts', JSON.stringify(posts)); 
            displayPosts();
        }
    }
};

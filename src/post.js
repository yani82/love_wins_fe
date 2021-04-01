class Post {
   
    constructor(post, postAttributes) {
        this.id = post.id
        this.title = postAttributes.title
        this.content = postAttributes.content
        this.image_url = postAttributes.image_url
        this.user = postAttributes.user
        Post.all.push(this)
        console.log(this);
    }

    renderPostCard() { 
        return `
        <div class="post_posts col-md-4">
          <div class="card mb-4 shadow-sm">
          <img src=${this.image_url} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${this.title}</h5>
              <p class="card-text">"${this.content}"</p>
              <footer class="blockquote-footer">${this.user.name}</footer>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="delete-post-button" id="delete-post-button">Delete</button>
                  <!-- <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> -->
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        `
        
        
        // return `
        //     <div data-id=${this.id}>
        //         <img src=${this.image_url} height="200" width="250">
        //         <h3>${this.title}</h3>
        //         <p>"${this.content}"</p>
        //         <p>~ ${this.user.name}</p>
        //         // <input type="button" value="Delete Post" data-id=${this.id} id="delete-post-button"></input>
        //         <a class="delete-post-button" id="delete-post-button">Delete Post</a>
        //     </div>
        //     <br><br>`;
      }

}

Post.all = []; 
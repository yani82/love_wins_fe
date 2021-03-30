class Post {
   
    constructor(post, postAttributes) {
        this.id = post.id
        this.title = postAttributes.title
        this.content = postAttributes.content
        this.image_url = postAttributes.image_url
        this.user = postAttributes.user
        Post.all.push(this)
    }

    renderPostCard() { 
        return `
            <div data-id=${this.id}>
                <img src=${this.image_url} height="200" width="250">
                <h3>${this.title}</h3>
                <p>"${this.content}"</p>
                <p>~ ${this.user.name}</p>
                // <input type="button" value="Delete Post" data-id=${this.id} id="delete-post-button"></input>
                <a class="delete-post-button" id="delete-post-button">Delete Post</a>
            </div>
            <br><br>`;
      }

}

Post.all = []; 
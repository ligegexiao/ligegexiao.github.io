var posts=["undefined/3eeb.html","undefined/3eab.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
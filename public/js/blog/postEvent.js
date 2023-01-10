const posts = document.querySelectorAll(".post")

for (let index = 0; index < posts.length; index++) {
    posts[index].addEventListener("click", ()=>{
        if (index == 0) {
            window.location.assign("/blogs/news/a-3d-holographic-fan-that-is-changing-the-way-you-look-at-anime-collections.html")
        } else if (index == 1){
            window.location.assign("/blogs/news/cbs-fox-nbc-usa-today-blogs.html")
        } else if (index == 2){
            window.location.assign("/blogs/news/holofan-co-introduces-the-future-of-advertising-to-the-market.html")
        }
    })
}
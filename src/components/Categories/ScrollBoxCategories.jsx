function ScrollBoxCategories(){
   
    window.addEventListener("scroll", function(){
        const box_categories = document.getElementById("box_categories")
        box_categories.classList.toggle('ScrollBoxCategories_animation', window.scrollY >0)
    })
}
export default ScrollBoxCategories

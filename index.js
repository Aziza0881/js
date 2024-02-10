let del = document.querySelectorAll(".btn")
let movies = document.querySelectorAll(".box_cont")
let imd = document.querySelector(".ind")



movies.forEach(element => {
    del.onclick = () => {
        movies.remove()
        
    }

    imd.value = " "


    
});
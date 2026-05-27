const btn = document.querySelector("button")
const img = document.querySelector("img")

btn.addEventListener("click", () =>{
    if(img.getAttribute("src") == "https://blog.polipet.com.br/wp-content/uploads/2024/01/pato.jpeg"){
    img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpDwTASHvmx4qNZeY-LdchIivlLW-vEP6ELg&s")
    }else{
        img.setAttribute("src", "https://blog.polipet.com.br/wp-content/uploads/2024/01/pato.jpeg")
    }
})
/*Fazendo menu aparecer e desaparecer*/
function nav_bar(){
    var nav_bar = document.getElementById("nav-bar")

    if(nav_bar.style.top === "0px"){
        nav_bar.style.top = "-172px"
    }else{
        nav_bar.style.top = "0px"
    }
}
/*Fazendo animação de texto digitado*/
document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animado", {
        speed: 100,
        deleteSpeed: 10,
        loop: true
    })
      .type("Malba Vinicius")
      .pause(700)
      .delete(14)
      .type("um Front-end Developer")
      .pause(700)
      .delete(22)
      .type("um Full Stack Developer")
      .pause(700)
      .delete(23)
      .type("um programador em evolução")
      .pause(700)
      .delete(26)
    .go()
})

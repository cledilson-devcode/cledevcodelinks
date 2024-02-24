function toggleMode() {
    const body = document.body;
    body.classList.toggle("light");


    // Substituir imagem
    const img = document.querySelector("#profile img");

    if (body.classList.contains('light')) {
        img.setAttribute("src", "./assets/cledilsondevcodewhite.png")
    }else{
        img.setAttribute("src", "./assets/cledilsondevcodeblack.png") 
    }
}
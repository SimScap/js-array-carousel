const items = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];

for( let i=0; i < items.length; i++)
{
    const image = document.createElement("img");
    image.src = items [i];
    document.getElementById("img-" +(i+1)).appendChild(image); 
    image.classList.add("img-fluid");
}

let indice = 0;

document.getElementById("back").addEventListener("click",function(){

    indice++
    let background = document.getElementById("background");
    background.style.backgroundImage= `url('${items [indice]}')`; 
    console.log(indice);
})

document.getElementById("prev").addEventListener("click",function(){
    indice--
    let background = document.getElementById("background");
    background.style.backgroundImage= `url('${items [indice]}')`; 
    console.log(indice);
})





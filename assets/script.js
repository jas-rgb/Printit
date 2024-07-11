const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}

]
 var arrow_left =document.querySelector(".arrow_left");
 var arrow_right =document.querySelector(".arrow_right");
 var img = document.querySelector(".banner-img");
 var txt = document.querySelector("#banner p");
var dots = document.querySelector(".dots");

i=0



 tab=Object.values(slides)
 console.log(tab[0].image)
 for(let j=0;j<(tab.length);j++){
	const dot = document.createElement("div");
	dot.classList.add("dot")
	dots.appendChild(dot)

}
const dS = document.querySelectorAll(".dot")
dS[i].classList.add("dot_selected")
 const clic = ( )=>{
	console.log("clique gauche")
	dS[i].classList.remove("dot_selected")
	i--
	if(i < 0){
		console.log("min")
		i=(tab.length)-1

	}
	//pour modifier une image on modifie son "src"
	console.log(img.src)
	img.src= "./assets/images/slideshow/"+tab[i].image
	txt.innerHTML=tab[i].tagLine
	console.log(img.src)
	console.log(txt)
	dS[i].classList.add("dot_selected")
}
 arrow_left.addEventListener("click",clic)

/* function clic(){
	console.log("clique gauche")
} */
const docS = document.querySelectorAll(".dot")
docS[i].classList.add("dot_selected")
const clic2 = ( )=>{
	
	console.log("clique droit")
	docS[i].classList.remove("dot_selected")
	i++
	if(i === tab.length){
		console.log("max")
		i=0

	}
	//pour modifier une image on modifie son "src"
	console.log(img.src)
	img.src= "./assets/images/slideshow/"+tab[i].image
	txt.innerHTML=tab[i].tagLine
	console.log(img.src)
	console.log(txt)
	docS[i].classList.add("dot_selected")
	console.log(docS)
	/* for(let k=0;k<docS.length;k++){
		
	} */
}
 arrow_right.addEventListener("click",clic2)




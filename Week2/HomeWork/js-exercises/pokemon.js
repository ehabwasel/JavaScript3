
function main(){
  
  const url ="https://pokeapi.co/api/v2/pokemon?limit=70"
  fetch(url).then((response)=>response.json()).then((data)=>console.log(data))
  
  const slt =document.createElement("select")
  slt.style.width="120px"
   const divSlt =document.createElement("div")
   const divBox =document.createElement("div")
   document.body.appendChild(divSlt)
   document.body.appendChild(divBox)
   divSlt.appendChild(slt)
   divBox.style.width='100px'
   divBox.style.height='100px'
   divBox.style.margin='50px auto'
   divBox.style.border='2px black solid'
  const img=document.createElement("img")
  const option1 =document.createElement("option")
    option1.textContent="Select Pokemon"
    slt.add(option1)  
    divBox.appendChild(img)
  let finishData;
///function for fetch main api 
  fetch(url)
    .then((Response=>Response.json()))
    .then((data)=>{
      console.log( data.results)
      finishData=data.results
      finishData.forEach((element,index)=>{
        const option =document.createElement("option")
        option.value=index
        option.textContent=element.name
        slt.add(option)
    }) 
  })
  //function to fetch image api 
  const fetchImageUrl = event => {
    const pokemonURL = finishData[event.target.value].url;
    console.log(pokemonURL)
    fetch(pokemonURL)
      .then(response => response.json())
      .then(response => {
        img.src = response.sprites.front_default;
      });
  };
  
   
  slt.addEventListener("change",fetchImageUrl)



}

window.addEventListener('load', main);
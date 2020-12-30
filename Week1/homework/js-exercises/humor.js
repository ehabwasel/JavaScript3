 //first way with XML 
 
 function humorXML(){
const xhr =new XMLHttpRequest()
const url =" https://xkcd.now.sh/?comic=latest"
xhr.open("GET",url)
xhr.send()
xhr.responseType ="json"

xhr.onload=function(){
  const result =xhr.response
  if(xhr.status<400){
  console.log(result.img)
  const image =document.getElementById("image")
  image.src=result.img
}
else {
  console.log("BAD HTTP",xhr.status)
}
xhr.onerror= function(){
  console.log("some thing wnt wrong")
}

 }
 }
 
 /// SECOND WAY WITH AXIOS
 function humorAxios(){
 
  
  const url =" https://xkcd.now.sh/?comic=latest"
  axios.get(url)
  .then(function (response) {
    // handle success
    const image =document.getElementById("image")
     image.src=response.data.img
    console.log(response)
    
   })
   .catch(function (error) {
  
   // handle error
   console.log(error);
 })
 
 }
window.onload=function (){
  humorXML()
  humorAxios()
}
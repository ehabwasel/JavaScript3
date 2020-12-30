
//first way with Xml 

function dogXML(){

  const xhr =new XMLHttpRequest()

  const url = "https://dog.ceo/api/breeds/image/random"
  xhr.open("GET",url)
  xhr.send()
  xhr.responseType="json"
  xhr.onload=function(){
    const result = xhr.response
    if(xhr.status<400){
      console.log(result)
      const image =document.getElementById("image")
      image.src=result.message
      image.style.width="250px"
      image.style.margin="150px 300px"
      console.log(result.message)
  
    }
    else {
      console.log("BAD HTTP",xhr.status)
    }
  
  }

}


//second way with AXIOS

function dogAxios(){
  
  const url = "https://dog.ceo/api/breeds/image/random"

  axios.get(url)

  .then(function (response) {
    // handle success
    console.log(response)
      const image =document.getElementById("image")
    image.src=response.data.message
    image.style.width="250px"
    image.style.margin="150px 300px"
   })
   .catch(function (error) {
  
   // handle error
   console.log(error);
 })
 
 
}
 
// const btn =document.getElementById("btn")


window.onload=function(){
  
  const btn1 =document.getElementById("btn1")
  const btn2 =document.getElementById("btn2")
  
  btn1.onclick=function (){
    
    dogXML()
    
  }

  btn2.onclick=function (){
    
    dogAxios()
    
   }
   
 }
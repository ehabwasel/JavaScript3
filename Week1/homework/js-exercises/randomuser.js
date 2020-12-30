// using XML HTTP 
function newUser(){

  const xhr= new XMLHttpRequest()

  const url ="https://www.randomuser.me/api"
  xhr.open("GET",url)
  xhr.send()
  xhr.responseType ="json"

  xhr.onload= function (){
    const userArray= xhr.response
    if(xhr.status<400){

      console.log(userArray.results[0].name)
      console.log(userArray)
    }
    else{
       console.log("BAD HTTP",xhr.status)

     }
  }
  xhr.onerror= function(){
    console.log("some thing wnt wrong")
  }

   
}
window.onload=function (){
      const btn =document.getElementById("user")
     btn.onclick=function (){
      newUser()
    }}


    ///// using axios
    function newUser1(){
      const url ="https://www.randomuser.me/api"
      
      axios.get(url)
      .then(function (response) {
        // handle success
        
        console.log(response.data.results[0].name)
        console.log(response)
        
       })
       .catch(function (error) {
      
       // handle error
       console.log(error);
     })
     
   }
   window.onload=function(){
     
    const btn =document.getElementById("user")
    btn.onclick=function (){
      newUser()
       newUser1()
     }
   }
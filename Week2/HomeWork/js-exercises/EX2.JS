function checkDoubleDigits(number){

  return new Promise((resolve,reject)=>{

    if(parseFloat(number)>=10){
      resolve(`The number is bigger  than or  Equal  10!`)
    }
 else{
   reject( "Error! The number is smaller than 10...")
  //  reject( new Error("Error! The number is smaller than 10..."))
 }
  } )
} 

checkDoubleDigits('10')
.then((response)=>{ 
  console.log(response)
})
.catch((error=>{
  console.log(error)
}))
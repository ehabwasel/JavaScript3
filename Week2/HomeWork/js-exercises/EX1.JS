function getAnonName (firstName)  {
  return new Promise((resolve,reject)=>{
setTimeout(() => {

  if (!firstName){

    reject(new Error('Please insert the first name'));
    
  }
else{ 

  const fullName = `${firstName} Doe`;
resolve(console.log(`${firstName} Doe`))

 
} 
}, 3000);
  })
}
getAnonName('Ehab').then((response)=>{
 console.log(response);

}).catch((error)=>{
console.log(error) 
})
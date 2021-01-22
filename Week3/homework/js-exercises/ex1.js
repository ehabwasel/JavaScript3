// Exercise A
 async function getData(url) {
   try{
    const response = await fetch(url)
    const json = await response()
    return json
  }
  catch{
   console.log("Error !!")
   
  }
}

getData('https://randomfox.ca/floof/');

// Exercise B
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

  async function makeAllCaps(array){
 let capsArray
  try {
   
      capsArray=  await array.map(word => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      } 
      else{
        throw ("error")
      }
     })}
     
  catch {
        throw new Error("error")}
       console.log(capsArray)
  }

  makeAllCaps(arrayOfWords)
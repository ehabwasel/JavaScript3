"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/

const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  }
]


const list = document.getElementById("list")

for(let i=0;i<placeholderRepos.length;i++){
  var opt = document.createElement("option")
  opt.value = placeholderRepos[i].name
  console.log(i)
  let chooseName=placeholderRepos[i].name 
  opt.text =    chooseName  
  list.add(opt, list.options[i])}
  
  
  
  
  
      function selectItem(name) {
        const linkItems = placeholderRepos.find(repo => repo.name === name);
        let Name = document.getElementById("Name")
        let Description=document.getElementById("description")
        let Forks=document.getElementById("forks")
        let Update=document.getElementById("update")

   Name.innerText=linkItems.name
   Description.innerText=linkItems.description
   Forks.innerText=linkItems.forks
   Update.innerText=linkItems.update}
   


list.addEventListener('click', (e) => {
  selectItem(e.target.value);
});

window.addEventListener('load', () => {
  selectItem('SampleRepo1');
}); 
///i get some help from khaled because i did not understand the question well
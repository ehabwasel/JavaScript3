const URL = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
const URL1 = 'https://api.github.com/repos/HackYourFuture/repos/contributors';
const list = document.createElement("select")
list.className="selectMenu"
const mainContainer = document.querySelector(".main-container")
const header = document.querySelector(".header")
let contributors = document.querySelector(".contributors-container")
let contributors_container = document.querySelector(".contributors")
let contributors_word = document.querySelector(".h1")
contributors_word .innerHTML=`<h1>contributors</h1>`
contributors_container.appendChild(contributors_word)
contributors_container.appendChild(contributors)
header.appendChild(list)
const repo = document.querySelector(".table-container")
const defOption=document.createElement("option")
defOption.textContent="Select Repo"
let firstOption=list.add(defOption)
let dataBase;
let sortNames;
//function to add html table info 
table()
function table() {	
	repo.innerHTML = 
	`<table id="myTable">					
	<tr>
		<td class="left">Repository:</td>
		<td class="right"><a href="#" id="Name" ></a></td>
	</tr>
	<tr>
		<td class="left">Description:</td>
		<td class="right" id="description"></td>
	</tr>
	<tr>
		<td class="left">Forks:</td>
		<td class="right" id="forks"></td>
	</tr>
	<tr>
		<td class="left">Updated:</td>
		<td class="right" id="update"></td>
	</tr>`
}

///table repo for information 
function tableInfo(dataBase){
	const name=document.getElementById("Name")
	const description=document.getElementById("description")
	const forks=document.getElementById("forks")
	const update=document.getElementById("update")
 dataBase.forEach((element,index)=>{
if(list.value==index){
	name.textContent=element.name
	description.textContent=element.description
	forks.textContent=element.forks
	update.textContent= new Date (element.updated_at).toLocaleString()
}})}
// fitch the main link 
fetchData()
function fetchData() {
	fetch(URL)
		.then(response => response.json())
		.then(response => {
			dataBase = response
			sortData(dataBase)
			createOptions(dataBase)
		}).catch(error=>console.log("this is error from fetch main api",error))}
		// function to sort repo
function sortData(dataBase){
	dataBase.sort((a, b)=> {
		let x;
		if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
			x = 1;
		} else if (b.name.toLocaleLowerCase() > a.name.toLocaleLowerCase()) {
			x = -1;
		} else {
			x = 0;
		}
		return x;	})}

//function for creat select and options 

function createOptions(dataBase) {
	dataBase.forEach((element, index) => {
		const option = document.createElement("option")
		option.textContent = element.name
		option.value = index
		list.appendChild(option)	})}

// fitch the contributors data
function contributorsGit(e) {
	contributorsUrl = dataBase[e.target.value].contributors_url
	fetch(contributorsUrl)
		.then(response => response.json())
		.then(response => {
			tableInfo(dataBase)
		rightSide(response)
			defOption.style.display="None"
		}).catch(error=>
			{mainContainer.innerHTML= "Network Request Failed"
			mainContainer.style.background="rgba(243, 122, 122, 0.12)"
			mainContainer.style.padding="30px"})}

// function for contributors side
function rightSide(response) {
	contributors.innerHTML=""
	response.forEach((element) => {
	 const divImg=document.createElement("div")
	 divImg.id="imgContainer"
		const img = document.createElement("img")
		img.src = element.avatar_url
		const para =document.createElement("p")
		const paraNumber =document.createElement("p")
		paraNumber.className="paraNumber"
		para.style.margin="20px"
		paraNumber.style.margin="20px"
		para.textContent=element.login
		paraNumber.textContent=element.contributions
		const link = document.createElement("a")
		link.href=element.html_url
		link.appendChild(para)
		divImg.appendChild(img)
		divImg .appendChild(link)
		divImg .appendChild(paraNumber)
		contributors.appendChild(divImg)
		img.style.width = "70px"
		})}

list.addEventListener("change", contributorsGit)
	
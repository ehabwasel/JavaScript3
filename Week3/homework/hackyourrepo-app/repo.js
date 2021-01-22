const URL = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
const urlForContributors= 'https://api.github.com/repos/HackYourFuture/repos/contributors';
const rootDiv=document.createElement("div")
rootDiv.id="root"
document.body.appendChild(rootDiv)
const header=document.createElement("header")
header.className="header"
rootDiv.appendChild(header)
const headerPara=document.createElement("p")
headerPara.textContent="HYF Repositories"
header.appendChild(headerPara)
const mainContainer =document.createElement("main")
mainContainer.className="main-container"
rootDiv.appendChild(mainContainer)
export let  repo=document.createElement("section")
repo.className="table-container"
mainContainer.appendChild(repo)
const contributors_container=document.createElement("section")
contributors_container.className="contributors"
mainContainer.appendChild(contributors_container)
let contributors_word = document.createElement("h1")
contributors_word.className="h1"
contributors_word.textContent="contributors"
contributors_container.appendChild(contributors_word)
export let  contributors=document.createElement("section")
contributors.className="contributors-container"
contributors_container.appendChild(contributors)
export let  list = document.createElement("select")
list.className="selectMenu"
header.appendChild(list)
const pagination_element=document.createElement("div")
pagination_element.id="pagination"
pagination_element.className="pagenumbers"
const defOption=document.createElement("option")
defOption.textContent="Select Repo"
let firstOption=list.add(defOption)
export let dataBase;
import sortData from  '/sort.js'
import {tableInfo,table} from '/table.js'
import {current_page,rows,setPagePagination,paginationButton} from '/pagination.js'
import createOptions from '/createOptions.js'
table()
fetchData()
export default function fetchData() {
  try{
      fetch(URL)
      .then(response => response.json())
      .then(response => {
        dataBase = response
        sortData(dataBase)
        createOptions(dataBase)})}
catch(error){console.log(error.message)}}
// fetch the contributors data
 function contributorsGit(e) {
	try{const contributorsUrl =dataBase[e.target.value].contributors_url
      fetch(contributorsUrl)
		  .then(response => response.json())
		  .then(response => {
			 tableInfo(dataBase)
			 defOption.style.display="None"
			 rightSide(response,5,1)
    })}
  catch{mainContainer.innerHTML= "Network Request Failed"
					mainContainer.style.background="rgba(243, 122, 122, 0.12)"
					mainContainer.style.padding="30px"}}
			// function for contributors side
	export function rightSide(response, rowsPerPage, page) {
		contributors.innerHTML=""
		page--;
    let start = rowsPerPage * page;
    let end = start + rowsPerPage;
    let paginationList = response.slice(start, end);
	  console.log(paginationList)
	  paginationList.forEach((element) => {
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
		 })
		 setPagePagination(response,contributors ,rowsPerPage)
	} 
list.addEventListener("change", contributorsGit)

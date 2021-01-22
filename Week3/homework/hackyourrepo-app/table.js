import {dataBase,list,repo} from '/repo.js'
export  function tableInfo(dataBase){
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
export function table() {	
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
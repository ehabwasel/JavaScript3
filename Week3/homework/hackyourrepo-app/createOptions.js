import {dataBase,list} from '/repo.js'
export default
function createOptions(dataBase) {
	dataBase.forEach((element, index) => {
		const option = document.createElement("option")
		option.textContent = element.name
		option.value = index
		list.appendChild(option)	})}
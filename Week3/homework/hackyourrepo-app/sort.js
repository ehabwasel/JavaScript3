import dataBase from '/repo.js'
export default function sortData(dataBase){
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

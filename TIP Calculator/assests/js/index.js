//list which will contain all the data
let lists=[];

//push values in localstorage
function pushValues(n){
	let lists=localStorage.getItem("tip");
	lists=JSON.parse(lists);
	if(!lists){
		lists=[];
	}
	lists.push({
		date:PerPerson.date_bill(),
		bill:n.bill_cal(),
		tip:n.tip_cal(),
		bper:n.bill_per(),
		tper:n.tip_per(),
		person:n.person

	});
	//for displaying the values present in show.js
	displaytable(lists);	
}

//work as soon as form is submitted
 let bform = document.getElementById('main');
 bform.addEventListener('submit',billsplit);
 
// function activated on clicking the submit button
 function billsplit(){
 	
 	let bill=parseInt(document.getElementById('01').value);
 	let tip=parseInt(document.getElementById('02').value);
 	let person=parseInt(document.getElementById('03').value);
 	let n= new PerPerson(bill,tip,person);
 		//for displaying the current values present in show.js
 		displayValues(n);

 		//for displaying success alerts
 		alertForForm(1);

 		//pushing values in local storage
 		pushValues(n);

 }
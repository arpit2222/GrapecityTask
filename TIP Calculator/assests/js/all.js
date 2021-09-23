//base class name bill
class Bill{
 	//constructor
 	constructor(bill,tip){
 		this.bill=bill;
 		this.tip=tip;
 	}

 	//tip calculator
 	tip_cal(){
 		let c=(this.bill*this.tip)/100;
 		c=c.toFixed(2);
 		return c;
 	}

 	//Bill calculation
 	bill_cal(){
 		let x=parseFloat(this.tip_cal());
 		let y=parseFloat(this.bill);
 		y=x+y;
 		y=y.toFixed(2);
 		return y;
 	}
 }

 //derived class which will calculate value for each person
 class PerPerson extends Bill{
 	//constructor
 	constructor(bill,tip,person){
 		super(bill,tip);
 		this.person=person;
 	}

 	//bill calculation per person
 	bill_per(){
 		let b=this.bill_cal()/this.person;
 		b=b.toFixed(2);
 		return b;
 	}

 	//tip calculation per person
 	tip_per(){
 		let t=this.tip_cal()/this.person;
 		t=t.toFixed(2);
 		return t;
 	}

 	//static function for returning the date
 	static date_bill(){
 		return new Date();
 	}
 }


function alertForForm(m){
 	msg = document.getElementById('msg');

 	//alert for adding record
 	if(m==1){
 		msg.innerHTML=`<div class="alert alert-success alert-dismissible fade show" role="alert">
					  <strong>Sucess </strong> Tip is calculated sucessfully
					  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
					</div>
					`;
		setTimeout(()=>{
			msg.innerHTML='';
		},2000);
 	}

 	//Deleting all records
 	else if(m==2){
 		msg.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
					  <strong>Success </strong>ALL records are deleted
					  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
					</div>
					`;
					setTimeout(()=>{
			msg.innerHTML='';
		},2000);

 	}

 	//When someone press delete all without having data
 	else if(m==3){
 		msg.innerHTML=`<div class="alert alert-dark alert-dismissible fade show" role="alert">
					  <strong>Nothing to Delete </strong>Please enter data first
					  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
					</div>
					`;
					setTimeout(()=>{
			msg.innerHTML='';
		},2000);

 	}

 	//When particular row is deleted
 	else{
 		msg.innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
					  <strong>Success </strong>The record is deleted
					  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
					</div>
					`;
					setTimeout(()=>{
			msg.innerHTML='';
		},2000);

 	}
 }



 //list which will contain all the data
let lists=[];


//function for deleting particular record
function deleteRecord(s){
	console.log(s);
	let data=localStorage.getItem("tip");
	data=JSON.parse(data);
	let l=[];
	data.forEach(function(datas, index) {
		    //matches for the data to be deleted with the help of date time
		    if(datas.date!=s){
		    	l.push(datas);
		    }  

    });
    localStorage.clear();
    localStorage.setItem("tip",JSON.stringify(l));
    alertForForm(0);
    mainContent= document.getElementById('mainContent');
 	mainContent.innerHTML='';
    showAll();
}

//function for deleting all the records
function deleteall(){
	let data=localStorage.getItem("tip");
	data=JSON.parse(data);
	if(data){
		localStorage.clear();
		content= document.getElementById('content');
		content.innerHTML = '';
		mainContent= document.getElementById('mainContent');
		mainContent.innerHTML='';
		showAll();
		alertForForm(2);
	}	
	else{
		alertForForm(3);
	}

}

//showing the current calculated value
function displayValues(n){
 	mainContent= document.getElementById('mainContent');
 	mainContent.innerHTML=`
 							<br><br><br><br>
			  				<div class="row">
								<div class="col-2"></div>
								<div class="col-4">
									<h3>Tip</h3>
									<h5>Per Person</h5>
								</div>
								<div class="col-6">
									<h1>$ ${n.tip_per()}</h1>
								</div>
							</div>
							<br><br>
							<div class="row">
								<div class="col-2"></div>
								<div class="col-4">
									<h3>Bill</h3>
									<h5>Per Person</h5>
								</div>
								<div class="col-6">
									<h1>$ ${n.bill_per()}</h1>
								</div>
							</div>
 							`;
 	

 }


//for displaying the table
function displaytable(lists){
	localStorage.setItem("tip",JSON.stringify(lists));
	let data=localStorage.getItem("tip");
	data=JSON.parse(data);

	content= document.getElementById('content');
	content.innerHTML = '';

	data.forEach(function(datas, index) {
      
	 	let ustring=`<tr>
					      <td>${datas.date}</td>
					      <td>${datas.bill}</td>
					      <td>${datas.tip}</td>
					      <td>${datas.tper}</td>
					      <td>${datas.bper}</td>
					      <td>${datas.person}</td>
					      <td onclick="deleteRecord('${datas.date}')"><button type="button" class="btn btn-danger">Delete</button></td>
					      
					  </tr>`;

		content.innerHTML += ustring;
		let bform = document.getElementById('main');
		bform.reset();


    });

}


//function showing data when page reloads
function showAll(){
	let data=localStorage.getItem("tip");
	data=JSON.parse(data);
	if(data){

	content= document.getElementById('content');
	content.innerHTML = '';

	data.forEach(function(datas, index) {
      
	 	let ustring=`<tr>
					      <td>${datas.date}</td>
					      <td>${datas.bill}</td>
					      <td>${datas.tip}</td>
					      <td>${datas.tper}</td>
					      <td>${datas.bper}</td>
					      <td>${datas.person}</td>
					      <td onclick="deleteRecord('${datas.date}')"><button type="button" class="btn btn-danger">Delete</button></td>
					  </tr>`;

		content.innerHTML += ustring;


    });
}
}


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
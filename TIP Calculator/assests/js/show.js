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
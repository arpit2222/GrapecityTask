
//alerts for different conditons
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

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

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
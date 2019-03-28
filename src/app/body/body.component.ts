import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

	title="Welcome to Body"

	months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
    isAvailable = true;

    myFunction(event){
    	alert("Button clicked");
    	console.log(event);
    	document.getElementById("title").innerHTML = "Welcome to Body using Event Binding"
    }
    onmonthchange(event){
    	alert("Month changed to "+event.target.value);
    }
  constructor() { }

  ngOnInit() {
  	
  }

}

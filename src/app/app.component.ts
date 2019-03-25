import { Component } from '@angular/core';

function log(target,name,descriptor){
	console.log(target,name,descriptor)
	//store the original function in a variable
	const original = descriptor.value
	//do some manipulations with descriptor
	descriptor.value = function(...args){
		console.log("Function has ",args," as parameter")
		const result = original.apply(this,args)
		console.log("The result is ",result)
	}
	return descriptor
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro2angular';

  constructor(){
  	this.aSimpleMethod(5,2)
  }
  @log
	aSimpleMethod(a,b){
		return a*b
	}
}


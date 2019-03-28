import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   names = ["abc","cde"];
	addNames(name: string) {
		if(name){
		   this.names.push(name);
		}
	}

  constructor() { }

  ngOnInit() {
  }

}

# Angular 4 Basics:
4 things required  for Angular 4 setup:
1.	NodeJS
2.	Npm
3.	Angular CLI
<<<<<<< HEAD
4.	IDE
=======
4.	IDE.  
  
>>>>>>> e0fa666e87d2c6e665bc78e73e91273af51fa1d1
How to check node installed on your system:
```bash
$ node -v
```
How to install angular CLI on your system:
```bash
$ npm install -g @angular/cli
```
How to create project in angular:
```bash
$ ng new <app-name>
```
```bash
 $ cd <app-name>
```
```bash
$ ng serve
```

### Folder Structure:  

* e2e module: This is end to end test folder. This folder is used for integration testing and makes sure application works fine.

* node-modules – npm package is installed in this module. 

* src – This is the source folder of your application. We work with this when working on your application.
* angular-cli.json – This file contain project_name, angular-cli version etc details.
* .editorconfig – This contains config of your editor
* .gitignore – This file contains files that should not be uploaded on git
* package.json – this file tells which libraries will be installed in node_modules when you run npm install.
* karma.conf.js – this file is used for unit testing via protractor. All information required for the project is provided in karma.conf.js.
* app.module.ts – This file has import statement for libraries which is imported by angular-CLI.

It also has variables like:
1.	Declaration: It contains reference to the components in project. AppComponent is component which is created when project is initiated.
2.	Imports: This will have all the modules which is imported. At present , it contains browserModule.
3.	Providers: It contains reference to the services which is used by project.
4.	Bootstrap: This has reference to the default component which is created.

Every Component created has 5 files. Example appComponent
1.	App.module.ts: as explained above.
2.	App.component.css: css defined in this file will be applicable to component defined in html file.
3.	App.component.html : this HTML structure for the component.
4.	App.component.spec.ts : This file is used for unit testing of component.
5.	App.component.ts : The class for component is defined over here. You can do processing of HTML structure in .ts file. The processing will include activities  like connecting to database, interacting with other components , routing, services etc.  

App.component.ts:
```typescript
import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'app';
}
```
Index.html
```html
<!doctype html>
<html lang = "en">
   <head>
      <meta charset = "utf-8">
      <title>HTTP Search Param</title>
      <base href = "/">
      <link href = "https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link href = "https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono" rel="stylesheet">
      <link href = "styles.c7c7b8bf22964ff954d3.bundle.css" rel="stylesheet">
      <meta name = "viewport" content="width=device-width, initial-scale=1">
      <link rel = "icon" type="image/x-icon" href="favicon.ico">
   </head>
   
   <body>
      <app-root></app-root>
   </body>
</html>
```
<app-root> is the selector we defined in app.component.ts.  
  
Main.ts: It is the file from where we start our project development. It has  module which we need during development that is :  

1.Angular-core  

2.Platform-browser-dynamic  

3.App-component  

4.Environment  


* Environment

1. environment.prod.ts:

```typeScript
export const environment = {
  production: true
};
```

-Set production to true if you want to enable production mode.  

2. environment.ts : 

```bash
	
		export const environment = {
  			production: false
};
```
-Set production to false if you want to do debugging or development.  

### Creating New Component:

Angular – cli:  

```bash
$ ng g component <component-name>
```

This will create a component inside app folder. It will have five files as mentioned above.  

Example: I have created header and footer components:  

```bash
$ ng g component navbar
```  

Now if you check app.module.ts file. Your component will be already added there.  

You will write your html code inside navbar.component.html file:  

```html
<header>
  <h2>Cities</h2>
</header>
```

You will write all your CSS code inside navbar.component.css file:
```
header {
  background-color: #666;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color: white;
}
```

Then you will check navbar.component.ts file 

```typescript
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './new-navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
constructor() { }
 ngOnInit() {
  }
}
```

there you will find:

1.Selector: selector of the component which is to be added in app.component.html  

Example: In case of navbar it will be ‘app-navbar’.  

2. templateUrl: HTML file associated component.  

Example: Incase of navbar it will be ‘navbar.component.html’

3. styleUrls: CSS file associated with component.  

Example: Incase of navbar it will be ‘navbar.component.css’.  

We can also create new html and css file and provide the link of that file inside templateUrl and styleUrls.  

You will also find the new class created with name of your component and it will have constructor and ngOnInit() method:  

Example:
```typescript
export class NavbarComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
```

NgOnInit method is called by default when class is executed.  

In the same way we have created footer component.  


#Data Binding

Data binding is done using {{}} in <component-name>.component.html.   

You can declare variables in < component-name >.component.ts.   

We will see the example with structural directives like *ngIf , *ngFor.   

We will work on getting to know directives as the project goes on.


So we have created a new component called body.  

In body.component.ts file we have following code:  

```typeScript
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
constructor() { }
ngOnInit() { }
}
```

We have used two variables title and months in BodyComponent class which we will use in body.component.html.   
 
-body.component.html:
```html
	<section>
  <nav>
    <ul>
      <li><a href="#">London</a></li>
      <li><a href="#">Paris</a></li>
      <li><a href="#">Tokyo</a></li>
    </ul>
  </nav>
  
  <article>
  	<h1>Welcome to {{title}}</h1>
    <h2>London</h2>
    <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
    <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
    <select>
    	<option *ngFor="let i of months">{{i}}</option>
    </select>
  </article>
</section>
```

Lets do one with *ngIf 
We will have change in body.component.html
If:
```html
<div>
    	<span *ngIf="isAvailable ">Condition is Valid</span>
    </div>
```
If Else:
```html
<div>
    	<span *ngIf="isAvailable; else Condition1">Condition is Valid</span>
    	<ng-template #condition1>Condition is valid</ng-template>
    </div>
```
If then else:
<<<<<<< HEAD
=======

```html
>>>>>>> e0fa666e87d2c6e665bc78e73e91273af51fa1d1
<div>
    	<span *ngIf="isAvailable;then condition1 else condition2">Condition is Valid</span>
    	<ng-template #condition1>Condition is valid</ng-template>
    	<ng-template #condition2>Condition is invalid</ng-template>
<<<<<<< HEAD
    </div>






=======
</div>
```
>>>>>>> e0fa666e87d2c6e665bc78e73e91273af51fa1d1

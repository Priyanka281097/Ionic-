import { NgIf } from '@angular/common';
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor() { }

  input = "";
  input1 = "";

  users = [
    { id: 1, name: "vinay", city: "banglore", age: 21 },
    { id: 2, name: "sanjay", city: "chennai", age: 22 },
    { id: 3, name: "vinod", city: "mumbai", age: 34 },
    { id: 4, name: "sanjay", city: "pune", age: 30 },
    { id: 5, name: "dinesh", city: "pune", age: 24 },
    { id: 6, name: "mohan", city: "banglore", age: 21 },
    { id: 7, name: "priya", city: "chennai", age: 22 },
    { id: 8, name: "moni", city: "mumbai", age: 34 },
    { id: 9, name: "madhu", city: "pune", age: 30 },
    { id: 10, name: "suresh", city: "banglore", age: 24 }
  ];

  ngOnInit() {
  }

  showByName(){
    let result = this.users.filter ( 
      (item) => {
        if(item.name == this.input){
          return (item.name , item.city , item.age);
        }
      }
    )
    console.log(result)
  }
  showByCity(){
    let result = this.users.filter ( 
      (item) => {
        if(item.city == this.input1){
          return (item.name , item.city , item.age);
        }
      }
    )
    console.log(result)
  }

}


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  constructor(public navCtrl:NavController){}
  tasks:{name:string}[]=[
    {name:"タスク１"}
  ]
  task:string;

  toHome(){
    this.navCtrl.push(HomePage)
  }
  ionViewWillEnter(){
    if(localStorage.getItem('tasks')){
     this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  };
  addTask(){
    this.tasks.push({
      name:this.task
    });
    localStorage.setItem("tasks", JSON.stringify(this.tasks))
    this.task="";
  }
}

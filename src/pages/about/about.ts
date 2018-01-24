import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  searchPage = SearchPage;

  constructor(public navCtrl:NavController){}
  tasks:{name:string}[]=[
    {name:"タスク１"}
  ]
  task:string;

  // そのままページ遷移するパターン
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

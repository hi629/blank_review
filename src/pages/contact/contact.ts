import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor( 
    public actionSheetCtrl:ActionSheetController,
    public alertCtrl:AlertController
   ){}

  tasks:{name:string}[];
  ionViewWillEnter(){
    if(localStorage.getItem("tasks")){
      this.tasks = JSON.parse(localStorage.getItem("tasks"))
    }
  }
  changeTask(index:number){
    let actionSheet = this.actionSheetCtrl.create({
      title:"タスクの変更",
      buttons:[
        {
          text:"削除",
          role:"destructive",
          handler:()=>{
            this.tasks.splice(index,1);
            localStorage.setItem('tasks',JSON.stringify(this.tasks));
          },
        },
        {
          text:"変更",
          handler:()=>{
            this._renameTask(index);
          }
        },
        {
          text:"閉じる",
          role:"cancel",
          handler:()=>{
            console.log("cancel clicked");
          }
        }
      ]
    });
    actionSheet.present()
  };
  _renameTask(index:number){
    let prompt = this.alertCtrl.create({
      title:"名前の変更",
      inputs:[
        {
          name:"nam",
          placeholder:"名前",
          value:this.tasks[index].name
        },
      ],
      buttons:[
        {
          text:"閉じる",
        },
        {
          text:"保存",
          handler:(data)=>{
            // name.data.の後に入るやつはinputsのnameを指している
            this.tasks[index] = {name:data.nam};
            localStorage.setItem("tasks",JSON.stringify(this.tasks));
          }
        }
      ]
    });
    prompt.present();
  }
}

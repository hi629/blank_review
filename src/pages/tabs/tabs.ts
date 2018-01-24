import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  aboutPage = AboutPage;
  contactPage= ContactPage;
  searchPage = SearchPage;

}

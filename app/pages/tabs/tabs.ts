import {Page} from 'ionic-framework/ionic';
import {Page1} from '../page1/page1';
import {Page2} from '../page2/page2';
import {Page3} from '../page3/page3';
import {AnipoPage} from '../anipo/anipo';
import {ChooseOrganization} from '../../components/choose-organization/choose-organization';
// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: Type = Page1;
  tab2Root: Type = Page2;
  tab3Root: Type = Page3;
  tab4Root: Type = AnipoPage;
  tab5Root: Type = ChooseOrganization;
  
  constructor() {

  }
}

import {Page} from 'ionic-framework/ionic';
import {Organizations} from '../../collections/organizations';
import {MeteorComponent} from 'angular2-meteor-client';

@Page({
  templateUrl: 'build/pages/choose-organization/choose-organization.html',
})
export class ChooseOrganization extends MeteorComponent {
    organizations: Mongo.Cursor<Object>
    
  constructor() {
   super()
   this.autorun(() => {
       this.subscribe('organizations',() => {
           this.organizations = Organizations.find()
       })
   })
  }
  
  orgChoosen(org) {
      console.log(org.name + " clicked")
      
  }
}

import * as angular from 'angular';
import * as angularMeteor from 'angular-meteor';
import {Meteor} from 'meteor/meteor';
import template from './login.html';

export class LoginComponent{
  public username: string = '';
  public password: string = '';
  public error: string = '';

  constructor(
    private $scope: ng.IScope,
    private $reactive: any,
    private $state
  ){
    'ngInject';
    $reactive(this).attach($scope);
  }

  login(){
    Meteor.loginWithPassword(this.username, this.password, (err: {error: string, reason: string, message: string}): void =>{
      if(!err){
        this.$state.go('');
      }else{
        this.error = err.reason;
      }
    });
  }
}

export const name = 'login';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template: template,
  controllerAs: name,
  controller: LoginComponent
});

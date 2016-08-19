import * as angular from 'angular';
import * as angularMeteor from 'angular-meteor';
import template from './adminlayout1.html';

export class AdminLayoutComponent{

  constructor($scope: ng.IScope, $reactive: any){
    'ngInject';
    $reactive(this).attach($scope);
  }
}

export const name = 'adminLayout';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  transclude: true,
  template: template,
  controllerAs: name,
  controller: AdminLayoutComponent
});

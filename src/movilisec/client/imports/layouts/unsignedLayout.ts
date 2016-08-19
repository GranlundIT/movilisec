import * as angular from 'angular';
import * as angularMeteor from 'angular-meteor';
import template from './unsignedLayout.html';

export class UnsignedLayoutComponent{

  constructor($scope: ng.IScope, $reactive: any){
    'ngInject';
    $reactive(this).attach($scope);
  }
}

export const name = 'unsignedLayout';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  transclude: true,
  template: template,
  controllerAs: name,
  controller: UnsignedLayoutComponent
});

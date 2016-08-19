import * as angular from 'angular';
import * as angularMeteor from 'angular-meteor';
import * as ngMaterial from 'angular-material';
import * as uiRouter from 'angular-ui-router';
import {routes} from './movilisec.routes.ts';
import { name as unsignedLayout } from './layouts/unsignedlayout1';
import { name as adminLayout } from './layouts/adminlayout1';
import { name as login } from './auth/login/login';
import template from './movilisec.html';

export const name = 'movilisec';

class MovilisecComponent{}

export default angular.module(name, [
    angularMeteor,
    ngMaterial,
    uiRouter,
    unsignedLayout,
    adminLayout,
    login
])
  .component(name, {
    template: template,
    controllerAs: name,
    controller: MovilisecComponent
  })
  .config(config)
  .config(routes)
  .run(run);


export function config($locationProvider, $urlRouterProvider, $mdIconProvider){
  'ngInject';
  $mdIconProvider.defaultIconSet('fonts/mdi.svg');
  $urlRouterProvider.otherwise('/404');
  $locationProvider.html5Mode(true);
}

export function run($rootScope, $state){
  'ngInject';
  $rootScope.$on('$stateChangeError',
    (event, toState, toParams, fromState, fromParams, error) => {
      if (error === 'AUTH_REQUIRED') {
        $state.go('login');
      }
    }
  );
}





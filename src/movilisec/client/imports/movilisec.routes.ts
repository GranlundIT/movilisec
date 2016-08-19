

export function routes($stateProvider){
  'ngInject';
  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>'
    })
    .state('admin', {
      url: '/admin',
      abstract: true,
      template: '<admin-layout></admin-layout>',
      resolve: {
        verifyUser
      }
    })
    .state('admin.dashboard', {
      url: '/dashboard',
      template: '<dashboard></dashboard>'
    });
}

function verifyUser($q: ng.IQService)
{
  if (Meteor.userId () === null) {
    return $q.reject ('AUTH_REQUIRED');
  } else {
    return $q.resolve ();
  }
}

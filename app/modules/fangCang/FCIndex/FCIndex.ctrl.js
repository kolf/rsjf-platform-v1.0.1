/**
 * Created by nico on 2016-5-23.
 */
define([
    '../../../app'
], function(controllers) {
    controllers.controller('FCIndexController',FCIndexController);
    FCIndexController.$inject=['$scope', '$state', 'UserLogin'];
});
function FCIndexController($scope, $state, UserLogin) {
    var vm=this;
    vm.name='nico';

}

FCIndexController.prototype={

}
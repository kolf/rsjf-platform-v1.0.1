/**
 * Created by nico on 2016-5-23.
 */
define([
    '../../../app'
], function(controllers) {
    controllers.controller('HeaderController', [
        '$scope', '$state', 'UserLogin',
        function($scope, $state, UserLogin) {
            $scope.name='nico';
        }
    ]);
});
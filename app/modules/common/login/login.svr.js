/**
 * 一个用户登录服务。
 * 每次切换状态（state）时都会检查用户是否已登录，
 * 若没有则跳到登录界面。
 */
define(['../../../app'], function(services) {

	services.factory('UserLogin', UserLogin)

	.config(['$validationProvider', function($validationProvider) {
		// or we can just setup directly
		$validationProvider.setDefaultMsg({
				username: {
					error: '帐号格式输入不正确'
				},
				password: {
					error: '密码格式输入不正确'
				},
				validateCode: {
					error: '验证码格式不正确'
				}
			})
			.setExpression({
				username: /^\w+$/,
				password: /^\w+$/,
				validateCode: /^\w{4}$/
			});
	}])

	UserLogin.$inject = ['$q', '$state', '$http', '$rootScope', 'API', 'clientid'];

	function UserLogin($q, $state, $http, $rootScope, API, clientid) {
		var loginDef = null;
		var isLogged = false;
		var state = '';

		var service = {
			login: login,
			needCheck: needCheck,
			handleLogin: handleLogin,
			oauthValidateCode: oauthValidateCode,
			get logged() {
				return isLogged;
			}
		};

		return service;

		function onLogin() {
			loginDef.resolve();
		}

		function handleLogin() {
			loginDef = $q.defer();
			$state.go('login', {}, {
				location: false
			});
			return loginDef.promise;
		}

		function needCheck(state) {
			return state.name.indexOf('logged.') >= 0;
		}

		function oauthValidateCode() {
			state = 'M' + new Date().getTime() + (Math.random() + '').replace('.', '');
			return API + 'oauthValidateCode?state=' + state + '&clientId=' + clientid + '&r=' + new Date().getTime();
		}

		function login(data) {
			var def = $q.defer();
			var options = angular.extend({}, data, {
				clientId: clientid,
				redirectUri: '/index',
				state: state
			})
			return $http.post(API + 'oauthLanding', options).then(function(response) {
				var data = response.data;
				if (data.result === 'true') {
					$state.go('logged.kzIndex');
					// isLogged = true;
					// def.resolve();
					// onLogin();
				} else {
					return data;
				}

			}).catch(errorCallback);

			return def.promise;
		}

		function errorCallback(data) { //统一错误处理
			console.error('请求错误!' + data.msg);
		}
	}
});
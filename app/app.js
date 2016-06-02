define([
	'angular'
], function(angular) {
	return angular.module('application', [])
		.config([
			'$stateProvider',
			'$urlRouterProvider',
			function($stateProvider, $urlRouterProvider) {
				//$urlRouterProvider.otherwise( '/index' );

				// 设置路由
				$stateProvider.state('login', {
						url: '/login',
						templateUrl: 'modules/common/login/login.html',
						controller: 'LoginController as vm',
						resolve: {
							load: loadDeps([
								'modules/common/login/login.ctrl',

								// .css 后缀需要带上，否则 gulp-rev-all 不会更新引用
								'css!./modules/common/login/login.css' // 依赖的 css 可以写在这里，也可以写在 LoginController.js 里
							])
						}
					})
					.state('logged', {
						abstract: true,
						templateUrl: 'modules/common/logged/logged.html',
						controller: 'LoggedController as vm',
						resolve: {
							load: loadDeps([
								'css!./modules/common/logged/logged.css',
								'modules/common/logged/logged.ctrl',
							])
						}
					})
					.state('logged.kzIndex', {
						url: '/index',
						templateUrl: 'modules/keZhan/index/index.html',
						controller: 'IndexController as vm',
						resolve: {
							load: loadDeps([
								'modules/keZhan/index/index.ctrl',
								'css!./modules/keZhan/index/index.css'
							])
						}
					});

				// 不能使用下面这句代码：
				$urlRouterProvider.otherwise('/login');
				// 见 http://stackoverflow.com/questions/25065699/why-does-angularjs-with-ui-router-keep-firing-the-statechangestart-event
				// 另外，这段代码必须放在最后一个路由，否则直接在链接中到 #/路由 会无效
				// $stateProvider.state('otherwise', {
				// 	url: '*path',
				// 	template: '',
				// 	controller: [
				// 		'$state',
				// 		function($state) {
				// 			$state.go('logged.kzIndex');
				// 		}
				// 	]
				// });

				/**
				 * 加载依赖的辅助函数
				 * @param deps
				 * @returns {*[]}
				 */
				function loadDeps(deps) {
					return [
						'$q',
						function($q) {
							var def = $q.defer();
							require(deps, function() {
								def.resolve();
							});
							return def.promise;
						}
					];
				}

			}
		]).constant("API", "http://121.40.236.90:8095/")
		.constant("clientid", "yyptID01");
});
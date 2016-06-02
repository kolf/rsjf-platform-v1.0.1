require.config({
	paths: {
		angular: 'lib/js/angular/angular',
		ngAnimate: 'lib/js/angular/angular-animate',
		uiRouter: 'lib/js/angular/angular-ui-router'
	},
	shim: {
		angular: {
			exports: 'angular',
			init: function() {
				// ---------------------重要代码段！------------------------------
				// 应用启动后不能直接用 module.controller 等方法，否则会报控制器未定义的错误，
				// 见 http://stackoverflow.com/questions/20909525/load-controller-dynamically-based-on-route-group
				var _module = angular.module;
				angular.module = function() {
					var newModule = _module.apply(angular, arguments);
					if (arguments.length >= 2) {
						newModule.config([
							'$controllerProvider',
							'$compileProvider',
							'$filterProvider',
							'$provide',
							function($controllerProvider, $compileProvider, $filterProvider, $provide) {
								newModule.controller = function() {
									$controllerProvider.register.apply(this, arguments);
									return this;
								};
								newModule.directive = function() {
									$compileProvider.directive.apply(this, arguments);
									return this;
								};
								newModule.filter = function() {
									$filterProvider.register.apply(this, arguments);
									return this;
								};
								newModule.factory = function() {
									$provide.factory.apply(this, arguments);
									return this;
								};
								newModule.service = function() {
									$provide.service.apply(this, arguments);
									return this;
								};
								newModule.provider = function() {
									$provide.provider.apply(this, arguments);
									return this;
								};
								newModule.value = function() {
									$provide.value.apply(this, arguments);
									return this;
								};
								newModule.constant = function() {
									$provide.constant.apply(this, arguments);
									return this;
								};
								newModule.decorator = function() {
									$provide.decorator.apply(this, arguments);
									return this;
								};
							}
						]);
					}
					return newModule;
				};
			}
		},
		uiRouter: ['angular'],
		ngAnimate: ['angular'],
		'lib/js/angular/angular-validation': ['angular'],
		'lib/js/angular/angular-validation-rule': ['angular'],
		'lib/js/angular/angular-toastr': ['angular'],
		'lib/js/angular/angular-toastr.tpls': ['angular'],
		'lib/js/angular/angular-strap': ['angular', 'ngAnimate'],
		'lib/js/angular/angular-strap.tpl': ['angular', 'ngAnimate'],
		'modules/common/angular-utils': ['angular'],
		// 如果测试时需要用到 angular-mocks.js 则取消注释，上线前一定记得注释掉，以免多加载一个文件
		// '../test/angular-mocks': ['angular']
	},
	map: {
		'*': {
			css: 'lib/js/require/css',
			text: 'lib/js/require/require'
		}
	}
});

require([
	'angular',
	// 第三方库只需要列在这里就可以了
	'uiRouter',
	'ngAnimate',
	'lib/js/angular/angular-validation',
	'lib/js/angular/angular-validation-rule',
	'lib/js/angular/angular-toastr',
	'lib/js/angular/angular-toastr.tpls',
	'lib/js/angular/angular-strap',
	'lib/js/angular/angular-strap.tpl',
	'modules/common/angular-utils',
	// 如果测试时需要用到 angular-mocks.js 则取消注释，上线前一定记得注释掉，以免多加载一个文件
	//'../test/angular-mocks' ,

	// 别忘了依赖 app 模块
	'./app', // 前面的 ./ 必须带上，否则 gulp-rev-all 不会更新引用

	// 公用的服务和指令列在下面。
	// 这些模块因为都依赖 app.js ，所以必须声明在这里而不是 app.js 里。

	// 'directives/focus-me'
], function(angular) {
	angular.module('all', ['ui.router', 'ngAnimate', 'utils', 'mgcrea.ngStrap', 'toastr', 'validation', 'validation.rule', 'application']); // 注意：app 模块只能放在最后一个，因为它依赖前面的第三方模块！
	angular.module('boot', ['all']); // 单独加一个 all 模块的原因见 test/protractor.conf.js 的 onPrepare 事件
	angular.bootstrap(document, ['boot']);
});
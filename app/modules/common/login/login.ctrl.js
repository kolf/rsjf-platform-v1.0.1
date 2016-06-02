define([
	'../../../app',
	'./login.svr',
], function(controllers) {

	controllers.controller('LoginController', LoginController);

	LoginController.$inject = ['UserLogin', '$injector', 'toastr'];


	function LoginController(UserLogin, $injector, toastr) {
		var $validationProvider = $injector.get('$validation');

		var vm = this;

		vm.login = login;
		vm.getImgCode = getImgCode;
		vm.checkValid = $validationProvider.checkValid;

		vm.form = {
			userLoginName: '',
			imgcode: '',
			password: ''
		};

		activate();

		function activate() {
			getImgCode();
		}

		function login(form) {
			$validationProvider.validate(form)
				.success(function() {
					UserLogin.login(vm.form).then(function(data) {
						if (data) {
							toastr.error(data.msg, '登陆失败');
							getImgCode();
							if (data.retCode === '1') { //验证码不正确
								vm.form.imgcode = '';
							} else if (data.retCode === '2') { //用户名或密码不正确
								vm.form = {};
							}
						}
					});
				})

		};

		function getImgCode() {
			vm.imgCode = UserLogin.oauthValidateCode();
		}
	}

});
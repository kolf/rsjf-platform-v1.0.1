define(["../../../38459714ca0f8a4a32d1d9d5419fd8ce"],function(e){function t(e,t,n,r,o,a){function i(){return s=e.defer(),t.go("login",{},{location:!1}),s.promise}function d(e){return e.name.indexOf("logged.")>=0}function c(){return g="M"+(new Date).getTime()+(Math.random()+"").replace(".",""),o+"oauthValidateCode?state="+g+"&clientId="+a+"&r="+(new Date).getTime()}function u(r){var i=(e.defer(),angular.extend({},r,{clientId:a,redirectUri:"/index",state:g}));return n.post(o+"oauthLanding",i).then(function(e){var n=e.data;return"true"!==n.result?n:void t.go("logged.kzIndex")})["catch"](l)}function l(e){console.error("请求错误!"+e.msg)}var s=null,f=!1,g="",h={login:u,needCheck:d,handleLogin:i,oauthValidateCode:c,get logged(){return f}};return h}e.factory("UserLogin",t).config(["$validationProvider",function(e){e.setDefaultMsg({username:{error:"帐号格式输入不正确"},password:{error:"密码格式输入不正确"},validateCode:{error:"验证码格式不正确"}}).setExpression({username:/^\w+$/,password:/^\w+$/,validateCode:/^\w{4}$/})}]),t.$inject=["$q","$state","$http","$rootScope","API","clientid"]});
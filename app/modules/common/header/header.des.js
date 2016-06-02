/**
 * Created by nico on 2016-5-23.
 */
define(['../../../app'], function (directives) {
    directives.directive('appHeader',GetHeader );
});

function GetHeader() {
    return {
        restrict: 'E',
        templateUrl: 'modules/common/header/header.html',
        scope:{},
        controller: Getmenu,
        link: function (scope, element, attrs, controller) {
            console.log(attrs);
            console.log(controller);
        },
        /*compile: function(tElem, tAttrs) {
         console.log(name + ': compile => ' + tElem.html());
         return {
         pre: function (scope, iElem, iAttrs) {
         console.log(name + ': pre link => ' + iElem.html());
         },
         post: function (scope, iElem, iAttrs) {
         console.log(name + ': post link => ' + iElem.html());
         }
         }
         }*/
    }
    Getmenu.$inject('$scope', '$element', '$http', 'API','localstorage');
    function Getmenu($scope, $element, $http, API,localstorage) {
        var vm = this;
        vm.rootPath = API;
        localstorage.setObject('loginData',{name:'nico'});
        var params=localstorage.getObject('loginData');
        console.log(params);
        /*'http://121.40.236.90:8095/'*/
        var data={
            clientId: '1',
            group: '1',
            interfaceName: '1',
            state: '1',
            token: '1',
            userCode: '1',
            accountCode:'1',
            systemId:'1'
        };
        $http.post(vm.rootPath + 'toGetMenu',data).then(function(data){
            console.log(data);
            var data = {
                "result": true,
                "data": [{
                    "statusId": 1,
                    "createTime": 1459321481000,
                    "updateTime": 1459850884000,
                    "submenus": [{
                        "statusId": 1,
                        "createTime": 1459850998000,
                        "updateTime": 1459850998000,
                        "menuOrderId": 10073,
                        "menuType": 1,
                        "menuId": 261,
                        "systemId": "S00001",
                        "_parentId": 254,
                        "menuPath": "toStudentLoan?menuId=261",
                        "menuName": "学生放款列表 "
                    }, {
                        "statusId": 1,
                        "createTime": 1459850963000,
                        "updateTime": 1459850963000,
                        "menuOrderId": 10072,
                        "menuType": 1,
                        "menuId": 260,
                        "systemId": "S00001",
                        "_parentId": 254,
                        "menuPath": "totudentAgreementExamine?menuId=260",
                        "menuName": "学生协议审核列表"
                    }, {
                        "statusId": 1,
                        "createTime": 1459850922000,
                        "updateTime": 1459850922000,
                        "menuOrderId": 10071,
                        "menuType": 1,
                        "menuId": 259,
                        "systemId": "S00001",
                        "_parentId": 254,
                        "menuPath": "toStudentExamine?menuId=259",
                        "menuName": "学生审核列表"
                    }, {
                        "statusId": 1,
                        "createTime": 1459404175000,
                        "updateTime": 1459404175000,
                        "menuOrderId": 10070,
                        "menuType": 1,
                        "menuId": 258,
                        "systemId": "S00001",
                        "_parentId": 254,
                        "menuPath": "toreRecharges?menuId=258",
                        "menuName": "充值"
                    }, {
                        "statusId": 1,
                        "createTime": 1459404140000,
                        "updateTime": 1459404140000,
                        "menuOrderId": 10069,
                        "menuType": 1,
                        "menuId": 257,
                        "systemId": "S00001",
                        "_parentId": 254,
                        "menuPath": "toKzWithdraw?menuId=257",
                        "menuName": "提现"
                    }, {
                        "statusId": 1,
                        "createTime": 1459321824000,
                        "updateTime": 1460706219000,
                        "menuOrderId": 10068,
                        "menuType": 1,
                        "menuId": 256,
                        "systemId": "S00001",
                        "_parentId": 254,
                        "menuPath": "toCustomerListSelect?menuId=256",
                        "menuName": "机构审核列表"
                    }, {
                        "statusId": 1,
                        "createTime": 1459321792000,
                        "updateTime": 1459321792000,
                        "menuOrderId": 10067,
                        "menuType": 1,
                        "menuId": 255,
                        "systemId": "S00001",
                        "_parentId": 254,
                        "menuPath": "toCreditOpen?menuId=255",
                        "menuName": "机构开通列表"
                    }],
                    "menuOrderId": 10066,
                    "menuType": 1,
                    "menuId": 254,
                    "systemId": "S00001",
                    "_parentId": 2,
                    "menuPath": "?menuId=254",
                    "menuName": "课栈授信"
                }, {
                    "statusId": 1,
                    "createTime": 1452052179000,
                    "updateTime": 1452052179000,
                    "submenus": [{
                        "statusId": 1,
                        "createTime": 1452052568000,
                        "updateTime": 1452052568000,
                        "menuOrderId": 10016,
                        "menuType": 1,
                        "menuId": 204,
                        "systemId": "S00001",
                        "_parentId": 188,
                        "menuPath": "toUpdateAccountInfoStatus?menuId=204",
                        "menuName": "更改验证状态"
                    }, {
                        "statusId": 1,
                        "createTime": 1452052547000,
                        "updateTime": 1452052547000,
                        "menuOrderId": 10015,
                        "menuType": 1,
                        "menuId": 203,
                        "systemId": "S00001",
                        "_parentId": 188,
                        "menuPath": "toRefund?menuId=203",
                        "menuName": "退票"
                    }, {
                        "statusId": 1,
                        "createTime": 1452052516000,
                        "updateTime": 1456823478000,
                        "menuOrderId": 10014,
                        "menuType": 1,
                        "menuId": 202,
                        "systemId": "S00001",
                        "_parentId": 188,
                        "menuPath": "toSelectAccountListForJsp?menuId=202",
                        "menuName": "开通/关闭银行账户"
                    }, {
                        "statusId": 1,
                        "createTime": 1452052490000,
                        "updateTime": 1452052490000,
                        "menuOrderId": 10013,
                        "menuType": 1,
                        "menuId": 201,
                        "systemId": "S00001",
                        "_parentId": 188,
                        "menuPath": "toUpdateOrderSysStatusByAccountSys?menuId=201",
                        "menuName": "同步账户状态到订单"
                    }, {
                        "statusId": 1,
                        "createTime": 1452052432000,
                        "updateTime": 1452052432000,
                        "menuOrderId": 10012,
                        "menuType": 1,
                        "menuId": 200,
                        "systemId": "S00001",
                        "_parentId": 188,
                        "menuPath": "toUpdateRealTimeTransInfoByRecAndPaySys?menuId=200",
                        "menuName": "实时代收查询处理"
                    }, {
                        "statusId": 1,
                        "createTime": 1452052414000,
                        "updateTime": 1452052414000,
                        "menuOrderId": 10011,
                        "menuType": 1,
                        "menuId": 199,
                        "systemId": "S00001",
                        "_parentId": 188,
                        "menuPath": "toUpdateAccountStatus?menuId=199",
                        "menuName": "修改账户状态"
                    }, {
                        "statusId": 1,
                        "createTime": 1452052391000,
                        "updateTime": 1452052391000,
                        "menuOrderId": 10010,
                        "menuType": 1,
                        "menuId": 198,
                        "systemId": "S00001",
                        "_parentId": 188,
                        "menuPath": "toBatchSubmitToRecAndPay?menuId=198",
                        "menuName": "提交代收付系统"
                    }, {
                        "statusId": 1,
                        "createTime": 1452052370000,
                        "updateTime": 1452052370000,
                        "menuOrderId": 10009,
                        "menuType": 1,
                        "menuId": 197,
                        "systemId": "S00001",
                        "_parentId": 188,
                        "menuPath": "toPayCachePushed?menuId=197",
                        "menuName": "处理代收付缓存数据"
                    }, {
                        "statusId": 1,
                        "createTime": 1452052353000,
                        "updateTime": 1452052353000,
                        "menuOrderId": 10008,
                        "menuType": 1,
                        "menuId": 196,
                        "systemId": "S00001",
                        "_parentId": 188,
                        "menuPath": "toUpdateGenResultsByQuyRecAndPaySys?menuId=196",
                        "menuName": "代收付查询处理"
                    }, {
                        "statusId": 1,
                        "createTime": 1452052334000,
                        "updateTime": 1452052334000,
                        "menuOrderId": 10007,
                        "menuType": 1,
                        "menuId": 195,
                        "systemId": "S00001",
                        "_parentId": 188,
                        "menuPath": "toForAccount?menuId=195",
                        "menuName": "调账"
                    }, {
                        "statusId": 1,
                        "createTime": 1452052318000,
                        "updateTime": 1452052318000,
                        "menuOrderId": 10006,
                        "menuType": 1,
                        "menuId": 194,
                        "systemId": "S00001",
                        "_parentId": 188,
                        "menuPath": "toCompanyOpenAccount?menuId=194",
                        "menuName": "企业开户"
                    }, {
                        "statusId": 1,
                        "createTime": 1452052296000,
                        "updateTime": 1452052296000,
                        "menuOrderId": 10005,
                        "menuType": 1,
                        "menuId": 193,
                        "systemId": "S00001",
                        "_parentId": 188,
                        "menuPath": "toQueryFinanaceentryList?menuId=193",
                        "menuName": "查询账户流水"
                    }, {
                        "statusId": 1,
                        "createTime": 1452052275000,
                        "updateTime": 1456888636000,
                        "menuOrderId": 10004,
                        "menuType": 1,
                        "menuId": 192,
                        "systemId": "S00001",
                        "_parentId": 188,
                        "menuPath": "toShareBankCard?menuId=192",
                        "menuName": "汇总账户"
                    }, {
                        "statusId": 1,
                        "createTime": 1452052255000,
                        "updateTime": 1452052255000,
                        "menuOrderId": 10003,
                        "menuType": 1,
                        "menuId": 191,
                        "systemId": "S00001",
                        "_parentId": 188,
                        "menuPath": "toAntideduct?menuId=191",
                        "menuName": "扣款冲正"
                    }, {
                        "statusId": 1,
                        "createTime": 1452052233000,
                        "updateTime": 1452052233000,
                        "menuOrderId": 10002,
                        "menuType": 1,
                        "menuId": 190,
                        "systemId": "S00001",
                        "_parentId": 188,
                        "menuPath": "toWipeAccount?menuId=190",
                        "menuName": "抹账"
                    }, {
                        "statusId": 1,
                        "createTime": 1452052206000,
                        "updateTime": 1456823439000,
                        "menuOrderId": 10001,
                        "menuType": 1,
                        "menuId": 189,
                        "systemId": "S00001",
                        "_parentId": 188,
                        "menuPath": "Better/toGetUserBalance?menuId=189",
                        "menuName": "账户余额查询"
                    }],
                    "menuOrderId": 10000,
                    "menuType": 1,
                    "menuId": 188,
                    "systemId": "S00001",
                    "_parentId": 2,
                    "menuPath": "?menuId=188",
                    "menuName": "金融中心账户"
                }],
                "msg": "账号菜单查询成功"
            };
            $scope.menus = data.data;
            console.log($scope.menus);
        },function(err){
            console.log(err);
        });
        $scope.name = 'nico';

    }
}
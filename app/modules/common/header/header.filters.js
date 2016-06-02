/**
 * Created by nico on 2016-5-23.
 */
define([
    '../../../app'
], function(filters) {
    filters.filter('showMenusUrl', function () {
            return function (val) {
                if (val.indexOf('#') == -1) {
                    return false;
                } else {
                    return true;
                }
            }

        })
        .filter('getMenusUrl', function () {
            return function (val) {

                if (val.indexOf("#") == -1) {
                    return val;
                } else {
                    var splitUrl= val.split('#')[1];
                    return splitUrl.substr(splitUrl.indexOf("/")+1,splitUrl.length);
                }
            }

        })
});


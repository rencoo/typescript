"use strict";
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    }, 1000 * i_1);
};
for (var i_1 = 0; i_1 < 10; i_1++) {
    _loop_1(i_1);
}

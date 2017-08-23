/**
 * 检测PC还是手机设备
 * true:  PC
 * false: 手机
 */
function ispc() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}


if(!ispc()){
//	window.location = "http://wap.hpwifi.com";
}

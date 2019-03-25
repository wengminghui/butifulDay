// 项目中的每个接口，都在此文件中，单独创建一个函数暴露出来
// 在本文件中的接口函数中，避免掺杂有关UI渲染、页面跳转相关的逻辑，
// 这些逻辑应当是由回调函数中来处理
// 使用示例
// // 1 设置请求成功回调，当返回code为0时调用此函数
// var onGetUserInfoSuccess = function (resp) {
//   var matchList = resp.data.items;  // 5个比赛的数据列表
//   // 传递个人信息数据数据给Page 3
//   app.store.matchList = matchList;
//   app.showPage(3);
// };
// // 2 设置请求失败回调，当返回code不为0时调用此函数
// var onGetUserInfoError = function (resp) {
//   var errorCode = resp.code;
//   if (errorCode == 10217) {
//     // 用户未登录，引导登录
//     app.showPage(6);
//   } else {
//     // 其他错误，显示错误信息
//     app.showToast(resp.msg);
//   }
// }
// // 3 调用接口
// app.api.ajaxGetUserInfo({}, onGetUserInfoSuccess, onGetUserInfoError);

(function() {
  var app = window.app || {};

  // 通用函数 start
  function getCookie(name) {
    var arr;
    var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  }

  // 从cookie中读取 X-CSRF-TOKEN
  function getCookieCsrfToken() {
    var csrfToken = getCookie("X-CSRF-TOKEN");
    return csrfToken;
  }
  // 通用函数 end

  // 示例ajax 调用接口 模板
  // 注意复制后，要将log打印时的[ajaxGetUserInfo]更换为新函数名
  function ajaxGetUserInfo(params, onRespSuccess, onRespError) {
    // 如需测试假数据，可直接在此返回, 示例如下
    // onRespSuccess({ code:0, msg: "成功", data: { a: 1, b: 2 } });
    // return;

    // 读取crsf token, 添加到请求头中
    $.ajax({
      // url相对路径，由后端打到页面上
      url: app.root + app.url.userinfoApi,
      type: 'POST',
      // dataType: 'json', // 如请求数据格式是json，需开启
      // timeout: 10000,  // 超时时间
      data: params,
      beforeSend: function (xhr, settings) {
        console.log('[ajaxGetUserInfo] before send');
        // 请求前，发送csrf token
        var csrfToken = getCookieCsrfToken();
        xhr.setRequestHeader('X-CSRF-TOKEN', csrfToken);
        $('.d-loading').show();//显示菊花
      },
      success: function (resp, status, xhr) {
        if (resp.code === 0) {
          console.log('[ajaxGetUserInfo]', resp.data);
          onRespSuccess(resp)
        } else {
          onRespError(resp)
        }
      },
      error: function (xhr, errorType, error) {
        // 请求失败
        app.showToast('网络开小差了，请稍后再试');
      },
      complete: function (xhr, status) {
        console.log('[ajaxGetUserInfo] complete');
        // 请求成功或失败都执行
        $('.d-loading').hide();//关闭菊花
      }
    });
  }
  
  // 将要暴露的接口，放在下面
  app.api = {
    ajaxGetUserInfo: ajaxGetUserInfo,

  }
}());

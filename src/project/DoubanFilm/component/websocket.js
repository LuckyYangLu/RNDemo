var websocket; //websocket实例
var lockReconnect = false; //避免重复连接
var userno = '123';

var wsUrl = 'ws://localhost:8080/test/websocket/' + userno;

function createWebSocket(url) {
  try {
    // eslint-disable-next-line no-undef
    websocket = new WebSocket(url);
    initEventHandle();
  } catch (e) {
    reconnect(url);
  }
}

function initEventHandle() {
  websocket.onclose = function() {
    console.log('WebSocket连接已经关闭');
    reconnect(wsUrl);
  };
  websocket.onerror = function() {
    console.log('WebSocket连接发生错误');
    reconnect(wsUrl);
  };
  websocket.onopen = function() {
    console.log('WebSocket连接已经成功');
    //心跳检测重置
    heartCheck.reset().start();
  };
  websocket.onmessage = function(event) {
    setMessageInnerHTML(event.data);
    //如果获取到消息，心跳检测重置
    //拿到任何消息都说明当前连接是正常的
    heartCheck.reset().start();
  };
}

//重新连接webSocket
function reconnect(url) {
  if (lockReconnect) {
    return;
  }
  lockReconnect = true;
  //没连接上会一直重连，设置延迟避免请求过多
  setTimeout(function() {
    createWebSocket(url);
    lockReconnect = false;
  }, 2000);
}

//心跳检测
var heartCheck = {
  timeout: 60000, //60秒
  timeoutObj: null,
  serverTimeoutObj: null,
  reset: function() {
    clearTimeout(this.timeoutObj);
    clearTimeout(this.serverTimeoutObj);
    return this;
  },
  start: function() {
    var self = this;
    this.timeoutObj = setTimeout(function() {
      //这里发送一个心跳，后端收到后，返回一个心跳消息，
      //onmessage拿到返回的心跳就说明连接正常
      websocket.send('HeartBeat');
      self.serverTimeoutObj = setTimeout(function() {
        //如果超过一定时间还没重置，说明后端主动断开了
        websocket.close(); //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
      }, self.timeout);
    }, this.timeout);
  }
};
//判断当前浏览器是否支持WebSocket
if ('WebSocket' in window) {
  //初始化连接webSocket
  createWebSocket(wsUrl);
} else {
  alert('当前浏览器 Not support websocket');
}

//将消息显示在网页上
function setMessageInnerHTML(innerHTML) {
  console.log(innerHTML);
  // eslint-disable-next-line no-unused-vars
  var data = JSON.parse(innerHTML);
  console.log('-------------- websocket -----------------------------------');
}

//关闭WebSocket连接
function closeWebSocket() {
  websocket.close();
}

//发送消息
function send(message) {
  websocket.send(message);
}

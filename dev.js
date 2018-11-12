console.log('dv发给他刚刚好')
var cd='345'
var cd1='34'
var cd2='35'
var cd3='5'
var cd4='34rr5'
console.log(cd4)
console.log(cd2)
var ws = new WebSocket("wss://echo.websocket.org");

ws.onopen = function (evt) {
    console.log("Connection open ...");
    ws.send("Hello WebSockets!");
};

ws.onmessage = function (evt) {
    console.log("Received Message: " + evt.data);
    ws.close();
};

ws.onclose = function (evt) {
    console.log("Connection closed.");
};
console.log(1)
var count=0;
while(true){
    if (count>6){
            break;
    }
    console.log('你好');
    count++;
}console.log('nomo')

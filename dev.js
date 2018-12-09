// /* eslint-disable no-console*/
console.log ("dv发给他刚刚好");
var cd = "345";
var cd1=cd;
var cd2="35";
var cd3="5";
var cd4="34rr5";
console.log(cd4);
console.log(cd2);
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
console.log(1);
var count=0;
while(true){
	if (count>6){
		break;
	}
	console.log("你好");
	count++;
}
console.log(当前是在dev2分支上做提交);
console.log("nomo");
//在nomo分支再提交一次
function sum (x, y) {
	return x + y;
}
sum(2,5);
// class dfd {/*eslint-disabled-line */
//     findIn () {
//         console.log(9)
//     }
//     fn () {
//         console.log(9)
//     }
// }
//                 function di(){
//                     console.log(4)
//                 }

// var store = new Vuex.Store({
//     state: {
//         count: 0
//     },
//     mutations: {
//         increment:(state) => {
//             const obj = state
//             obj.count += 1
//         },
//         decrement: (state) => {
//             const obj = state
//             obj.count -= 1
//         }
//     }
// })


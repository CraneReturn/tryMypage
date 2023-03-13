// console.log(111)
// 设置单击响应函数
function myClick(idStr, fun) {
	// var btn=document.querySelector(idStr)
	// console.log(btn)
	idStr.onclick = fun;
}
// var btn01=document.querySelector(".head");
// // console.log(btn01)
// myClick(btn01,function(btn){
// 	console.log(111)
// 	btn01.style.height="500px";
// });
var develpShow = document.getElementById("develpShow");
// 获取
// let lis=document.querySelectorAll('.lis');
// for(let i=0;i<lis.length;i++){{
// 	// console.log(fatherWidth+'px')
// 	lis[i].style.width=develpShow.offsetWidth+'px';
// }}

var header = document.querySelector(".head");
header.onmousemove = function() {
	header.style.height = "200px";
	header.classList.add('headHoverSty')
	changeColor('black')
}
console.log(header.classList, 'classList')
var logostyle = document.getElementById("logostyle");
header.onmouseover = function() {
	logostyle.style.color = "blue";
}
header.onmouseout = function() {
	logostyle.style.color = "#FFF";
	header.style.height = "40px";
	header.classList.remove('headHoverSty')
	changeColor('white')
}

var outer = document.getElementById("outer");
var outer2 = document.getElementsByClassName("outer2")[0];
// console.log(outer.style.width);
// console.log(window.getComputedStyle(outer).width);
// var outerwidth=;


var imgList = document.getElementById("imgList");
// console.log(outerwidth);

var index = 0;
var allA = document.getElementsByTagName("a");

function setA() {}
for (let i = 0; i < allA.length; i++) {
	myClick(allA[i], function(btn) {
		clearInterval(time1);
		allA[i].style.width = "20px";
		allA[i].style.backgroundColor = "#0086B3";

		imgList.style.left = outer.offsetWidth * i * (-1) + "px";
		index = i
		console.log(i)
		// console.log(window.getComputedStyle(outer).width * i)
		// console.log(outer.offsetWidth * i)
		// console.log(i*outerwidth+'px')
		// console.log(outerwidth);
	});
}
var time1;

function autoChange() {
	time1 = setInterval(function() {
		index++;
		index = index % 5
		imgList.style.left = parseInt(outer.offsetWidth * index * (-1)) + "px";
	}, 3000)
}
autoChange()
var connectShow = document.getElementById("imgList2");
var leftArrow = document.getElementById("leftArrow");
var connectIndex = 0;
var rightArrow = document.getElementById("rightArrow");
myClick(rightArrow, function(btn) {
	console.log(111)
	connectIndex++;
	connectIndex = connectIndex % 4;
	console.log(outer2, '11')
	imgList2.style.left = parseInt(outer2.offsetWidth * connectIndex * (-1)) + "px";
});

myClick(leftArrow, function(btn) {
	connectIndex++;
	connectIndex = connectIndex % 4;
	console.log(outer2, '11')
	imgList2.style.left = parseInt(outer2.offsetWidth * connectIndex * (-1)) + "px";
});
// 第三个轮播图

// var developList=document.getElementById("develpShow").firstElementChild;
// var develpShow=doucument.getElementById("develpShow");
var items = document.querySelectorAll('.item');

var developList = document.getElementById("developList");

var timeConnect;
for (let j = 0; j < items.length; j++) {
	myClick(items[j], function(btn) {
		// items[j].style.width="40px";
		items[j].style.width = "20px";
		items[j].style.backgroundColor = "blue";
		console.log("111");
		clearInterval(timeConnect);
		// console.log(parseInt(develpShow.offsetWidth*j*(-1))+"px")
		developList.style.left = parseInt(develpShow.offsetWidth * j * (-1)) + "px";

	});
}
var timeConnect;

function connectAutochange() {
	timeConnect = setInterval(function() {
		index++;
		index = index % 3;
		developList.style.left = parseInt(develpShow.offsetWidth * index * (-1)) + "px";
	}, 3000)
}
connectAutochange()

// 类似轮播图
var manythingsConnect = document.getElementById("manythingsConnect");
var rightConnectshow = document.getElementById("rightConnectshow");
var left1 = document.getElementById("left1");
var left2 = document.getElementById("left2");
var left3 = document.getElementById("left3");
left1.onmousemove = function() {
	manythingsConnect.style.left = "0px";

}
left2.onmousemove = function() {
	manythingsConnect.style.left = "-750px";

}
left3.onmousemove = function() {
	manythingsConnect.style.left = "-1500px";

}
var toplist = document.getElementsByClassName('toplist')[0].getElementsByTagName('ul')

function changeColor(color) {
	// console.log(toplist, '999')
	for (var indexColor = 0; indexColor < toplist.length; indexColor++) {
		toplist[indexColor].style.color = color
		// console.log(toplist[indexColor].style.color)
	}
}

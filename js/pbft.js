var box = document.getElementById("box");
		//获取浏览器窗口宽、高
		var winWidth = document.documentElement.clientWidth;
		var winHeight = document.documentElement.clientHeight;
		//		console.log(winHeight);
		var MaxWidth = winWidth - box.offsetWidth;
		var MaxHeight = winHeight - box.offsetHeight;
		var SpeedX = 3;
		var SpeedY = 3;
		var timer = null;

		window.onresize = function() {
			winWidth = document.documentElement.clientWidth;
			winHeight = document.documentElement.clientHeight;
			MaxWidth = winWidth - box.offsetWidth;
			MaxHeight = winHeight - box.offsetHeight;
		}

		function move() {
			var X = box.offsetLeft + SpeedX;
			var Y = box.offsetTop + SpeedY;
			console.log(X);
			if(X >= MaxWidth) {
				X = MaxWidth;
				SpeedX *= -1;
			}
			if(X <= 0) {
				X = 0;
				SpeedX *= -1;
			}
			if(Y >= MaxHeight) {
				Y = MaxHeight;
				SpeedY *= -1;
			}
			if(Y <= 0) {
				Y = 0;
				SpeedY *= -1;
			}
			box.style.left = X + "px";
			box.style.top = Y + "px";
		}

		timer = setInterval(move, 16);
		box.onmouseover = function() {
			clearInterval(timer);
		}
		box.onmouseout = function() {
			timer = setInterval(move, 16);
		}
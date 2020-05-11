  var x = document.getElementById("NRC");
  document.oncontextmenu=RightMouseDown;
  document.onmousedown = mouseDown; 

  	function mouseDown(e) {
      if (e.which==3) {
      window.location="#NRC";
      window.document.title = "Error";
   		}
  	}
	function RightMouseDown() { 
		return false;
	}
	function backtohome() {
		window.location="#Home";
	}
	alert('Right Click is Not Support !');
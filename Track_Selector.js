var versionDisplay = document.createElement("h3");
var version = document.createTextNode("Version 0.2");
versionDisplay.appendChild(version);
document.body.appendChild(versionDisplay);
var resetButton = document.querySelector("#reset");
var tracks = document.querySelectorAll(".course");
// score reset
function reset(){
	tracks.forEach(function(t){
		t.classList.remove("selected")
		t.classList.remove("banned");
	});
}
resetButton.addEventListener("click", reset)

tracks.forEach(function(t){
	t.addEventListener("click", function(){
		this.classList.toggle("selected");
		this.classList.remove("banned");
	});
	t.addEventListener("contextmenu", function(ev){
		ev.preventDefault();
		this.classList.toggle("banned");
		this.classList.remove("selected");
	})
});
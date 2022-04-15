// openNav = ()=>{
// 	let list = document.getElementById("myNav");
// 	let tribe = document.getElementById("main");

// 	if (list.style.display === "block") {
// 		list.style.display = "none";
// 		tribe.style.display = "flex";
// 	} else {
// 		list.style.display = "block";
// 		tribe.style.display = "none";
// 	}
// }

// $('.ham-menu').click(function(){
// 	$(this).toggleClass("active");
// 	$(".nav").toggleClass('active');
// });

function toggleSidebar(){
	document.getElementById("sidebar").classList.toggle('active');
}
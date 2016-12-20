var obj1 = 
		 {
		cold : "humus",
		cold1: "moutabal",
		hot : "Lentil Soup"
	}
	var obj2 = 
		 {
		cold : "fatoush",
		cold1: "Shawarma",
		hot: "Frech Fries"
	}

var choices = [obj1,obj2]


function Menu (order) {
	for(var i= 0 ; i <choices.length; i++){

	for(var key in choices[i]){
	if (order === choices[i][key]){
		return choices[i]. cold + " ," + choices[i].cold1 + " ," + choices[i].hot
	}
}
}
}


function showText (text){
	document.getElementById("b1").innerHTML= "Hummous;"
}
function hide(){
	document.getElementById("b1").innerHTML=""
}
function change (){
	document.getElementById("p").textContent="tabouleh"
}
 
function change1 (){
	document.getElementById("p1").textContent="Moutabel"
}
 
function change2 (){
	document.getElementById("p2").textContent="Fettah"
}


 


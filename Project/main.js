var obj1 = 
		 {
		Hummus : "with Hummus you can eat :Falafel , Medittearean Salad , Kibbeh",
		Shawarma: "with Shawrma you can eat :Potato , Hummous, Coleslaw",
		Grill : "with Grill you can eat :Tabouleh , Moutabel ",
		Kibbeh:" with Kibbeh you can eat :Yagort , Salad, Lentil Soup"
	}
	


function Menu (order) {
	for(var i= 0 ; i <choices.length; i++){

	for(var key in choices[i]){
	if (order === choices[i][key]){
		return choices[i]. cold + " ," + choices[i].cold1 + " ," + choices[i].hot
	}
}
}
}



function change (){
	document.getElementById("p").textContent=obj1.Hummus
}
 
function change1 (){
	document.getElementById("p").textContent=obj1.Shawarma
}
 
function change2 (){
	document.getElementById("p").textContent=obj1.Grill
}
function change3 (){
	document.getElementById("p").textContent=obj1.Kibbeh
}


 


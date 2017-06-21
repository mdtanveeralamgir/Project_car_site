$(document).ready(function() //<A> When DOM is ready
{
	"use strict";
	document.getElementById("myButton").onclick = function() {
		var man = document.getElementById("man").value;
		var model = document.getElementById("mod").value;
		var price = document.getElementById("pri").value;
		var wiki = document.getElementById("wik").value;
		var image = document.getElementById("img").value;

		if (man!="" && model!="" && price!="" && wiki!="" && image!="") {
			
			$.getJSON('json/data.json', function(result) {
				result.CAR.push({"MAN": man, "MOD": model, "PRI": price, "WIK": wiki, "IMG": image});
				var newData = JSON.stringify(result);
				$.post('php/add.php', {newData: newData}, function(){});	
				location.reload();
			});
		}

		else {
			alert("Please fill out all the fields");
		}
		
	};

	
	$.getJSON("json/data.json", function(result)	 // <B>Get file data and return result
	{	
		for(var key1 in result){		//<C>
			if(result.hasOwnProperty(key1)) { // <D>
				var oLeftDiv = document.getElementById('leftDiv');
				
				for (var i =0; i < result[key1].length; i++){  //<E>
					
					var oNewCarDiv = document.createElement('DIV'); // Car layer
					
					/*oNewCarDiv.setAttribute('style', 'margin-bottom:10px; border:#ccc 2px solid; padding:5px;	background-color:#C5D0D4');*/
					var oTextNode; // to be used to append text
					
					//Manufacturer
					var oManDiv = document.createElement('DIV');
					oManDiv.setAttribute('style', 'margin-bottom:5px;');
					oTextNode = document.createTextNode('MANUFACTURER: ' + result[key1][i].MAN);
					oManDiv.appendChild(oTextNode);
					oNewCarDiv.appendChild(oManDiv);
					
					//Model Info
					var oModDiv = document.createElement('DIV');
					oModDiv.setAttribute('style', 'margin-bottom:5px;');
					oTextNode = document.createTextNode('MODEL: ' + result[key1][i].MOD);
					oModDiv.appendChild(oTextNode);
					oNewCarDiv.appendChild(oModDiv);
					
					//Price
					var oPrDiv = document.createElement('DIV');
					oPrDiv.setAttribute('style', 'margin-bottom:5px;');
					oTextNode = document.createTextNode('PRICE: ' + result[key1][i].PRI);
					oPrDiv.appendChild(oTextNode);
					oNewCarDiv.appendChild(oPrDiv);
					
					//Wiki Info
					var oWikDiv = document.createElement('DIV');
					oWikDiv.setAttribute('style', 'margin-bottom:5px');
					var newLink = document.createElement('A');
					newLink.setAttribute('href', result[key1][i].WIK);
					newLink.setAttribute('style', 'text-decoration: none;');
					newLink.setAttribute('target', '_blank');
					oTextNode = document.createTextNode('WIKI INFO');
					
					//result[key1][i]['INFO']
					newLink.appendChild(oTextNode);
					oWikDiv.appendChild(newLink);
					oNewCarDiv.appendChild(oWikDiv);
					
					//Image
					var oImageDiv = document.createElement('DIV');
					var oImg = document.createElement('IMG');
					oImg.setAttribute('src', result[key1][i].IMG);
					oImg.setAttribute('width', '50%');
					
					oImageDiv.appendChild(oImg);
					oNewCarDiv.appendChild(oImageDiv);
					
					// Append new car information to layer and iterate if needed...
					oLeftDiv.appendChild(oNewCarDiv);
				} //<E>
			}//<D>
			
		}//<C>
		
	});//<B>
	
	
});//<A>

		/*var newData = JSON.stringify(result);
		$.post('php/add.php', {newData: newData}, function(response){});
		
		var oController = new Controller("studentTable", result); // Instantiate object from class Controller
	
		document.getElementById("highlightRow").onclick = function(){//define listener
		
			oController.highlightSelectedRows(); // Execute method*/
			

	
	//Multiplication Table Function
function multiplication() {
	
	var num=document.getElementById("myText").value; 
    var i;
    var clear="";


	if(num=="")
	{
		alert("Please Enter Number");
	
	}


 else if(num>=0){
    
  	
   				document.getElementById("pPrint").innerHTML="";
    	for(i=1;i<=10;i++)
  		 {
   			
     		var pTag= document.getElementById('pPrint');
		
	  		pTag.innerHTML +=  num + " x " + i + " = " + num * i +"</br></br>"

   		}

   				
   				document.getElementById("myText").value=clear;
	}



	else
	{
		alert("Please enter Valid Number");
		
	}


}

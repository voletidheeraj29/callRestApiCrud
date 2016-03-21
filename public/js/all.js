function addUser(){
            
    window.location.href = '/users/add';
}
function cancelAdd(){
    
    window.location.href = '/users';
}
function validate()
{
	  var firstname = document.getElementById('firstname').value;
	  var lastname = document.getElementById('lastname').value;
	  var email = document.getElementById('email').value;
	  var regex=/^([a-z]+[A-Z]*)$/;
	  var regex1=/^([a-zA-Z]*[0-9!@#$%]+[a-zA-Z]+[0-9!@#$%]*)|([0-9!@#$%]*[a-zA-Z]+[0-9!@#$%]+[a-zA-Z]*)$/;
	  var regex2= /^(([a-zA-Z0-9.#]*[a-zA-z0-9]+[A-Z0-9.#]*)[@]([a-z]+)[.]([a-z]{2,3}[.])*([a-z]{2,4}))$/;
	  if (firstname==null || firstname=="")
	  {  
	  document.getElementById('firstname').style.border ='1px solid green';
	    alert("Firstname cannot be empty");  
	    document.getElementById('firstname').style.border ='';
	    return false;  
	  }
	  else if(!regex.test(firstname)){
	  document.getElementById('firstname').style.border ='1px solid green';
	    alert("invalid firstname ");  
	    document.getElementById('firstname').style.border ='';
	    return false;  
	  }
	  if (lastname==null || lastname=="")
	  {  
	  document.getElementById('lastname').style.border ='1px solid green';
	    alert("lastname cannot be empty");  
	    document.getElementById('lastname').style.border ='';
	    return false;  
	  }
	  else if(!regex1.test(lastname)){
	  document.getElementById('lastname').style.border ='1px solid green';
	    alert("invalid lastname ");  
	    document.getElementById('lastname').style.border ='';
	    return false;  
	  }  if (email==null || email=="")
	  {  
		  document.getElementById('email').style.border ='1px solid green';
		    alert("Email cannot be empty");  
		    document.getElementById('email').style.border ='';
		    return false;  
		  }
		  else if(!regex2.test(email)){
		  document.getElementById('email').style.border ='1px solid green';
		    alert("invalid Email ");  
		    document.getElementById('email').style.border ='';
		    return false;  
		  }	  
	  
}




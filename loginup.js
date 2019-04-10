var email = document.getElementById("email");
var password = document.getElementById("pass");
var box = document.getElementById("box");


function signup(){
    var userPeople =localStorage.getItem("user");
    console.log(userPeople);
    var alertBox = false;

    if(userPeople === null){
        userPeople = [];
    }
    else{
        userPeople = JSON.parse(userPeople);
        console.log(userPeople);
    }

    var userObject = {
        email:email.value,
        password:password.value,
    }

    var emailData = email.value;
    var emailData1 = emailData.slice(emailData.length-10);
    if(emailData1 !== "@gmail.com" && emailData1 !== "@yahoo.com"){
        alert("your email is not valid")
    }
   
else{
    for(var i =0; i < userPeople.length; i++){

        if(userPeople[i].email === email.value){
            alertBox = true;
        }
    }
        if(alertBox === true){
            box = box.innerHTML="user already exist";
        }
        
        else{
            userPeople.push(userObject);
            userPeople = JSON.stringify(userPeople);
            userPeople = localStorage.setItem("user" , userPeople);
            
        email.value = "";
        password.value = "";
        box = box.innerHTML="signup successfully"
        }

    }
    }


function login(){
    var userPeop =localStorage.getItem("user");
        if(userPeop === null){
        userPeop = [];
    }
    else{
        userPeop = JSON.parse(userPeop);
        // console.log(userPeop);
    }
    var logObject = {
        email:email.value,
        password:password.value
    }

    var messag = false;
        for(var i =0; i < userPeop.length; i++){
        if(userPeop[i].email === email.value && userPeop[i].password === password.value){
        messag = true;
       
       
    }
    
    }
        if(messag === false){
           box.innerHTML = "login failed";
        }
        else{
        box.innerHTML = "login successfully";
        email.value = "";
        password.value = "";
        var logData = JSON.stringify(logObject);
        logData = localStorage.setItem("data",logData);

        window.location.assign("calc.html")

       
    }

    
      
}





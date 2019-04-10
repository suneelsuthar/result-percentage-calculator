    function consObj(fname,lname,roll,english,chemistry,physics,biology,maths) {
    this.fname = fname;
    this.lname = lname;
    this.roll = roll;
    this.english = english;
    this.chemistry = chemistry;
    this.physics = physics;
    this.biology = biology;
    this.maths = maths;
    
}

var resultArray = [];
var thisArray = []


function submitData() {
    var first = document.getElementById("one").value;
    var second = document.getElementById("two").value;
    var third = document.getElementById("three").value;
    var fourth = document.getElementById("four").value;
    fourth = Number(fourth); 
    var fifth = document.getElementById("five").value;
    fifth = Number(fifth);   
    var sixth = document.getElementById("six").value;
    sixth = Number(sixth);
    var seventh = document.getElementById("seven").value;
    seventh = Number(seventh);
    var eighth = document.getElementById("eight").value;
    eighth = Number(eighth);

    var deta1 = new consObj(first,second,third,fourth,fifth,sixth,seventh,eighth);
    resultArray.push(deta1);
    // console.log(resultArray);
    thisArray.push( third);
    // console.log(thisArray)
    document.getElementById("main").reset();

        
    
}

function searchFun(){
var srch1 = document.getElementById("searchbtn").value;
var flag = "NO"

    console.log(thisArray)
 for (var i =0; i < thisArray.length; i++){

   if (srch1 === thisArray[i]) {
    console.log(thisArray[i])

    var arrayOne = (resultArray[i]);
    console.log(arrayOne);

     alert("your roll number is available");
var totalMark = ((arrayOne.english + arrayOne.chemistry + arrayOne.physics + arrayOne.maths + arrayOne.biology)*100/500+"%")
 document.getElementById("lab1").innerHTML = arrayOne.fname;
 document.getElementById("lab2").innerHTML = arrayOne.lname;
 document.getElementById("lab3").innerHTML = arrayOne.roll;
 document.getElementById("lab4").innerHTML = arrayOne.english;
 document.getElementById("lab4").innerHTML = arrayOne.chemistry;
 document.getElementById("lab5").innerHTML = arrayOne.english;
 document.getElementById("lab6").innerHTML = arrayOne.physics;
 document.getElementById("lab7").innerHTML = arrayOne.maths;
 document.getElementById("lab8").innerHTML = arrayOne.biology;
 document.getElementById("totalMarks").innerHTML = totalMark;
 break;
 }
 }
if(flag === "NO"){
    alert("your number is not available")
}
}

// function manueValue(){
//     var d = document.getElementById("manue");

// }


// var ab = userPeop[0].email;
//         var userName = document.getElementById("editing").innerHTML="sdfsdf";



var logData = localStorage.getItem("data");
logData = JSON.parse(logData);
var mail = logData.email;
var b =mail.slice(0,-10)
console.log(b);
console.log(logData.password)
var usrname = document.getElementById("usrName").innerHTML=b;

function signout(){
    window.location.href="index.html";
    localstrorage.removeItem("data");
}
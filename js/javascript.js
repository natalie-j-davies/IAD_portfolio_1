window.onload=function(){
    dateChecker();
    emailValidator();
    mouseOver();

}
window.onclick=function(){
    emailValidator();
}
function dateChecker(){
var date = new Date();
var today = date.getDate()+1;
var month = date.getMonth()+1;
var year = date.getUTCFullYear();
if(today < 10){
    today = '0' + today;
}
if(month < 10){
    month = '0'+ month;
}
var minDate = year+"-"+month+"-"+today;
document.getElementById("date").setAttribute('min', minDate);

}

function emailValidator(){
let email = document.getElementById("email").value;
let conEmail = document.getElementById("conEmail").value;
let text;
    if(email===conEmail){
        text = "";
    }else {
        text = "error: email is not the same as confirmed email";
    }
document.getElementById("text").innerHTML = text;
  }

function submitConfirm(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let subject = document.getElementById("subject").value;


    confirm("Please confirm this information is correct.. "+"\n"+
    "Your Name: "+fname+lname +"\n"+
    "Your email: "+email+"\n"+
    "Your phone number: "+phone+"\n"+
    "Start date of project: "+date+"\n"+
    "Project Details: "+ subject+"\n"+
    "To : 210209859@aston.ac.uk");
}
let submit = document.getElementById("submit");
   submit.onclick = function(){
    submitConfirm();
}


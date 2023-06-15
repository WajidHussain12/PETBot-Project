// This Function Used To Clear Error

function clearErrors(){
errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML="";
    }
}

// This Function Used To Seterror

function seterror(id,error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML= error;
}

// This The Main Function To Operate Error Msg In HTML

function validateForm(){
    var returnval = true;    
    clearErrors();


// This Line Of Code Used For Name Error


var name = document.forms['myForm']['fname'].value;

if(name.length<5){
    seterror("name","*Length of Name Is Too Short!");
    returnval = false;
}

if(name.length == 0){
    seterror("name","*Please Enter Name!");
    returnval = false;
}


// This Line Of Code Used For Email Error

var email =document.forms['myForm']["femail"].value;

if(email.length>27){
    seterror('email',"*Email Is Too Long Or In Valid Email!")
    returnval = false
}

// This Line Of Code Used For Phone Error

var phone = document.forms['myForm']["fphone"].value

if(phone.length>=12){
    seterror('phone','Phone Number Is Too Long')
    returnval = false
}

if(phone.length<11){
    seterror('phone','Phone Number Is Invalid')
    returnval = false
}

// if(typeof phone !== Number ){
//     seterror('phone','Please Enter Phone Number Not Alphabet')
//     returnval = false
// }


// This Line Of Code Used For Password Error

// var password = document.forms['myForm']["fpass"].value
// if(password.length==/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/){
//     seterror('pass',"Please Enter Stong Password")
//     returnval = false
    
// }

// var password = ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$;
// if(password.test(document.forms['myForm']["fpass"].value)){
//     seterror('fpass',"wrong")
// }








return returnval

}


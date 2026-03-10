function validate(data)
{
    var data = document.getElementById("a2").value;
    alert(data);
    var i = data.indexOf('@');
    if(i > 0)
    {
        var j = data.lastIndexOf(".");
        if(j > i)
        {
            console.log("Valid Format");
        }
        else
        {
            console.log("InValid Format");
        }
    }
    else
    {
        console.log("Invalid Format");
    }
}

// let emailId = "abc.xyz@gmail.com";
// console.log(emailId.indexOf('@'));
// console.log(emailId.lastIndexOf('.'));
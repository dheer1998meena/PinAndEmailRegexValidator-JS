var sampleEmail = ["abc@bridgelabz.com","abc-100@bridgelabz.com", "abc.100@bridgelabz.com", "abc111@bridgelabz.com",
"abc-100@bridgelabz.net", "abc.100@bridgelabz.com.au", "abc@1.com", "abc@bridgelabz.com.com", "abc+100@bridgelabz.com", "abc",
"abc@.com.my", "abc123@bridgelabz.a", "abc123@.com", "abc123@.com.com", ".abc@abc.com", "abc()*@bridgelabz.com",
"abc@%*.com", "abc..2002@bridgelabz.com", "abc.@bridgelabz.com", "abc@abc@bridgelabz.com", "abc@bridgelabz.com.1a",
"abc@bridgelabz.com.aa.au" ];
sampleEmail.forEach(validateEmail);
function validateEmail(email)
{      
    let emailRegExp = RegExp('^^[a-zA-Z0-9]+([.+_-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.][a-zA-Z]{3})+([.][a-zA-Z]{2})?$');
    if (emailRegExp.test(email))
        console.log("Valid email: "+email);
    else
        console.log("Invalid email: "+email);   
}
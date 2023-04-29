        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let queries = document.getElementById('queries');
        let submitBtn = document.getElementById('form-submit');
    function emailSend(){

        console.log(email.value);
        Email.send({
        SecureToken : "921d4980-e5c5-4c51-aba4-ddb78b3cedf3",
        To : email.value,
        From : "deepak@web-wale.com",
        Subject : "From web wale. "+`${queries.value}`,
         Body : "Thank you for contacting us "+ `${name.value}` +". We will get back to you shortly"
    }).then(
        //console.log("Mail sent successfully")
        (message) => {
            if(message == "OK"){
              console.log("successful");
              alert("Email sent successfully");
            }
            
        }
    ).catch(err => console.log(err));
    }

    submitBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        emailSend();
    })
   
    

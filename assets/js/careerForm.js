try{

    function careerForm(){
        document.getElementById("careerForm").addEventListener("submit", 
            function(event){
                event.preventDefault();

              const serviceID = "service_3mah583",
              templateID = "template_l7n12vg";
                let success = document.getElementById("career_email_success"),
              error = document.getElementById("career_email_error");

            emailjs.sendForm(serviceID, templateID, this).then(
              function () {
                success.classList.remove("d-none");
                success.style.color = "SeaGreen";
                setTimeout(() => {
                  success.classList.add("d-none");
                }, 2500);
                clearForm();
              },
              function () {
                error.classList.remove("d-none");
                error.style.color = "Red";
                setTimeout(() => {
                  error.classList.add("d-none");
                }, 2500);
                clearForm();
              }
            );

            }
       )

       // Clear Forms
      function clearForm() {
        const name = document.getElementById("c_name"),
          email = document.getElementById("c_email"),
          subject = document.getElementById("c_subject"),
          message = document.getElementById("c_message"),
          profile = document.getElementById("c_profile");

        (name.value = ""),
          (email.value = ""),
          (subject.value = ""),
          (message.value = ""),
          (profile.value ="");
      }
     }           
}catch(error)
{
alert("Service not allowed.")          
}
import emailjs from '@emailjs/browser';
(function (){
  
  emailjs.init("user_kCQ6DSaDUM0uTzD86zhxg");
  try {
    document.getElementById("ContactForm").addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous
      const serviceID = "service_3mah583",
        templateID = "template_l7n12vg";
      let success = document.getElementById("email_success"),
        error = document.getElementById("email_error"),
        submit =  document.getElementById("submit");
  
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
          error.style.color = "red";
          setTimeout(() => {
            error.classList.add("d-none");
          }, 2500);
          clearForm();
        }
      );
    });

  } catch (error) {
    alert("Server not allowed."+error);
  }
  //ClearForm
function clearForm() {
  const name = document.getElementById("name"),
    email = document.getElementById("email"),
    subject = document.getElementById("subject"),
    message = document.getElementById("message");

  (name.value = ""),
    (email.value = ""),
    (subject.value = ""),
    (message.value = "");
}

})()

try{
window.onload = function(){
    document.getElementById("ServiceForm").addEventListener("submit", function (event) {
      event.preventDefault();
      //IDs
  
      const serviceID = "service_3mah583",
        templateID = "template_l7n12vg";
      let success = document.getElementById("service_email_success"),
        error = document.getElementById("service_email_error");
  
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
    });  
}
} catch (error) {
  alert("Server not allowed." + error)
}
// Clear Forms
function clearForm() {
  const name = document.getElementById("s_name"),
    email = document.getElementById("s_email"),
    subject = document.getElementById("s_subject"),
    message = document.getElementById("s_message");

  (name.value = ""),
    (email.value = ""),
    (subject.value = ""),
    (message.value = "");
}


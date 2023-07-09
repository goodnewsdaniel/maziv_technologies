
try {
    function careerForm(event) {
          event.preventDefault();
          //IDs

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
  } catch (error) {
    alert("Server not allowed." + error);
  }


  // Clear Forms
  function clearForm() {
    const name = document.getElementById("c_name"),
      email = document.getElementById("c_email"),
      role = document.getElementById("c_role"),
      message = document.getElementById("c_message");
      file = document.getElementById("c_file");

      (name.value = ""),
      (email.value = ""),
      (role.value = ""),
      (message.value = ""),
      (file.value = "");
  }

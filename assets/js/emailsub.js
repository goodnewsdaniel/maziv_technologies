(function(){

  try {
    document.getElementById("subscribeForm").addEventListener("submit", function (event) {
      event.preventDefault();
      //IDs
      const serviceID = "service_3mah583",
        templateID = "template_l7n12vg";
      let success = document.getElementById("sub-success"),
        error = document.getElementById("sub-Error");
  
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
    alert("Server not allowed"+error);
  }

  // clearForm
  function clearForm() {
    email = document.getElementById("subEmail");
    email.value = "";
  }

})()
 
 
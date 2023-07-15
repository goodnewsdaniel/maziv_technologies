try{

    function careerForm(){
        document.getElementById('careerForm').addEventListener('submit', 
            function(event){
                event.preventDefault();
                try {
                    // FormSubmit Start
                    const name = document.getElementByName("name"),
                      email = document.getElementByName("email"),
                      role = document.getElementByName("role"),
                      message = document.getElementByName("message"),
                      file = document.getElementsByName("attachment").files;
            
                    const _name = name[0].value,
                      _email = email[0].value,
                      _role = role[0].value,
                      _message = message[0].value,
                      _file = file[0].value;
            
                    const _success = document.getElementById("career_email_success"),
                      _error = document.getElementById("career_email_error");
            
                    // Axios
                    axios.defaults.headers.post["Content-Type"] = "application/json";
                    axios
                      .post("https://formsubmit.co/ajax/goodnewsdaniel101@gmail.com", {
                        name: _name,
                        email: _email,
                        role: _role,
                        message: _message,
                        file: _file,
                      })
                      .then(
                        function () {
                          _success.classList.remove("d-none");
                          _success.style.color = "SeaGreen";
                          setTimeout(() => {
                            _success.classList.add("d-none");
                          }, 2500);
                          clear_CareerForm();
                        }.catch(function () {
                          _error.classList.remove("d-none");
                          _error.style.color = "Red";
                          setTimeout(() => {
                            _error.classList.add("d-none");
                          }, 2500);
                          clear_CareerForm();
                        })
                      );
                    // FormSubmit End
                  } catch (error) {
                    alert("Server not allowed." + error);
                  }
            }
        )
    }


}catch(error){
    alert("Service not allowed")
}
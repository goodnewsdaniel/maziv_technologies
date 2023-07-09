import axios from 'axios';

const name = document.getElementByName("name"),
      email = document.getElementByName("email"),
      role = document.getElementByName("role"),
      message = document.getElementByName("message"),
      file = document.getElementsByName("attachment").files;

const _name = name[0].value, _email = email[0].value, _role = role[0].value, _message = message[0].value, _file = file[0].value;

const _success = document.getElementById("career_email_success"), _error = document.getElementById("career_email_error");

// Axios
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.post('https://formsubmit.co/ajax/gee4luv@gmail.com', {
    name: _name,
    email: _email,
    role: _role,
    message: _message,
    file: _file
})
    .then(response => 
        _success.style.display = block
        )
    .catch(error => 
       _error.style.display = none
    );






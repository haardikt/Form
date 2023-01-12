<!DOCTYPE html>
<html>
  <head>
    <title>Form Validation</title>
    <style>
      .error {
        color: red;
      }
    </style>
  </head>
  <body>
    <form onsubmit="return validateForm()">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <span id="nameError" class="error"></span>
      <br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <span id="emailError" class="error"></span>
      <br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
      <span id="passwordError" class="error"></span>
      <br>
      <input type="submit" value="Submit">
    </form>

    <script>
      function validateForm() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var nameError = document.getElementById("nameError");
        var emailError = document.getElementById("emailError");
        var passwordError = document.getElementById("passwordError");

        var isValid = true;

        if (name === "") {
          nameError.textContent = "Name is required";
          isValid = false;
        } else {
          nameError.textContent = "";
        }

        if (email === "") {
          emailError.textContent = "Email is required";
          isValid = false;
        } else {
          emailError.textContent = "";
        }

        if (password === "") {
          passwordError.textContent = "Password is required";
          isValid = false;
        } else {
          passwordError.textContent = "";
        }

        return isValid;
      }
    </script>
  </body>
</html>

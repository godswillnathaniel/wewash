
const pwShowHide = document.querySelectorAll(".eye-icon")


// Loop through each eye icon
pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    // Find all password fields within the same parent element
    let pwFields = eyeIcon.parentElement.querySelectorAll("#password")

    pwFields.forEach(password => {
      // Toggle the type attribute between 'password' and 'text'
      if (password.type === "password") {
        password.type = "text"
        eyeIcon.classList.replace('bx-hide', 'bx-show')
        return
      }
      password.type = "password"
      eyeIcon.classList.replace('bx-show', 'bx-hide')
    })
  })
})




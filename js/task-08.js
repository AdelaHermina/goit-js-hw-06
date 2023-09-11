
const loginForm = document.querySelector(".login-form");


loginForm.addEventListener("submit", function (event) {
 
event.preventDefault();

  
const formElements = loginForm.elements;

  
const formData = {};

  
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];

   
    if (element.tagName === "INPUT" && element.hasAttribute("name")) {
     
      formData[element.name] = element.value;
    }
  }


  if (!formData.email || !formData.password) {
    alert("Toate câmpurile trebuie completate.");
  } else {
   
    console.log(formData);

    
    loginForm.reset();
  }
 
});


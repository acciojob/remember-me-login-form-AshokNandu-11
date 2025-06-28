//your JS code here. If required.
const userInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberInput = document.getElementById("rememberme");
const submitInput = document.getElementById("submit");
const existingInput = document.getElementById("existing");

window.onload = () =>{
    const saveduserName = localStorage.getItem("saveduserName");
    const savedpassword = localStorage.getItem("savedpassword");

    if(saveduserName && savedpassword){
        existingInput.style.display = "block";

	}
};

document.getElementById("loginform").addEventListener('submit', (e)=>{
    e.preventDefault();

    const userName = userInput.value.trim();
    const password = passwordInput.value.trim();
    
    alert(`Logged in as ${userName}`);

    if(rememberInput.checked){
        localStorage.setItem("saveduserName",userName);
        localStorage.setItem("savedpassword", password);
        existingInput.style.display = "block";
    }else{
        localStorage.removeItem("saveduserName");
        localStorage.removeItem("savedpassword");
        existingInput.style.display = 'none';
    }
});

existingInput.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("saveduserName");
  if (savedUsername) {
    alert("Logged in as " + savedUsername);

  }
});
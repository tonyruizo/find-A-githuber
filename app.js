// Init Github
const github = new Github();
// init UI
const ui = new UI();

// Search input
const searchUser = document.querySelector("#searchUser");

// Search input event listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;
  if (userText !== "") {
    // Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //Show Alert
        ui.showAlert("User not found", "alert alert-dismissible alert-danger");
      } else {
        //Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //Clear Profile
    ui.clearProfile();
  }
});

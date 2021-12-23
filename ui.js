class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }

  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-outline-success mb-4">View Profile</a>
          </div>
          <div class="col-md-3">
            <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
            <!-- <span class="badge bg-dark">Public Gists: ${user.public_gists}</span> --!>
            <span class="badge bg-info">Followers: ${user.followers}</span>
            <span class="badge bg-dark: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: <a href="https://${user.blog}" target="_blank">${user.blog}</a></li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    let output = "";

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge bg-info">Watchers: ${repo.watchers_count}</span>
            <span class="badge bg-dark">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output the Repos
    document.querySelector("#repos").innerHTML = output;
  }

  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // Create a Div
    const div = document.createElement("div");
    // Add Class
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector(".search-container");
    // Get search box
    const search = document.querySelector(".search");
    // Insert alert
    container.insertBefore(div, search);

    // Time out after 2 sec
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  // Clear Alert msg
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}

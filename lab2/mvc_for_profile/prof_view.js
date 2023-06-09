function ProfileView()
{
    this.nameElement = document.getElementById("name");
    this.emailElement = document.getElementById("email");
    this.sexElement = document.getElementById("sex");
    this.dobElement = document.getElementById("dob");
    this.passwordElement = document.getElementById("password");
}

ProfileView.prototype.updateView = function (profileModel)
{
    this.nameElement.textContent = profileModel.name;
    this.emailElement.textContent = profileModel.email;
    this.sexElement.textContent = profileModel.sex;
    this.dobElement.textContent = profileModel.dob;
    this.passwordElement.textContent = profileModel.password;
}

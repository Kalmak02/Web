function ProfileController(profileModel, profileView)
{
    this.profileModel = profileModel;
    this.profileView = profileView;

    this.editBtn = document.getElementById("edit-btn");
    this.saveBtn = document.getElementById("save-btn");

    var self = this;

    this.editBtn.addEventListener("click", function () {
        self.enableEditing();
    });

    this.saveBtn.addEventListener("click", function () {
        self.saveChanges();
    });
}

ProfileController.prototype.enableEditing = function ()
{
    this.profileView.nameElement.innerHTML = '<input type="text" class="form-control" id="name-input" value="' + this.profileModel.name + '">';
    this.profileView.emailElement.innerHTML = '<input type="email" class="form-control" id="email-input" value="' + this.profileModel.email + '">';
    this.profileView.sexElement.innerHTML = '<input type="text" class="form-control" id="sex-input" value="' + this.profileModel.sex + '">';
    this.profileView.dobElement.innerHTML = '<input type="date" class="form-control" id="dob-input" value="' + this.profileModel.dob + '">';
    this.profileView.passwordElement.innerHTML = '<input type="password" class="form-control" id="password-input" value="' + this.profileModel.password + '">';

    this.editBtn.style.display = "none";
    this.saveBtn.style.display = "inline";
}

ProfileController.prototype.saveChanges = function ()
{
    var newName = document.getElementById("name-input").value;
    var newEmail = document.getElementById("email-input").value;
    var newSex = document.getElementById("sex-input").value;
    var newDob = document.getElementById("dob-input").value;
    var newPassword = document.getElementById("password-input").value;

    this.profileModel.name = newName;
    this.profileModel.email = newEmail;
    this.profileModel.sex = newSex;
    this.profileModel.dob = newDob;
    this.profileModel.password = newPassword;

    this.profileView.updateView(this.profileModel);

    this.editBtn.style.display = "inline";
    this.saveBtn.style.display = "none";
}

var profileModel = new ProfileModel();
var profileView = new ProfileView();
var profileController = new ProfileController(profileModel, profileView);

profileView.updateView(profileModel);

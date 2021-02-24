var cancelBtn = document.getElementById("close-btn");
var form = document.getElementsByClassName("notes-form")[0];
var allNotes = document.getElementsByClassName("noteTitle");
var random_colors = [
  "#c2ff3d",
  "#ff3de8",
  "#3dc2ff",
  "#04e022",
  "#bc83e6",
  "#ebb328",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

if (cancelBtn != null)
  cancelBtn.addEventListener("click", function () {
    showEditor();
  });

function showEditor() {
  if (form.style.display == "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
}

function addRandomStyles() {
  var username = document.getElementById("id_username");
  var password = document.getElementById("id_password");
  var password1 = document.getElementById("id_password1");
  var password2 = document.getElementById("id_password2");
  console.log(password2);

  if (username) username.setAttribute("placeholder", "Username");
  if (password) password.setAttribute("placeholder", "Password");
  if (password1) password1.setAttribute("placeholder", "Password");
  if (password2) password2.setAttribute("placeholder", "Password Confirmation");
  for (var i = 0; i < allNotes.length; i++) {
    var note = allNotes[i];
    var randInt = getRandomInt(8);
    note.style.margin = `${randInt * 6 - 10}px`;
    note.style.transform = `rotate(${randInt - 4}deg)`;
    note.style.backgroundColor = random_colors[getRandomInt(6)];
    note.style.margin = `${randInt * 5 - 10}px`;
  }
}

addRandomStyles();

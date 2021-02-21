var addNewNotes = document.getElementById("new-note");
var addBtn = document.getElementById("add-btn");
var cancelBtn = document.getElementById("close-btn");
var form = document.getElementsByClassName("notes-form")[0];
var notesContainer = document.getElementsByClassName("all-notes")[0];
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

cancelBtn.addEventListener("click", function () {
  showEditor();
});

addBtn.addEventListener("click", function () {
  createNote();
});

function showEditor() {
  if (form.style.display == "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

function createNote() {
  var noteText = document.getElementById("note-text").value;
  var newDiv = document.createElement("div");
  var newTitle = document.createElement("h1");
  var randInt = getRandomInt(8);
  randInt += 1;

  newDiv.setAttribute("class", "noteTitle");

  newTitle.innerHTML = noteText;

  newDiv.style.margin = `${randInt * 5 - 10}px`;
  newDiv.style.transform = `rotate(${randInt - 4}deg)`;
  newDiv.style.backgroundColor = random_colors[getRandomInt(6)];
  newDiv.style.margin = `${randInt * 5 - 10}px`;

  newDiv.appendChild(newTitle);

  newDiv.addEventListener("mouseenter", function () {
    newDiv.style.transform = "scale(1.1)";
  });
  newDiv.addEventListener("mouseleave", function () {
    newDiv.style.transform = "scale(1)";
    newDiv.style.transform = `rotate(${randInt - 4}deg)`;
  });

  notesContainer.insertAdjacentElement("beforeend", newDiv);
  console.log(noteText);
}

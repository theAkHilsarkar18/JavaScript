const noteForm = document.getElementById("noteForm");
const noteList = document.getElementById("noteList");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

// noteForm.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

noteForm.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.getElementById("noteTitle").value.trim();
  const description = document.getElementById("noteDescription").value.trim();
  const date = document.getElementById("noteDate").value;
  const note = {
    title: title,
    description: description,
    date: date,
  };
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayeNotes();
  noteForm.reset();
});

// function to render note

function displayeNotes() {
  noteList.innerHTML = "";
  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.innerHTML = `
        <div>
            <strong>${note.title}</strong>
            <p>${note.description}</p>
            <small>${note.date}</small>
        </div>
        `;
    noteList.appendChild(noteDiv);
  });
}

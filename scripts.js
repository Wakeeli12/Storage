document.getElementById('saveButton').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput').value;
    if (noteInput) {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(noteInput);
        localStorage.setItem('notes', JSON.stringify(notes));
        document.getElementById('noteInput').value = ''; // Clear input
        loadNotes(); // Refresh notes list
    }
});

document.getElementById('loadButton').addEventListener('click', loadNotes);

document.getElementById('clearButton').addEventListener('click', function() {
    localStorage.removeItem('notes');
    loadNotes(); // Refresh notes list
});

function loadNotes() {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = ''; // Clear current list
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note;
        notesList.appendChild(li);
    });
}

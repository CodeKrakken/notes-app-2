(function() {
  function testNoteListCreatesANote() {
    notelist = new NoteList;
    notelist.createNote("Favourite drink: seltzer, after the salsa.")
    assert.isTrue(notelist.notes[0].text === "Favourite drink: seltzer, after the salsa.")
  }

  testNoteListCreatesANote();
})(this);

(function() {
  function testNotesArrayCanBeRetrieved() {
    notelist = new NoteList;
    notelist.createNote("One");
    notelist.createNote("Two");
    assert.isTrue(notelist.retrieve() === "One, Two");
  }

  testNotesArrayCanBeRetrieved();
})(this);
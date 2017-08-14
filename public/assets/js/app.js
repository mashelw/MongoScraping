$(document).on("click", "#btn-scrape", function(event) {
  event.preventDefault();

  console.log('scrape clicked');
  $.ajax({
    method: "GET",
    url: "/scrape"
  })
  .done(function(data) {
    console.log(data);
  })
});

$(document).on("click", "#btn-save", function(event) {
  event.preventDefault();

  var thisId = $(this).attr("data-id");

  console.log('saved clicked');
  $.ajax({
    method: "POST",
    url: "saved/" + thisId
  })
  .done(function(data) {
    console.log('data', data);
  })
});

$(document).on("click", "#btn-unsave", function(event) {
  event.preventDefault();

  var thisId = $(this).attr("data-id");

  console.log('unsaved clicked');
  $.ajax({
    method: "POST",
    url: "/unsave/" + thisId
  })
  .done(function(data) {
    console.log(data);
  })
});

$(document).on("click", "#btn-add-note", function(event) {
  event.preventDefault();

  var thisId = $(this).attr("data-id");
  // console.log('thisId Value', thisId);
  // console.log('textarea#' + thisId + 'note-input');
  var noteBody = $('textarea#' + thisId + 'note-input').val().trim();
  console.log('noteBody value', noteBody);

  console.log('add note clicked');
  $.ajax({
    method: "POST",
    url: "/article/notes/" + thisId,
    data: {body: noteBody}
  })
  .done(function(dataFromServer) {
    console.log(dataFromServer);
  })
});

$(document).on("click", "#btn-delete-note", function(event) {
  event.preventDefault();

  var thisId = $(this).attr("data-id");

  console.log('unsaved clicked');
  $.ajax({
    method: "DELETE",
    url: "/article/notes/" + thisId
  })
  .done(function(data) {
    console.log(data);
  })
});








$( document ).ready(function() {
  $(function() {
    $( "#movie-list" ).sortable({
      connectWith: ".movie-row"
    }).disableSelection();
  });
});

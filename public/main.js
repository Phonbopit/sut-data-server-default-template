$(function() {
  $('.is-delete').on('click', function() {
    $.ajax({
      type: 'DELETE',
      url: '/events/' + $(this).attr('data-id'),
    }).done(function() {
      window.location.href = '/'
    })
  })
});

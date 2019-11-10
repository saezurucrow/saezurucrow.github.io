// モーダル表示 https://webdesignday.jp/inspiration/pickup/4680/

$(function() {
  $('.js-modal-open').each(function() {
    $(this).on('click', function() {
      var target = $(this).data('target')
      var modal = document.getElementById(target)
      $(modal).fadeIn()
      return false
    })
  })
  $('.js-modal-close').on('click', function() {
    $('.js-modal').fadeOut()
    return false
  })
})

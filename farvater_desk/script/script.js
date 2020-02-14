$('.lang').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.lang').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.lang .dropdown-menu li').click(function () {
    $(this).parents('.lang').find('span').text($(this).text());
    $(this).parents('.lang').find('input').attr('value', $(this).attr('id'));
});



$('.profile').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-func').slideToggle(300);
});
$('.profile').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-func').slideUp(300);
});
$('.profile .dropdown-func li').click(function () {
    $(this).parents('.profile').find('span').text($(this).text());
    $(this).parents('.profile').find('input').attr('value', $(this).attr('id'));
});
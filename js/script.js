$(document).ready(function() {
    $('.send-btn').attr('disabled', true);
})

$('.content').bind('input', function() {
    let text = $(this).val()
    let counter = 0
    let array = text.split(' ')
    
})

$('.send-btn').click(function(){
    console.log("send")
    sendJSON()
})
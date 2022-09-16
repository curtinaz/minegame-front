// Seta as bombas
var bomb1 = Math.floor(Math.random() * 24) + 1;
do {
    var bomb2 = Math.floor(Math.random() * 24) + 1;
} while (bomb2 == bomb1)

var runningGame = true;

$(".block").click((e) => {

    if(!runningGame) {
        return;
    }

    var clicked = ($(e.target).prop('id')).split('-')[1];

    if(clicked == bomb1 || clicked == bomb2) {
        $(e.target).css('background-color', 'red');
        $(e.target).prop('disabled', 'true');
        runningGame = false;
    } else {
        $(e.target).css('background-color', 'green');
        $(e.target).css('cursor', 'default');
        }

})
// Defines
var bombAreas = [];

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

    if(bombAreas[clicked] == true) {
        $(e.target).css('background-color', 'red');
        $(e.target).prop('disabled', 'true');
        runningGame = false;
    } else {
        $(e.target).css('background-color', 'green');
        $(e.target).css('cursor', 'default');
        }

})

function startGame() {
    var bombQtd = $("#minequantity").val();
    sortBombs(bombQtd);
    runningGame = true;
    for(var i = 1; i <= 25; i++) {
        $(`#block-${i}`).css('background-color', '#00000044');
    }
}

function sortBombs(bombs = 2) {
    bombAreas = [];

    for(var i = 0; i < bombs; i++) {
        do{
            var choose = Math.floor(Math.random() * 24) + 1;
        } while(bombAreas[choose] == true)
        bombAreas[choose] = true;
    }
}

startGame(10);

// Triggers
$("#startGame").click(startGame);
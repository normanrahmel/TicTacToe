let fields = [];
let currentShape = 'cross';

function fillShape(id) {
    if (currentShape == 'cross') {
        currentShape = 'circle';
        document.getElementById('player1').classList.remove('playerInactive');
        document.getElementById('player2').classList.add('playerInactive');
    } else {
        currentShape = 'cross';
        document.getElementById('player2').classList.remove('playerInactive');
        document.getElementById('player1').classList.add('playerInactive');
    }
    fields[id] = currentShape;
    console.log(fields);
    draw();
    checkForWin();
}


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}


function checkForWin() {
    let winner;
    //Horizontalen
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {

    }
    if (fields[6] == fields[7] && fields[6] == fields[8] && fields[6]) {

    }
    //Vertikalen Reihen
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {

    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {

    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {

    }
    //Schräge Reihen
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {

    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {

    }
    console.log()
}
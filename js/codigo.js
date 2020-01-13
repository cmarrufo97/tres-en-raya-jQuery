$(document).ready(function () {
    var turno = 0;  // turno 0: X, turno 1: O
    // $('button').not('#reiniciar') -> Coge solamente aquellos botones sin id.

    $('button').not('#reiniciar').click(function () {
        if ($(this).is(':empty')) {
            if (turno == 0) {
                $(this).text('X');

                if (esLinea() || esColumna() || esDiagonal()) {
                    alert('GANA EL JUGADOR 1');
                } else {
                    turno = 1;
                }
            } else if (turno == 1) {
                $(this).text('O');
                if (esLinea() || esColumna() || esDiagonal()) {
                    alert('GANA EL JUGADOR 2');
                } else {
                    turno = 0;
                }
            }
        }
        if (!$(':button').is(':empty') && !esLinea() && !esColumna() && !esDiagonal()) {
            alert('LA PARTIDA HA QUEDADO EN TABLAS');
        }
    });

    $('#reiniciar').click(function () {
        document.location.reload();
    });
});

function esLinea() {
    var linea = false;

    for (let i = 0; i < $('table tr').length; i++) {
        if (($(`tr:nth-child(${i}) td`).text() === 'XXX') || ($(`tr:nth-child(${i}) td`).text() === 'OOO')) {
            linea = true;
            break;
        }
    }
    return linea;
}

function esColumna() {
    var columna = false;

    for (let i = 1; i <= 3; i++) {
        if (($(`tr:not('#ignorar') td:nth-child(${i})`).text() === 'XXX') ||
            ($(`tr:not('#ignorar') td:nth-child(${i})`).text() === 'OOO')) {
            columna = true;
            break;
        }
    }
    return columna;
}

function esDiagonal() {
    var d1 = "";
    var d2 = "";
    var diagonal = false;

    for (let i = 0; i <= 3; i++) {
        d1 += $(`tr:not('#ignorar'):nth-child(${i}) td:nth-child(${i})`).text();

        if (d1 === 'XXX' || d1 === 'OOO') {
            diagonal = true;
            break;
        }
    }

    for (let i = 1, c = 3; i <= 3; i++ , c--) {
        d2 += $(`tr:not('#ignorar'):nth-child(${i}) td:nth-child(${c})`).text();

        if (d2 === 'XXX' || d2 === 'OOO') {
            diagonal = true;
            break;
        }
    }
    return diagonal;
}

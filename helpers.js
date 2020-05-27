//other functions

function goToStage(i) {
    if (i > 0) {
        tracker = i;
        reset(i);
        updateHint(i)
    }
}

//returns the ids of the 4 adjacent squares
function getFourIDs(position, matrix) {
    x = position[0]
    y = position[1]
    minX = position[0] - 1;
    maxX = position[0] + 1;
    minY = position[1] - 1;
    maxY = position[1] + 1;
    var p1 = minX + ', ' + y;
    var p2 = x + ', ' + minY;
    var p3 = maxX + ', ' + y;
    var p4 = x + ', ' + maxY;
    var IDs = [getId(p1), getId(p2), getId(p3), getId(p4)]
    IDs.forEach(function (item, index) {
        if (item == '') {
            IDs.splice(index, 1);
        }
    });
    return IDs;
}

//returns matrix coordinates when given an id
function getPosition(id) {
    switch (id) {
        case 'a1':
            return [0, 0];
        case 'a2':
            return [1, 0];
        case 'a3':
            return [2, 0];
        case 'a4':
            return [3, 0];
        case 'b1':
            return [0, 1];
        case 'b2':
            return [1, 1];
        case 'b3':
            return [2, 1];
        case 'b4':
            return [3, 1];
        case 'c1':
            return [0, 2];
        case 'c2':
            return [1, 2];
        case 'c3':
            return [2, 2];
        case 'c4':
            return [3, 2];
        case 'd1':
            return [0, 3];
        case 'd2':
            return [1, 3];
        case 'd3':
            return [2, 3];
        case 'd4':
            return [3, 3];
        default:
            return [-1, -1];
    }

}

//returns id when given matrix coordinates
function getId(position) {
    switch (position) {
        case '0, 0':
            return 'a1';
        case '1, 0':
            return 'a2';
        case '2, 0':
            return 'a3';
        case '3, 0':
            return 'a4';
        case '0, 1':
            return 'b1';
        case '1, 1':
            return 'b2';
        case '2, 1':
            return 'b3';
        case '3, 1':
            return 'b4';
        case '0, 2':
            return 'c1';
        case '1, 2':
            return 'c2';
        case '2, 2':
            return 'c3';
        case '3, 2':
            return 'c4';
        case '0, 3':
            return 'd1';
        case '1, 3':
            return 'd2';
        case '2, 3':
            return 'd3';
        case '3, 3':
            return 'd4';
        case '-1, -1':
            return '';
    }
}

//creates matrix representation of the board
function createMatrix() {
    var starter = [];
    var matrix = [];
    var j = 0;
    $('.btn-puzzle').each(function (index, element) {
        starter.push(this.classList.contains('btn-danger'));
        j++;
        if (j > 3) {
            matrix.push(starter)
            j = 0;
            starter = [];
        }

    });
    return matrix;
}

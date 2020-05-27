var tracker = 0;
$(function () {

    $('#fail-text')[0].attributes[1].value = ""
    $('#fail-text').hide();


    $('.btn-puzzle').click(function () {
        ButtonSwap(this.id, tracker);
    });

    $('#submit').click(function () {
        var flag = CheckButtons(tracker)
        if (flag) {
            tracker++
            updateHint(tracker)
            reset();
        } else {
            $('#fail-text').show()
        }
    });

    $('#reset').click(function () {
        reset();
    });
});

function goToStage(i) {
    if (i > 0) {
        tracker = i;
        reset();
        updateHint(i)
    }
}

function reset() {
    $('#fail-text').hide();
    switch (tracker) {
        case 3:
        case 4:
            set = ['a4', 'b3']; //set of buttons to be red
            break;
        default:
            set = []
            break;
    }
    $('.btn-puzzle').each(function (index, element) {
        if (this.classList.contains('btn-danger')) {
            this.classList.remove('btn-danger');
            this.classList.add('btn-primary');
        }
        if (set.includes(this.id)) {
            alternater(this.id)
        }
    });
}

function updateHint(stage) {
    $('#stage-text').text("Stage " + stage);

    var originalSet = getSet(stage)
    var set = []

    if (originalSet.length < 2) {
        $('#stage-text').text("Final Level");
        originalSet.forEach(function (item, index) {
            set.push('h-' + item)
        });
    } else {
        originalSet.forEach(function (item, index) {
            set.push('h-' + item)
        });

    }

    $('.btn-hint').each(function (index, element) {
        if ((this.classList.contains('btn-primary') && set.includes(this.id)) || this.classList.contains('btn-danger') && !set.includes(this.id)) {
            alternater(this.id)
        }
    });
}

function CheckButtons(stage) {
    var flag = true
    var set = getSet(stage)
    $('.btn-puzzle').each(function (index, element) {
        if (flag) {
            if ((this.classList.contains('btn-primary') && set.includes(this.id)) || this.classList.contains('btn-danger') && !set.includes(this.id)) {
                flag = false;
            }
        }
    });
    return flag;
}

function ButtonSwap(idSelector, stage) {
    switch (stage) {
        case 0:
            alternater(idSelector);
            break;
        case 1:
        case 2:
            var matrix = createMatrix()
            var position = getPosition(idSelector);
            var IDs = getFourIDs(position, matrix);
            IDs.forEach(function (item, index) {
                alternater(item)
            });
            break;
        case 3:
        case 4:
            var matrix = createMatrix()
            var position = getPosition(idSelector);
            var IDs = getFourIDs(position, matrix);
            IDs.push(idSelector);
            IDs.forEach(function (item, index) {
                alternater(item)
            });
            break;
        default:
            var matrix = createMatrix()
            var position = getPosition(idSelector);
            var IDs = getFourIDs(position, matrix);
            IDs.forEach(function (item, index) {
                alternater(item)
            });
            break;
    }
}

function alternater(id) {
    id = '#' + id;
    if ($(id).hasClass('btn-primary')) {
        $(id).addClass('btn-danger').removeClass('btn-primary');
    } else {
        $(id).addClass('btn-primary').removeClass('btn-danger');
    }
}

//Object Creators
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

//Getters
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

function getSet(stage) {
    switch (stage) {
        case 0:
            var set = []
            break;
        case 1:
            var set = ['a1', 'a2', 'a3', 'a4', 'b1', 'b4', 'c1', 'c4', 'd1', 'd2', 'd3', 'd4']
            break;
        case 2:
            var set = ['a1', 'a2', 'a3', 'a4', 'b1', 'b2', 'b3', 'b4', 'c1', 'c2', 'c3', 'c4', 'd1', 'd2', 'd3', 'd4']
            break;
        case 3:
            var set = ['a1', 'a2', 'b1', 'b2', 'c3', 'c4', 'd3', 'd4']
            break;
        case 4:
            var set = ['a1', 'a3', 'b2', 'b4', 'c1', 'c3', 'd2', 'd4']
            break;
        default:
            var set = ['a1']
            break;
    }
    return set;
}
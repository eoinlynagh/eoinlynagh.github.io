//controls how the game acts during each stage

//logic for what buttons change color when pressed
function ButtonSwap(idSelector, stage) {
    switch (stage) {
        case 0:
        case 1:
            var matrix = createMatrix()
            var position = getPosition(idSelector);
            var IDs = getFourIDs(position, matrix);
            IDs.forEach(function (item, index) {
                alternater(item)
            });
            break;
        case 2:
        case 3:
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

//stores completed level data, list of what buttons should be what colour at the end
function getSet(stage) {
    switch (stage) {
        case 0:
            var set = ['a1', 'a2', 'a3', 'a4', 'b1', 'b4', 'c1', 'c4', 'd1', 'd2', 'd3', 'd4']
            break;
        case 1:
            var set = ['a1', 'a2', 'a3', 'a4', 'b1', 'b2', 'b3', 'b4', 'c1', 'c2', 'c3', 'c4', 'd1', 'd2', 'd3', 'd4']
            break;
        case 2:
            var set = ['a1', 'a2', 'b1', 'b2', 'c3', 'c4', 'd3', 'd4']
            break;
        case 3:
            var set = ['a1', 'a3', 'b2', 'b4', 'c1', 'c3', 'd2', 'd4']
            break;
        default:
            var set = ['a1']
            break;
    }
    return set;
}

function getResetSet(stage){
    switch (stage) {
        case 2:
        case 3:
            set = ['a4', 'b3']; //set of buttons to be red intially
            break;
        default:
            set = []
            break;
    }
    return set;
}
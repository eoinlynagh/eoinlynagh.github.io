//controls how the game acts during each stage
//logic for what buttons change color when pressed

var tracker = 1;
var color1 = 'btn-success'
var color2 = 'btn-outline-secondary'

//stores completed level data, list of what buttons should be what colour at the end
function getSet(stage) {
    switch (stage) {
        case 0:
            var set = ['a2', 'a3', 'b1', 'b4', 'c1', 'c4', 'd2', 'd3']
            break;
        case 1:
            var set = ['a2', 'a3', 'b1', 'b4', 'c1', 'c4', 'd2', 'd3']
            break;
        case 2:
            var set = ['a1', 'a2', 'a3', 'a4', 'b1', 'b4', 'c1', 'c4', 'd1', 'd2', 'd3', 'd4']
            break;
        case 3:
            var set = ['a1', 'a2', 'a3', 'a4', 'b1', 'b2', 'b3', 'b4', 'c1', 'c2', 'c3', 'c4', 'd1', 'd2', 'd3', 'd4']
            break;
        case 7:
            var set = ['a2', 'a3', 'b2', 'b3', 'c2', 'c3', 'd2', 'd3']
            break;
        case 6:
            var set = ['a1', 'a4', 'd1', 'd4']
            break;
        case 4:
            var set = ['a1', 'a3', 'b2', 'b4', 'c1', 'c3', 'd2', 'd4']
            break;
        case 5:
            var set = ['a1', 'a2', 'b1', 'b2', 'c3', 'c4', 'd3', 'd4']
            break;
        default:
            var set = ['a1']
            break;
    }
    return set;
}

function getResetSet(stage) {
    switch (stage) {
        //allows for custom starting positions
        default:
            set = []
            break;
    }
    return set;
}
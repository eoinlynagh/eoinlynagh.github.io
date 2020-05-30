//functions that can edit site elements directly


function reset(stage) {
    $('#fail-text').hide();
    set = getResetSet(stage);
    $('.btn-puzzle').each(function (index, element) {
        if (this.classList.contains(color1)) {
            this.classList.remove(color1);
            this.classList.add(color2);
        }
        if (set.includes(this.id)) {
            alternater(this.id)
        }
    });
}

//creates the goal matrix
function updateHint(stage) {
    $('#stage-text').text("Stage " + stage);

    var originalSet = getSet(stage)
    var set = []

    if (originalSet.length < 2) {
        $('#stage-text').text("Final Level");
    }

    originalSet.forEach(function (item, index) {
        set.push('h-' + item)
    });

    $('.btn-hint').each(function (index, element) {
        if ((this.classList.contains(color2) && set.includes(this.id)) || this.classList.contains(color1) && !set.includes(this.id)) {
            alternater(this.id)
        }
    });
}

//checks to see if the game is in a completed state
function CheckButtons(stage) {
    var flag = true
    var set = getSet(stage)
    $('.btn-puzzle').each(function (index, element) {
        if (flag) {
            if ((this.classList.contains(color2) && set.includes(this.id)) || this.classList.contains(color1) && !set.includes(this.id)) {
                flag = false;
            }
        }
    });
    return flag;
}

//changes button colour when given id
function alternater(id) {
    id = '#' + id;
    if ($(id).hasClass(color2)) {
        $(id).addClass(color1).removeClass(color2);
    } else {
        $(id).addClass(color2).removeClass(color1);
    }
}

//method to determine what buttons change color
function ButtonSwap(idSelector, stage) {
    var matrix = createMatrix()
    var position = getPosition(idSelector);
    var IDs = getFourIDs(position, matrix);
    IDs.forEach(function (item, index) {
        alternater(item)
    });
}
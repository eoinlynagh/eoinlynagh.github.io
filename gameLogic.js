//functions that can edit site elements directly


function reset(stage) {
    $('#fail-text').hide();
    set = getResetSet(stage);
    $('.btn-puzzle').each(function (index, element) {
        if (this.classList.contains('btn-danger')) {
            this.classList.remove('btn-danger');
            this.classList.add('btn-outline-primary');
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
        originalSet.forEach(function (item, index) {
            set.push('h-' + item)
        });
    } else {
        originalSet.forEach(function (item, index) {
            set.push('h-' + item)
        });

    }

    $('.btn-hint').each(function (index, element) {
        if ((this.classList.contains('btn-outline-primary') && set.includes(this.id)) || this.classList.contains('btn-danger') && !set.includes(this.id)) {
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
            if ((this.classList.contains('btn-outline-primary') && set.includes(this.id)) || this.classList.contains('btn-danger') && !set.includes(this.id)) {
                flag = false;
            }
        }
    });
    return flag;
}

//changes button colour when given id
function alternater(id) {
    id = '#' + id;
    if ($(id).hasClass('btn-outline-primary')) {
        $(id).addClass('btn-danger').removeClass('btn-outline-primary');
    } else {
        $(id).addClass('btn-outline-primary').removeClass('btn-danger');
    }
}
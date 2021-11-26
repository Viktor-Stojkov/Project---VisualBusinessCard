function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(290)
                .height(340);
        };

        reader.readAsDataURL(input.files[0]);
    }

    $('.logoButton').hide();
}

function readURL1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah1')
                .attr('src', e.target.result)
                .width(395)
                .height(340);

        };

        reader.readAsDataURL(input.files[0]);
    }

    $('.logoButton1').hide();
}

function readURL3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah3')
                .attr('src', e.target.result)
                .width(920)
                .height(350);

        };

        reader.readAsDataURL(input.files[0]);
    }

    $('.logoButton2').hide();
}

function readURL4(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah4')
                .attr('src', e.target.result)
                .width(269)
                .height(196);

        };

        reader.readAsDataURL(input.files[0]);
    }

    $('.logoButton4').hide();
}

function readURL5(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah5')
                .attr('src', e.target.result)
                .width(243)
                .height(243);

        };

        reader.readAsDataURL(input.files[0]);
    }

    $('.logoButton5').hide();
}

function readURL6(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah6')
                .attr('src', e.target.result)
                .width(220)
                .height(152);

        };

        reader.readAsDataURL(input.files[0]);
    }

    $('.logoButton6').hide();
}
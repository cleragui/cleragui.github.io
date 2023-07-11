function reset(max){
    for (i = 1; i <= max; i++){
        let card_title = document.getElementById('title-'+i)
        let card_details = document.getElementById('card-'+i)

        let title_style =  card_title.style
        let details_style = card_details.style

        title_style.color = 'white'
        title_style.background = 'red'

        details_style.display = 'none'
    }
}

function check(id){
    let status = document.getElementById('status-'+id)
    let card_title = document.getElementById('title-'+id)
    let card_details = document.getElementById('card-'+id)

    let details_style = card_details.style
    if (status.value == 'off'){
        card_title.style.cssText = 'color: black; background: white; border: 2px solid #343434;'
        details_style.display = 'block'
        
        status.value = 'on'
    }else {
        card_title.style.cssText = 'color: white; background: rgb(166, 3, 3);'
        details_style.display = 'none'

        status.value = 'off'
    }
}

function copycode(id) {
    // Get the text field
    var copyText = document.getElementById(id);

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}


$(function() {
    $("#button-link").on("click", (e) => {
        let yBlockOffset = $("#button-widget").offset().top;
        let headerHeight = $("nav").height();
        let margins = parseInt($("#button-widget").css('margin-top'));
        let totalScroll = yBlockOffset - headerHeight - margins - 15;

        $(document).scrollTop(totalScroll)

        // $('html, body').animate({
        //     scrollTop: totalScroll
        // }, 1000);

        e.preventDefault();
    });
});


$(function() {
    $("#input-link").on("click", (e) => {
        let yBlockOffset = $("#input-widget").offset().top;
        let headerHeight = $("nav").height();
        let margins = parseInt($("#input-widget").css('margin-top'));
        let totalScroll = yBlockOffset - headerHeight - margins - 15;

        $(document).scrollTop(totalScroll)

        // $('html, body').animate({
        //     scrollTop: totalScroll
        // }, 1000);

        e.preventDefault();
    });
});


$(function() {
    $("#text-link").on("click", (e) => {
        let yBlockOffset = $("#text-widget").offset().top;
        let headerHeight = $("nav").height();
        let margins = parseInt($("#text-widget").css('margin-top'));
        let totalScroll = yBlockOffset - headerHeight - margins - 15;

        $(document).scrollTop(totalScroll)

        // $('html, body').animate({
        //     scrollTop: totalScroll
        // }, 1000);

        e.preventDefault();
    });
});


$(function() {
    $("#image-link").on("click", (e) => {
        let yBlockOffset = $("#image-widget").offset().top;
        let headerHeight = $("nav").height();
        let margins = parseInt($("#image-widget").css('margin-top'));
        let totalScroll = yBlockOffset - headerHeight - margins - 15;

        $(document).scrollTop(totalScroll)

        // $('html, body').animate({
        //     scrollTop: totalScroll
        // }, 1000);

        e.preventDefault();
    });
});


$(function() {
    $("#checkbox-link").on("click", (e) => {
        let yBlockOffset = $("#checkbox-widget").offset().top;
        let headerHeight = $("nav").height();
        let margins = parseInt($("#checkbox-widget").css('margin-top'));
        let totalScroll = yBlockOffset - headerHeight - margins - 15;

        $(document).scrollTop(totalScroll)

        // $('html, body').animate({
        //     scrollTop: totalScroll
        // }, 1000);

        e.preventDefault();
    });
});


$(function() {
    $("#radiobutton-link").on("click", (e) => {
        let yBlockOffset = $("#radiobutton-widget").offset().top;
        let headerHeight = $("nav").height();
        let margins = parseInt($("#radiobutton-widget").css('margin-top'));
        let totalScroll = yBlockOffset - headerHeight - margins - 15;

        $(document).scrollTop(totalScroll)

        // $('html, body').animate({
        //     scrollTop: totalScroll
        // }, 1000);

        e.preventDefault();
    });
});



$(function() {
    $("#textarea-link").on("click", (e) => {
        let yBlockOffset = $("#textarea-widget").offset().top;
        let headerHeight = $("nav").height();
        let margins = parseInt($("#textarea-widget").css('margin-top'));
        let totalScroll = yBlockOffset - headerHeight - margins - 15;

        $(document).scrollTop(totalScroll)

        // $('html, body').animate({
        //     scrollTop: totalScroll
        // }, 1000);

        e.preventDefault();
    });
});


$(function() {
    $("#listwidget-link").on("click", (e) => {
        let yBlockOffset = $("#listwidget").offset().top;
        let headerHeight = $("nav").height();
        let margins = parseInt($("#listwidget").css('margin-top'));
        let totalScroll = yBlockOffset - headerHeight - margins - 15;

        $(document).scrollTop(totalScroll)

        // $('html, body').animate({
        //     scrollTop: totalScroll
        // }, 1000);

        e.preventDefault();
    });
});



$(function() {
    $("#button-link").on("click", (e) => {
        let yBlockOffset = $("#button-widget").offset().top;
        let headerHeight = $("nav").height();
        let margins = parseInt($("#button-widget").css('margin-top'));
        let totalScroll = yBlockOffset - headerHeight - margins - 15;

        $(document).scrollTop(totalScroll)

        // $('html, body').animate({
        //     scrollTop: totalScroll
        // }, 1000);

        e.preventDefault();
    });
});


$(function() {
    $("#select-link").on("click", (e) => {
        let yBlockOffset = $("#select-widget").offset().top;
        let headerHeight = $("nav").height();
        let margins = parseInt($("#select-widget").css('margin-top'));
        let totalScroll = yBlockOffset - headerHeight - margins - 15;

        $(document).scrollTop(totalScroll)

        // $('html, body').animate({
        //     scrollTop: totalScroll
        // }, 1000);

        e.preventDefault();
    });
});



$(function() {
    $("#progressbar-link").on("click", (e) => {
        let yBlockOffset = $("#progressbar-widget").offset().top;
        let headerHeight = $("nav").height();
        let margins = parseInt($("#progressbar-widget").css('margin-top'));
        let totalScroll = yBlockOffset - headerHeight - margins - 15;

        $(document).scrollTop(totalScroll)

        // $('html, body').animate({
        //     scrollTop: totalScroll
        // }, 1000);

        e.preventDefault();
    });
});


$(function() {
    $("#slider-link").on("click", (e) => {
        let yBlockOffset = $("#slider-widget").offset().top;
        let headerHeight = $("nav").height();
        let margins = parseInt($("#slider-widget").css('margin-top'));
        let totalScroll = yBlockOffset - headerHeight - margins - 15;

        $(document).scrollTop(totalScroll)

        // $('html, body').animate({
        //     scrollTop: totalScroll
        // }, 1000);

        e.preventDefault();
    });
});

$(function() {
    $("#dial-link").on("click", (e) => {
        let yBlockOffset = $("#dial-widget").offset().top;
        let headerHeight = $("nav").height();
        let margins = parseInt($("#dial-widget").css('margin-top'));
        let totalScroll = yBlockOffset - headerHeight - margins - 15;

        $(document).scrollTop(totalScroll)

        // $('html, body').animate({
        //     scrollTop: totalScroll
        // }, 1000);

        e.preventDefault();
    });
});

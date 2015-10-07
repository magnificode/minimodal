function miniModalClose() {
    var modal = $('.minimodal-holder'),
        modalClose = $('.minimodal-close');

    $('.minimodal-content').click(function(e){
        if( e.target != this ) {
            return;
        } else {
            modal.removeClass('is-active');
        }
    });

    modalClose.click(function(){
        modal.removeClass('is-active');
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) modal.removeClass('is-active');   // esc
    });

}

function miniModal() {
    var $modalClone = $('*[data-minimodal-content]').html(),
        thisModalClone =
        '<div class="minimodal-holder is-active" aria-hidden="true">' +
            '<div class="minimodal-close"></div>' +
            '<div class="minimodal-content">'+ $modalClone +'</div>' +
        '</div>',
        $body = $('body'),
        $modal = $('.minimodal-holder'),
        $modalContent = $('.minimodal-holder .minimodal-content');

    $modal.addClass('is-active');
    $modal.remove();
    $body.append(thisModalClone);

    miniModalClose();
}

$('*[data-minimodal-content]').hide();

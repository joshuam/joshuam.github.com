$(document).ready(function(){

    var args = {
        top: 100,
        textColor: 'rgba(241,243,217, 1.0)',
        callback: headerFinished
        },
    tw = new TypeWriter('canvas', args);

    function hide()
    {
        $('.nav').each(function(){
            $(this).addClass('hide');
        });
        $('#links span').each(function(){
            $(this).removeClass('selected');
        });
    }
    
    function toggle(link, div)
    {
        $(link).click(function(){
            hide();
            $(this).addClass('selected');
            $(div).removeClass('hide');
        });
    }

    function typeHeader()
    {
        tw.type("Josh McCarthy");
    }

    function headerFinished()
    {
        $('#data').removeClass('hide');
        $('#data').fadeTo(1000, 1);
    }

    $('#canvas').on('click', function(){
        tw.clear();
        setTimeout(typeHeader, 150);
    });

    toggle('#navAbout', '#about');
    toggle('#navCode', '#code');
    toggle('#navConnect', '#connect');
    setTimeout(typeHeader, 500);
});

$(document).ready(function(){

    var tw = new TypeWriter('name');

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
        tw.type("Josh McCarthy", headerFinished);
    }

    function headerFinished()
    {
        $('#data').removeClass('hide');
        $('#data').fadeTo(1000, 1);
    }

    $('#name').on('click', function(){
        $('#name').html('');
        setTimeout(typeHeader, 150);
    });

    toggle('#navAbout', '#about');
    toggle('#navCode', '#code');
    toggle('#navConnect', '#connect');
    setTimeout(typeHeader, 500);
});

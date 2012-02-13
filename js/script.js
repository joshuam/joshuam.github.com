$(document).ready(function(){


    function hide()
    {
        $('.nav').each(function(){
            $(this).addClass('hide');
        });
    }
    
    function toggle(link, div)
    {
        $(link).click(function(){
            hide();
            $(div).removeClass('hide');
        });
    }
    
    toggle('#navAbout', '#about');
    toggle('#navCode', '#code');
    toggle('#navConnect', '#connect');
});



















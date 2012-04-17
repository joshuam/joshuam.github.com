$(document).ready(function(){

    var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(38,91,243, 1.0)';
    ctx.font='60px Ubuntu Mono';

    function hide()
    {
        $('.nav').each(function(){
            $(this).addClass('hide');
        });
        $('#links a').each(function(){
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

    function random(min, max, round)
    {
        var x = Math.random() * (max-min) + min;
        if (round)
        {
          x = Math.floor(x);
        }
        return x;
    }

    function typeWord(word, options)
    {
        var fillStyle,
            option,
            args = {
            start: 0,
            left: 0,
            top: 100,
            space: 30,
            shadow: true,
            shadowX: 2,
            shadowY: 2,
            callback: function(){}
            };

        for (option in args)
        {
            args[option] = typeof options[option] === 'undefined' ? args[option] : options[option];
        }

        if (args.shadow)
        {
            fillStyle = ctx.fillStyle;
            ctx.fillStyle = 'rgba(0,0,0,1.0)';
            ctx.fillText(word[args.start], args.left + args.shadowX, args.top + args.shadowY);
            ctx.fillStyle = fillStyle;
        }
        ctx.fillText(word[args.start], args.left, args.top);
        args.start++;
        args.left += args.space;

        if (args.start < word.length)
        {
            setTimeout(function(){typeWord(word, args)}, random(50, 200));
        }
        else
            args.callback();
    }

    function typeHeader()
    {
        var arr = [],
        word = "Josh McCarthy",
        i = 0,
        length;

        for (i, length = word.length; i < length; i++)
        {
            arr.push(word.charAt(i));
        }

        typeWord(arr, {
            callback: function(){
            $('#data').removeClass('hide')
            },
            left: 20
        });
    }

    $('#canvas').on('click', function(){
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        setTimeout(typeHeader, random(100, 300));
    });

    toggle('#navAbout', '#about');
    toggle('#navCode', '#code');
    toggle('#navConnect', '#connect');
    (function(){setTimeout(typeHeader, random(200, 500));})()
});

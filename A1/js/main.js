$(window).on('load', function(){
    $('#play1').click(function(){
        $('#pause1').css('z-index','100');
        $('#v1').get(0).play();
    })
    $('#pause1').click(function(){
        $('#pause1').css('z-index','98');
        $('#v1').get(0).pause();
    })

    $('#play2').click(function(){
        $('#pause2').css('z-index','100');
        $('#v2').get(0).play();
    })
    $('#pause2').click(function(){
        $('#pause2').css('z-index','98');
        $('#v2').get(0).pause();
    })

    $('#play3').click(function(){
        $('#pause3').css('z-index','100');
        $('#v3').get(0).play();
    })
    $('#pause3').click(function(){
        $('#pause3').css('z-index','98');
        $('#v3').get(0).pause();
    })


    $('#info1').click(function(){
        $('.shadow1').fadeIn('100');
        $('#infoOut1').css('z-index','100')
    })
    $('#infoOut1').click(function(){
        $('.shadow1').fadeOut('100')
        $('#infoOut1').css('z-index','98')
    })

    $('#info2').click(function(){
        $('.shadow2').fadeIn('100')
        $('#infoOut2').css('z-index','100')
    })
    $('#infoOut2').click(function(){
        $('.shadow2').fadeOut('100')
        $('#infoOut2').css('z-index','98')
    })

    $('#info3').click(function(){
        $('.shadow3').fadeIn('100')
        $('#infoOut3').css('z-index','100')
    })
    $('#infoOut3').click(function(){
        $('.shadow3').fadeOut('100')
        $('#infoOut3').css('z-index','98')
    })
})
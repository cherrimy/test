$(document).ready(function() {
    var gnb = $('.gnb');
    // var dept1 = $('.dept1');

    // 마우스 over 시
    gnb.mouseenter(function() {
        // const idx = $(this).index();
        // 이벤트 탭을 클릭했을 때 index 번호를 콘솔창에 출력
        // console.log(idx);
        
        // $('.inner_menu').eq(idx).stop().show();;
        $('.inner_menu').stop().show();;
        // menu bg
        var menuHeight = $('.header_bar').outerHeight();
        var inmeHegiht = $('.inner_menu').outerHeight();
        $('.hd_bg').css({
            'top': menuHeight + 'px',
            height: inmeHegiht + 'px'
        });
    });

    // 마우스  leave 시
    gnb.mouseleave(function() {
        $('.inner_menu').stop().hide();
        $('.hd_bg').css('height', '0')

    });


    
});
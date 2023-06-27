//탭관련 스크립트
$('.real_time li').click(function(){
    // 각각의 탭 index값 리턴 메서드
    const idx = $(this).index();
    // 이벤트 탭을 클릭했을 때 index 번호를 콘솔창에 출력
    console.log(idx);

    // 빈 hasClass()
    if($(this).hasClass('on')) { //클래스명 active가 있으면 실행
        $(this).removeClass('on');        
    }else { //클래스명 active가 없으면 실행
        $(this).addClass('on');
        $(this).siblings().removeClass('on');

        $('figure iframe').hide();
        $('figure iframe').eq(idx).stop().show();
    }

});

// #누르면 준비중 경고창
$('body').append("<div class='alert'><img src='./images/alert.png' alt = '준비중 알림창'></div>");

//이벤트 - 클릭하면 경고창이 나타났다가 사라짐
$('a[href="#"]').click(function(e){
    // a 태그를 눌렀을때도 href 링크로 이동하지 않게 할 경우
    e.preventDefault();
    $('.alert').stop().fadeIn(700);
    
    setTimeout(function(){
        $('.alert').stop().fadeOut(700);
    }, 1500);
});


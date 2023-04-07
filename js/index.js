


// дополнительное модальное окно открывается при нажатии на ссылку "правила игры", скрытый текст там же.****************
// скрытое меню появится при уменьшении ширины экрана меньше 760px ****************************************
// модальное окно находится в меню "Войти"
// баннер получился адаптивным










// обновление страницы для перерасчета высоты блоков(способа изменить без перезагрузки пока не нашел)
$(window).resize(function(){
  location.reload()
  });

// установка одинаковой высоты флексов ('.con')  в нутри ('content')
var mh = 0;
$(".con").each(function() {
  if(window.innerWidth > 767){
  var h_block = parseInt($(this).height());
  if (h_block > mh) {
    mh = h_block;
  };
  $(".con").height(mh);
}
});


// установка высоты блоков картинок, равной минимальной высоте из всех картинок 
var dh = parseInt($('.conC1').height());
$(".conC1_div").each(function() {  
  var h_block = parseInt($(this).height());  
  if (h_block < dh) {
    dh = h_block;
  };
});
$(".conC1_div").height(dh);

/*************************************************************** */
// настройка менмю бургер
$('.header_burger').click(function () {
  $('.header_burger, .header_menu').toggleClass('active');
})

 // закрыть при выборе пунктов меню
 $('.header_menu div').click(function () {
  $('.header_burger, .header_menu').toggleClass('active');
 })


 /******************************************************************* */
//  модальное окно авторизации**************************
// нажатие на кнопку войти
$('.header_link_log').click(function() {
    $('.modal').css({      
      'opacity': '1',
      'transform': 'translate( -50%, -50%) rotateX(0deg)'     
    });
    
});
// закрыть окно авторизации
$('.close').click(function () {
  $('.modal').css({
    'opacity': '0',
    'transition': 'all 1s ease 0s',
    'transform': 'perspective(300px) translate(-50%, -200%) rotateX(45deg)'  
  });
});
//закрыть при отправке формы
$('.form_autho input:submit').click(function () {
  $('.modal').css({
    'opacity': '0',
    'transition': 'all 1s ease 0s',
    'transform': 'perspective(300px) translate(-50%, -200%) rotateX(45deg)'  
  });
})

/********************************************************************* */
// модальное окно правил игры
$('.but_modal_rules').click(function () {
  $('.modal_rules').css({    
    'opacity': '1',
    'transition': 'all 1s ease 0s',
    'transform': 'perspective(400px) translate( 0%, 0%) rotateX(0deg)'   

  });
});
// закрытие модального окна
$('.modal_rules_close').click(function () {
  $('.modal_rules').css({
    'opacity': '0',
    'transition': 'all 1s ease 0s',
    'transform': 'perspective(400px) translate(50%, -150%) rotateX(45deg)' 
  });
})
// показать скрытый текст в правилах игры
$('.hidden_but').click(function () {
  console.log('работает')
  $('.hidden').toggle(1000);
  console.log($(this).text())

  // меняем название кнопки
  if ($(this).text() == "Далее") {
    $(this).html('Скрыть');
  }
  else {
    $(this).html('Далее');
  }    
  });

  /***************************************************************************** */
  // модальное окно разработки
  $('.but_modal_test').click(function () {
    $('.modal_test').css({
      'opacity': '1',
    'transition': 'all 1s ease 0s',
    'transform': 'perspective(600px) translate( 0%, 0%) rotateX(0deg)'
    });
  });
  // закрытие окна
  $('.modal_test_close').click(function () {
    $('.modal_test').css({
    'opacity': '0',
    'transition': 'all 1s ease 0s',
    'transform': 'perspective(400px) translate(50%, -150%) rotateX(45deg)'
    });
  });
// закрытие при клике на модальное окно
  $('.modal_test').click(function () {
    $('.modal_test').css({
    'opacity': '0',
    'transition': 'all 1s ease 0s',
    'transform': 'perspective(400px) translate(50%, -150%) rotateX(45deg)'
    });
  });





/****************************************************************************************** */
// дополнительное модальное окно
$('.open_modal_info').click(function () {
  $('.modal_info').css({
    'opacity': '1',
    'transition': 'all 1s ease 0s',
    'transform': 'perspective(600px) translate( 0%, 0%) rotateX(0deg)'
  });  
});

// закрытие окна
$('.modal_info_close').click(function () {
  $('.modal_info').css({
  'opacity': '0',
  'transition': 'all 1s ease 0s',
  'transform': 'perspective(400px) translate(50%, -150%) rotateX(45deg)'
  });
});
// закрытие при клике на модальное окно
$('.modal_info').click(function () {
  $('.modal_info').css({
  'opacity': '0',
  'transition': 'all 1s ease 0s',
  'transform': 'perspective(400px) translate(50%, -150%) rotateX(45deg)'
  });
});

/************************************************************************************************ */


// настройка слайдера

  let line = document.querySelector('.line') 
    let slides = document.querySelectorAll('.slid')
    let slierwidth = document.querySelector('.gallery_content').offsetWidth;

    // установка высоты и ширины слайдов = высоте и ширине окна слайдера(можно добавлять картинки не редактируя их под один размер)
    $('.slid').width(slierwidth);
    $('.slid').height(document.querySelector('.gallery_content').offsetHeight);    
    console.log(slierwidth);
    
    let lineWidth = 0;//ширина всего массива
    let offset = 0 ;// на сколько выдвинулся весь массив за окно слайдера по левой стороне
    let offset_step = 0;//шаг сдвига(ширина объекта  в массиве (WArr[]))

    //вычисление ширины всех вложенных объектов (в массив записывается ширина каждого обекта)
    let WArr = [];

    for (let i = 0; i < slides.length; i++) {
        WArr.push(slides[i].offsetWidth);//заполнение массива шириной каждого слайда
        lineWidth += slides[i].offsetWidth; //хранение суммы ширины всех объектов массива
    }
    console.log(WArr);

    console.log(lineWidth)
    // line.style.width = lineWidth + 'px'
    console.log(line.style.width = lineWidth + 'px');

    offset = 0;   
      function popup () {        
        console.log(offset);
        let ost = 0;
        ost = lineWidth - slierwidth - (offset + WArr[offset_step]);//сумма ширины всех слайдов - ширина окна слайдера-(сколько выдвинулся весь
                                                                    // массив за окно слайдера по левой стороне + ширина следующего объекта)
        if (offset == slides.length*2||offset_step == slides.length*2) {
            line.style.left = 0 + 'px';
            //показываем первый блок и ниже происходит присвоение 0 offset и offset_step. цикл повторяется
            // console.log('line' + line.style.left)

            offset = 0 ;
            offset_step = 0;
            }
        
        else if (ost > 0) {
            
            offset = offset + WArr[offset_step];
            line.style.left = -offset + 'px';
            offset_step++;            
        }
        else {
            line.style.left = - (lineWidth - slierwidth) + 'px';
            offset = slides.length*2;
            offset_step = slides.length*2;
            //задал такую величину которая никогда не будет достигнута в ходе стандартной роботы слайдера
        }        
    };    
    setInterval(popup,4000)
   
   



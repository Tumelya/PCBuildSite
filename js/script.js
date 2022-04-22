const contents = document.querySelectorAll('.program-line__content');

contents.forEach((elem) => { 
    const title = elem.querySelector('.program-line__title');            //перебираем каждый элемент (elem) - тайтл из div contents
    
    title.addEventListener('click', () => {                              //add event 'click' для каждого тайтла (elem) из div contents
        contents.forEach((des) => {                                      //перебираем каждый элемент (des) - параграф с описанием из div contents
            const descr = des.querySelector('.program-line__descr');     //указываем на нужные элементы
            if (elem == des) {                                           //сравниваем: соответствует ли нажатый тайтл появившемуся описанию
                descr.classList.toggle('active');                        //true => включаем переключатель toggle (появляется запись, убирается при повторном нажатии на этот тайтл)
            } else descr.classList.remove('active');                     //false => убираем появившееся описание под другими тайтлами  
        })
    })
})
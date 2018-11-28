var addb = document.getElementById('add-button');
var note_area = document.getElementById('message_box');
var note_inp = document.getElementById('add_note');
var mbm = document.getElementById('members');
addb.addEventListener('click', addition);
var modal = document.getElementById('modal');
var close = document.getElementById('cls');
var run_away = document.getElementById('run');


function random_members(min, max){//объявляем функцию коротая принимает 2 аргумента записаных через запятую
    var rand = min + Math.random() * max //Матх.Рандом возвращает дробное число от 0 до 1, умножаем его на максимальное и прибавляем к минимально возможному значению. 
    rand = Math.round(rand); // эта хрень округляет дробную часть полученого числа к целым
    return rand; // функция возвраащет округленное до целых число в диапазоне от МИН до МАХ. Додумался до этого не сам, нагуглил. И для демонстрации понимания работы этой мазафаки всё планомерно закоментил.
}

window.onload = function memders(){ //Запускаем новую функцию  при загрузке ДОМа
    var members_count = random_members(10, 100); //запиливаем в новую переменную вышеописанную функцию-рандомизатор с аргументами в виде 10(мин) и 100(макс(по правде и до 110 доходит, и вообще работает как хочет))
    mbm.innerText = members_count +" ";//и всё это чтобы сделать число воображаемых пользователей случайным и более естественным.
}
function addition(){ //Это и так понятно чо оно делает
    if( add_note.value!=''){
    var messages = document.createElement('div');
    var note_text = add_note.value;
    var note_text_modified = note_text.toLowerCase();
    note_text_modified = note_text_modified.replace(/!/g,'');
    note_text_modified = note_text_modified.charAt(0).toUpperCase()+note_text_modified.slice(1);
    add_note.value = '';
    messages.innerHTML = "<p>"+'Я:'+note_text_modified+"</p>";
    messages.className = 'message';
    note_area.appendChild(messages);
    }
};

cls.onclick =function(){
    modal.style.display = 'none';
}
run.onclick = function(){
    alert('Не-а, некуда бежать!');
}
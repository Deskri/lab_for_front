function submitForm() {
    // поиск элемента по id
const SIGN_UP_FORM = document.getElementById("signup"); 
// регистрация оброботчика события "отправить данные формы" для нашего элемента
SIGN_UP_FORM.addEventListener('submit', function(event) {
    // получение элемента, для которого произошло событие
    const TARGET_FORM = event.target;
    // получение данных
    const FORM_DATA = new FormData(TARGET_FORM);
    // присваивание перменной данных из поля ввода имени
    const NAME = FORM_DATA.get("inputName");
    // присваивание перменной данных из поля ввода электронной почты
    const EMAIL = FORM_DATA.get("inputEmail");
    // присваивание перменной данных из поля ввода пароля
    const PASSWORD = FORM_DATA.get("inputPassword");
    // переменная, которой будет присваиваться значение однонго из символа при проверке строк
    let letter;

    // ПРОВЕРКА ЭЛЕКТРОННОЙ ПОЧТЫ

    let haveAt = false;
    let haveDot = false;
    for (var i = 0; i < EMAIL.length; i++) {
        letter = EMAIL[i];
        if (letter === '@') {
            haveAt = true;
        }
        if (letter === '.') {
            haveDot = true;
        }
    }

    // ПРОВЕРКА ПАРОЛЯ

    // переменая, которая показывает есть ли в слове символ в верхнем регистре
    let isUpper = false;
    // переменая, которая показывает есть ли в слове символ в нижнем регистре
    let isLower = false;
    // переменая, которая показывает есть ли в слове символ цифры
    let isNumber = false;

    // перебор пароля по символам
    for (var i = 0; i < PASSWORD.length; i++) {
        // присваивание одного из символа
        letter = PASSWORD[i];
        // условие, если символ в верхнем регистре и не число, то действие выполняется
        if (letter === letter.toUpperCase() && isNaN(letter)) {
            isUpper = true;
        }
        // условие, если символ в нижнем регистре и не число, то действие выполняется
        if (letter === letter.toLowerCase() && isNaN(letter)) {
            isLower = true;
        }
        // условие, если символ число, то действие выполняется
        if (!isNaN(letter)) {
            isNumber = true;
        }
    }
    
    if (!NAME) {
        // не выполнять стандартное поведение
        event.preventDefault();
        // вызово предупреждения об ошибке
        Swal.fire (
            'Ошибка',
            'Заполните имя',
            'error'
        );
    } else if (NAME.length <= 3) {
        // не выполнять стандартное поведение
        event.preventDefault();
        // вызово предупреждения об ошибке
        Swal.fire (
            'Ошибка',
            'Имя должно быть больше 3-ех символов',
            'error'
        );
    } else if (!EMAIL) {
        // не выполнять стандартное поведение
        event.preventDefault();
        // вызово предупреждения об ошибке
        Swal.fire (
            'Ошибка',
            'Заполните адрес электронной почты',
            'error'
        );
    } else if (haveDot === false || haveAt === false) {
        // не выполнять стандартное поведение
        event.preventDefault();
        // вызово предупреждения об ошибке
        Swal.fire (
            'Ошибка',
            'Не правильно введена электронная почта',
            'error'
        );
    } else if (!PASSWORD) { // условие, если пароль не исеет значения
        // не выполнять стандартное поведение
        event.preventDefault();
        // вызово предупреждения об ошибке
        Swal.fire (
            'Ошибка',
            'Заполните пароль',
            'error'
        );
    } else if (PASSWORD.length < 8) { // условие, если пароль меньше 8 символов
        // не выполнять стандартное поведение
        event.preventDefault();
        // вызово предупреждения об ошибке
        Swal.fire (
            'Ошибка',
            'Пароль должен быть из восьми или более символов',
            'error'
        );
    } else if (isUpper == false) { // условие, если в пароле нет символа в верхнем регистре
        // не выполнять стандартное поведение
        event.preventDefault();
        // вызово предупреждения об ошибке
        Swal.fire (
            'Ошибка',
            'Хотя бы один символ в пароле должен быть в верхнем регистре',
            'error'
        );
    } else if (isLower == false) { // условие, если в пароле нет символа в нижнем регистре
        // не выполнять стандартное поведение
        event.preventDefault();
        // вызово предупреждения об ошибке
        Swal.fire (
            'Ошибка',
            'Хотя бы один символ в пароле должен быть в нижнем регистре',
            'error'
        );
    } else if (isNumber == false) { // условие, если в пароле нет символа числа
        // не выполнять стандартное поведение
        event.preventDefault();
        // вызово предупреждения об ошибке
        Swal.fire (
            'Ошибка',
            'Хотя бы один символ в пароле должен быть цифрой',
            'error'
        );
    } else { // если ни одно условие не сработало 
        event.preventDefault();
        // вызово предупреждения об успешном заполнении
        Swal.fire (
            'Выполнено',
            'Вы успешно зарегистрировались',
            'success'
        );
    }
})
}
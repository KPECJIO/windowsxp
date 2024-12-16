document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelector('.start-button');
    const puskModal = document.getElementById('pusk');

    function showPuskModal() {
        puskModal.classList.remove('hidden'); // 
    }

    function hidePuskModal() {
        puskModal.classList.add('hidden'); // 
    }

    startButton.addEventListener('click', function() {
        if (puskModal.classList.contains('hidden')) {
            showPuskModal();
        } else {
            hidePuskModal();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Находим элемент с идентификатором "Calculator-button"
    var calculatorButton = document.getElementById('Calculator-button');

    // Добавляем слушатель событий для клика по кнопке
    calculatorButton.addEventListener('click', function() {
        // Находим окно калькулятора
        var calculatorWindow = document.getElementById('CalculatorWindow');
        
        // Убираем класс 'hidden', чтобы отобразить окно калькулятора
        calculatorWindow.classList.remove('hidden');
    });
});
// Функция для скрытия окна калькулятора
function hideCalculatorWindow() {
    var calculatorWindow = document.getElementById('CalculatorWindow');
    calculatorWindow.classList.add('hidden'); // Добавляем класс 'hidden'
}

// Обработчик для кнопки закрытия окна калькулятора
document.addEventListener('DOMContentLoaded', function () {
    var closeButton = document.querySelector('.close-window');
    if (closeButton) {
        closeButton.addEventListener('click', hideCalculatorWindow);
    }
});

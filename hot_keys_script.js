// ********************************************************************
// Горячие клавиши v2.1 public (modified by Orve)
// Дата: 10.2023
// Автор: max, the murderer!
// Запрещено распространение кода на сторонних ресурсах, плагиат, продажа третьим лицам
// ********************************************************************

// Задаём горячие клавиши
document.getElementById('main-reply').onkeydown = function(event) {
    
    // Жирный
    if (event.keyCode==66 && (event.ctrlKey || event.metaKey)) {
        bbcode('[b]', '[/b]'); event.preventDefault(); return false };
    
    // Наклонный
    if (event.keyCode==73 && (event.ctrlKey || event.metaKey)) {
        bbcode('[i]', '[/i]'); event.preventDefault(); return false };
    
    // Подчёркнутый
    if (event.keyCode==83 && (event.ctrlKey || event.metaKey)) {
        bbcode('[s]', '[/s]'); event.preventDefault(); return false };
    
    // Зачёркнутый
    if (event.keyCode==85 && (event.ctrlKey || event.metaKey)) {
        bbcode('[u]', '[/u]'); event.preventDefault(); return false };
    
    // Выравнивание по левому краю
    if (event.keyCode==76 && event.shiftKey && (event.ctrlKey || event.metaKey)) {
        bbcode('[align=left]', '[/align]'); event.preventDefault(); return false };
    
    // Выравнивание по правому краю
    if (event.keyCode==82 && event.shiftKey && (event.ctrlKey || event.metaKey)) {
        bbcode('[align=right]', '[/align]'); event.preventDefault(); return false };
    
    // Выравнивание по центру
    if (event.keyCode==69 && event.shiftKey && (event.ctrlKey || event.metaKey)) {
        bbcode('[align=center]', '[/align]'); event.preventDefault(); return false };
    
    // Ссылка
    if (event.keyCode==75 && (event.ctrlKey || event.metaKey)) {
        bbcode('[url=https://]', '[/url]'); event.preventDefault(); return false };
    
    // Спойлер
    if (event.keyCode==71 && (event.ctrlKey || event.metaKey)) {
        bbcode('[spoiler="Свернутый текст"]', '[/spoiler]'); event.preventDefault(); return false };
    
    // Скрытый текст
    if (event.keyCode==72 && (event.ctrlKey || event.metaKey)) {
        bbcode('[hide=999999]', '[/hide]'); event.preventDefault(); return false };
    
    // Видео
    if (event.keyCode==86 && event.altKey) {
        bbcode('[video]', '[/video]'); event.preventDefault(); return false };
    
    // Цитата
    if (event.keyCode==81 && (event.ctrlKey || event.metaKey)) {
        bbcode('[quote]', '[/quote]'); event.preventDefault(); return false };
    
    // Код
    if (event.keyCode==219 && (event.ctrlKey || event.metaKey)) {
        bbcode('[code]', '[/code]'); event.preventDefault(); return false };
    
    // Цвет
    if (event.keyCode==67 && event.altKey) {
        bbcode('[color=maroon]', '[/color]'); event.preventDefault(); return false };
    
    // Таблица
    if (event.keyCode==84 && event.altKey) {
        bbcode('[table][tr][td]', '[/td][/tr][/table]'); event.preventDefault(); return false };
    
    // Добавлено спустя
    if (event.keyCode==68 && event.shiftKey && (event.ctrlKey || event.metaKey)) {
        bbcode('[add]', ''); event.preventDefault(); return false };
    
    // Поясняющий текст
    if (event.keyCode==65 && event.shiftKey && (event.ctrlKey || event.metaKey)) {
        bbcode('[abbr="Пояснение"]', '[/abbr]'); event.preventDefault(); return false };
    
    // Маркированный текст
    if (event.keyCode==77 && event.shiftKey && (event.ctrlKey || event.metaKey)) {
        bbcode('[mark]', '[/mark]'); event.preventDefault(); return false };
    
    // Горизонтальная линия
    if (event.keyCode==72 && event.altKey) {
        bbcode('[hr]', ''); event.preventDefault(); return false };

	// Lenny
	if (event.keyCode==76 && event.altKey && (event.ctrlKey || event.metaKey)) {
        bbcode('( &#865;° &#860;&#662; &#865;°)', ''); event.preventDefault(); return false };
    
};

// Вызов справки нажатием на кнопку
$('.hotkeys_help').click(function() {
        $('#hotkeys_wrap').slideToggle('fast');
});

$(document).ready(function() {
        
    // Проверка на платформу
    var ctrl = 'Ctrl';
    var alt = 'Alt';
    var isMacLike = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
    if (isMacLike) {
        var ctrl = 'Cmd';
        var alt = 'Option';
    };
    
    // Создаём окно справки
    $('#form-buttons').before('<div id="hotkeys_wrap"><div id="hotkeys"><div class="column"><p>'+ctrl+'</p></div><div class="column"><p>'+alt+'</p></div><div class="column"><p>Shift</p></div></div></div>');
    
    // Вызов окна справки клавишами Ctrl + /
    document.onkeydown = function(event) {
        if ((event.keyCode==190 || event.keyCode==191) && (event.ctrlKey || event.metaKey)) {
            $('#hotkeys_wrap').slideToggle('fast');
            event.preventDefault(); return false }
        };
    
    // Добавляем сочетания клавиш в подсказки
    function hotkey(parent, button, hotkey) {
        
        // Формируем подсказку
        var defaultTitle = $(button).attr('title');
        $(parent).find(button).attr('title', defaultTitle + '  ' + hotkey);
        
        // Формируем строку справки
        $('#hotkeys').append('<div class="item">' + '<span>' + defaultTitle + '</span>' + '  ' + hotkey + '</div>');

    };
    
    // Задаём сочетания клавиш для подсказок
    hotkey('#form-buttons', '#button-bold', ctrl + ' + B');
    hotkey('#form-buttons', '#button-italic', ctrl + ' + I');
    hotkey('#form-buttons', '#button-underline', ctrl + ' + U');
    hotkey('#form-buttons', '#button-strike', ctrl + ' + S');
    hotkey('#form-buttons', '#button-left', ctrl + ' + Shift + L');
    hotkey('#form-buttons', '#button-right', ctrl + ' + Shift + R');
    hotkey('#form-buttons', '#button-center', ctrl + ' + Shift + E');
    hotkey('#form-buttons', '#button-link', ctrl + ' + K');
    hotkey('#form-buttons', '#button-spoiler', ctrl + ' + G');
    hotkey('#form-buttons', '#button-video', alt + ' + V');
    hotkey('#form-buttons', '#button-hide', ctrl + ' + H');
    hotkey('#form-buttons', '#button-quote', ctrl + ' + Q');
    hotkey('#form-buttons', '#button-code', ctrl + ' + [');
    hotkey('#form-buttons', '#button-color', alt + ' + C');
    hotkey('#form-buttons', '#button-table', alt + ' + T');
    
    // Формируем подсказку в блоке "Дополнительно"
    function hotkeyAdd(parent, button, hotkey) {
        var title = $(this).attr('title');
        $(parent).find(button).append('');
        // Формируем строку справки по блоку "Дополнительно"
        var buttonAdd = $(parent).find(button).html();
        $('#hotkeys').append('<div class="item">' + buttonAdd + hotkey  + '</div>');
    };
    
        // Задаём подсказки в блоке "Дополнительно"
    hotkeyAdd('#addition-area', 'div:nth-child(2)', ctrl + ' + Shift + D');
    hotkeyAdd('#addition-area', 'div:nth-child(3)', ctrl + ' + Shift + A');
    hotkeyAdd('#addition-area', 'div:nth-child(5)', ctrl + ' + Shift + M');
    hotkeyAdd('#addition-area', 'div:nth-child(8)', alt + ' + H');
    hotkeyAdd('#post', '.hotkeys_help', ctrl + ' + /');
    
    // Распределяем строки по колонкам справки
    $('#hotkeys .item').each(function() {
        if ($(this).is(':contains("Shift")')) {
            $(this).appendTo('#hotkeys .column:last');
        }
        else if ($(this).is(':contains("Alt"), :contains("Option")')) {
            $(this).appendTo('#hotkeys .column::nth-child(2)');
        }
        else if ($(this).is(':contains("Ctrl"), :contains("Cmd")')){
            $(this).appendTo('#hotkeys .column:first');
        }
    });
    
    // Закрывам окно справки по клику за его пределами
    $(document).click(function(event) {
        if (!$(event.target).is('.hotkeys_help, .hotkeys_help > *')) {
            $('#hotkeys_wrap').slideUp();
        };
    });
});
ymaps.ready(init);

function init() {
    // экземпляр карты
    var branchMap = new ymaps.Map("map", {
            center: [55.553616, 37.357199],
            zoom: 8
        }, {
            searchControlProvider: 'yandex#search',
            balloonPanelMaxMapArea: Infinity
        }),

        // Контейнер для меню.
        menu = $('<ul class="menu"></ul>');

    createMenuGroup(group, items);

    function createMenuGroup (group, items) {

        var menuItem = $('<li><a href="http://127.0.0.1:8000/maps/main_buildings">Основные учебные корпуса</a></li>');

        //Добавим текущий пункт меню
        menuItem
            .append(
                $('<li>' + group.name + '</li>')
            )
            .appendTo(menu)

            // Коллекция для геообъектов группы
        var collection = new ymaps.GeoObjectCollection(null, { preset: group.base_style }),

            // Контейнер для подменю
            submenu = $('<ul class="submenu"></ul>');

            // Добавляем коллекцию на карту
        branchMap.geoObjects.add(collection);

        // Добавляем подменю
        menuItem
            .append(submenu)

            // Добавляем пункт в меню
            .appendTo(menu)

        for (var j = 0, m = items.length; j < m; j++) {
            createSubMenu(items[j], collection, submenu, group);
        }

        menuItem
            //Добавим ссылки на другие группы зданий
            .append(
                $('<li><a href="http://127.0.0.1:8000/maps/industry_faculties">Учебные корпуса отраслевых факультетов</a></li>')
            )
            .append(
                $('<li><a href="http://127.0.0.1:8000/maps/sport">Спорт</a></li>')
            )
            .append(
                $('<li><a href="http://127.0.0.1:8000/maps/dorms">Общежития</a></li>')
            )
            .append(
                $('<li><a href="http://127.0.0.1:8000/maps/other">Другое</a></li>')
            )
            // Добавляем все в меню
            .appendTo(menu)
    }

    function createSubMenu(item, collection, submenu, group) {
        // Пункт подменю
        var submenuItem = $('<li><a href="#">' + item.name + '</a></li>'),

            ballonBody = [
                '<address>',
                '<strong>' + item.name + '</strong>',
                '<br/>',
                'Адрес: ' + item.location ,
                '<br/>',
                'Подробнее: <a href="' + item.website + '</a>',
            ].join(''),

            center = item.center.split(', '),

            // Создаем метку
            placemark = new ymaps.Placemark([Number(center[0]), Number(center[1])], { hintContent: item.name, balloonContentBody: item.ballonBody.join('')});

        placemark.events
            // Изменение цвета метки при наведении на нее
            .add('mouseenter', function (e) {
                e.get('target').options.set('preset', group.highlighted_style);
            })
            // Возвращение цвета метки если курсор не на ней
            .add('mouseleave', function (e) {
                e.get('target').options.unset('preset');
            })
//            // Меняем масштаб карты при клике на метку
//            .add("click", function(e){
//
//            });
            .add("click", function(e){
                branchMap.setCenter(e.get('target').geometry.getCoordinates(), 17, {duration: 1000});
            });

        // Добавляем метку в коллекцию
        collection.add(placemark);

        // Добавляем пункт в подменю
        submenuItem
            .appendTo(submenu)

            // При клике по пункту подменю открываем/закрываем баллун у метки и выделяем ее цвет
            .find('a')
            .bind('click', function () {
                if (!placemark.balloon.isOpen()) {
                    // placemark.options.set('preset', group.highlighted_style);
                    placemark.balloon.open();
                }
                else {
                    placemark.options.unset('preset');
                    placemark.balloon.close();
                }
                return false;
            });
    }

    // Добавляем меню в тэг BODY.
    menu.appendTo($('body'));

    // Выставляем масштаб карты
    //branchMap.setCenter([55.769697, 37.691681], 15, {checkZoomRange: true});
}

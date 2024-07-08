ymaps.ready(init);

function init() {
    // экземпляр карты
    var dormsMap = new ymaps.Map("map", {
            center: [55.783209, 37.745581],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search',
            balloonPanelMaxMapArea: Infinity
        }),

        // Контейнер для меню.
        menu = $('<ul class="menu"></ul>');

    createMenuGroup(groups[4]);

    function createMenuGroup (group) {
        // Пункт меню
        var menuItem = $('<li><a href="http://127.0.0.1:8000/maps/main_buildings">Основные учебные корпуса</a></li>');

        menuItem
            .append(
                $('<li><a href="http://127.0.0.1:8000/maps/branches">Филиалы МГТУ им. Н.Э. Баумана</a></li>')
            )
            .append(
                $('<li><a href="http://127.0.0.1:8000/maps/industry_faculties">Учебные корпуса отраслевых факультетов</a></li>')
            )
            .append(
                $('<li><a href="http://127.0.0.1:8000/maps/sport">Спорт</a></li>')
            )
            .append(
                $('<li>' + group.name + '</li>')
            )
            .appendTo(menu)

            // Коллекция для геообъектов группы
        var collection = new ymaps.GeoObjectCollection(null, { preset: group.style }),

            // Контейнер для подменю
            submenu = $('<ul class="submenu"></ul>');

            // Добавляем коллекцию на карту
        dormsMap.geoObjects.add(collection);

        // Добавляем подменю
        menuItem
            .append(submenu)

            // Добавляем пункт в меню
            .appendTo(menu)

        for (var j = 0, m = group.items.length; j < m; j++) {
            createSubMenu(group.items[j], collection, submenu);
        }

        menuItem
            //Добавим ссылки на другие группы зданий
            .append(
                $('<li><a href="http://127.0.0.1:8000/maps/other">Другое</a></li>')
            )
            // Добавляем все в меню
            .appendTo(menu)
    }

    function createSubMenu(item, collection, submenu) {
        // Пункт подменю
        var submenuItem = $('<li><a href="#">' + item.name + '</a></li>'),

            // Создаем метку
            placemark = new ymaps.Placemark(item.center, { hintContent: item.name, balloonContentBody: item.ballonBody.join('')});

        placemark.events
            // Изменение цвета метки при наведении на нее
            .add('mouseenter', function (e) {
                e.get('target').options.set('preset', 'islands#redDotIcon');
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
                dormsMap.setCenter(e.get('target').geometry.getCoordinates(), 17, {duration: 1000});
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
                    placemark.options.set('preset', 'islands#redDotIcon');
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
    //dormsMap.setCenter([55.769697, 37.691681], 15, {checkZoomRange: true});
}

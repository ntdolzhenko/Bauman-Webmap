ymaps.ready(init);

function init() {
    // экземпляр карты
    var myMap = new ymaps.Map("map", {
            center: [55.769697, 37.691681],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search',
            balloonPanelMaxMapArea: Infinity
        }),

        // Контейнер для меню.
        menu = $('<ul class="menu"></ul>');

    for (var i = 0, l = groups.length; i < l; i++) {
        createMenuGroup(groups[i]);
    }


    function createMenuGroup (group) {
        // Пункт меню
        var menuItem = $('<li><a href="#">' + group.name + '</a></li>'),

            // Коллекция для геообъектов группы
            collection = new ymaps.GeoObjectCollection(null, { preset: group.style }),

            // Контейнер для подменю
            submenu = $('<ul class="submenu"></ul>');

            // Добавляем коллекцию на карту
        myMap.geoObjects.add(collection);

        // Добавляем подменю
        menuItem
            .append(submenu)

            // Добавляем пункт в меню
            .appendTo(menu)

            // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
            .find('a')
            .bind('click', function () {
               if (collection.getParent()) {
                    myMap.geoObjects.remove(collection);
                    submenu.hide();
               }
               else{
                    myMap.geoObjects.add(collection);
                    submenu.show();
               }
            });

        for (var j = 0, m = group.items.length; j < m; j++) {
            createSubMenu(group.items[j], collection, submenu);
        }
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
                myMap.setCenter(e.get('target').geometry.getCoordinates(), 17, {duration: 1000});

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
    //myMap.setCenter([55.769697, 37.691681], 15, {checkZoomRange: true});
}

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.765726, 37.685512],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.765726, 37.685512]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'ГЗ',
                hintContent: 'Главное здание мгту'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        });
        

    myMap.geoObjects
        .add(myGeoObject);
}

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.768868, 37.687922],
            zoom: 14.5
        }, {
            searchControlProvider: 'yandex#search'
        }),

        //коллекции меток

        mainBuildingsCollection = new ymaps.GeoObjectCollection(null, {
            preset: 'islands#blueStretchyIcon'
        }),
        industryBuildingsCollection = new ymaps.GeoObjectCollection(null, {
            preset: 'islands#redStretchyIcon'
        }),
        dormsCollection = new ymaps.GeoObjectCollection(null, {
            preset: 'islands#greenStretchyIcon'
        }),
        otherBuildingsCollection = new ymaps.GeoObjectCollection(null, {
            preset: 'islands#blackStretchyIcon'
        }),

        // все метки на карте
        GZ = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.765726, 37.685512]
            },
            properties: {
                iconContent: 'ГЗ',
                hintContent: 'Главное здание мгту'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        ULK = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.770914, 37.690898]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'УЛК',
                hintContent: 'Учебно-лабораторный корпус'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        MT_IBM = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.764577, 37.682574]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'МТ и ИБМ',
                hintContent: 'Корпус МТ и ИБМ'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        SM = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.769925, 37.690516]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'СМ',
                hintContent: 'Корпус СМ'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        Energo = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.768831, 37.689698]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Энерго',
                hintContent: 'Корпус факультета Энергомашиностроение'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        AK= new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.762738, 37.868148]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'АК',
                hintContent: 'Здание Аэрокосмического факультета'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        RKT= new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.926958, 37.811150]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'РКТ',
                hintContent: 'Здание факультета Ракетно-космической техники'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        RT= new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.740760, 37.724337]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'РТ',
                hintContent: 'Здание Радиотехнического факультета'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        PS= new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.741171, 37.725406]
            },
            properties: {
                iconContent: 'РТ',
                hintContent: 'Здание Приборостроительного факультета'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        SK= new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.772264, 37.697918]
            },
            properties: {
                // Контент метки.
                iconContent: 'СК',
                hintContent: 'Здание Спорткомплекса МГТУ'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        Metalurg= new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.774299, 37.700995]
            },
            properties: {
                // Контент метки.
                iconContent: 'Металург',
                hintContent: 'Стадион Металург'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        Dorm2= new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.772932, 37.698825]
            },
            properties: {
                // Контент метки.
                iconContent: 'Общежитие №2',
                hintContent: 'Здание общежития №2'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        Dorm3= new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.610214, 38.117323]
            },
            properties: {
                // Контент метки.
                iconContent: 'Общежитие №3',
                hintContent: 'Здание общежития №3'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        Dorm4= new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.929389, 37.789267]
            },
            properties: {
                // Контент метки.
                iconContent: 'Общежитие №4',
                hintContent: 'Здание общежития №4'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        Dorm5= new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.788788, 37.791720]
            },
            properties: {
                // Контент метки.
                iconContent: 'Общежитие №5',
                hintContent: 'Здание общежития №5'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        Dorm6= new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.789385, 37.792564]
            },
            properties: {
                iconContent: 'Общежитие №6',
                hintContent: 'Здание общежития №6'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        Dorm8= new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.788798, 37.792160]
            },
            properties: {
                // Контент метки.
                iconContent: 'Общежитие №8',
                hintContent: 'Здание общежития №8'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        Dorm9= new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.788814, 37.793040]
            },
            properties: {
                // Контент метки.
                iconContent: 'Общежитие №9',
                hintContent: 'Здание общежития №9'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        Dorm10_11= new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.770309, 37.687201]
            },
            properties: {
                // Контент метки.
                iconContent: 'Общежитие №10',
                hintContent: 'Здание общежития №10 "Стилобат"'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        Dorm14= new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.771550, 37.695787]
            },
            properties: {
                // Контент метки.
                iconContent: 'Общежитие №14',
                hintContent: 'Здание общежития №14 "Стрела"'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        BZCKI= new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.770825, 37.691441]
            },
            properties: {
                // Контент метки.
                iconContent: 'БЗЦКИ',
                hintContent: 'Большой зал центра креативных индустрий'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
        Health_Finance= new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.764901, 37.682062]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Поликлиника и бугалтерия',
                hintContent: 'Здание поликлиники и бугалтерии'
            }
        }, {
            //preset: 'islands#blackStretchyIcon',
            draggable: false
        }),

        mainBuildings = [GZ, ULK, MT_IBM, SM, Energo],
        industryBuildings = [AK, RKT, RT, PS],
        dorms = [Dorm2, Dorm3, Dorm4, Dorm5, Dorm6, Dorm8, Dorm9, Dorm10_11, Dorm14],
        otherBuildings = [BZCKI, Health_Finance];

        for (var i = 0, l = mainBuildings.length; i < l; i++) {
            mainBuildingsCollection.add(mainBuildings[i]);
        }
        for (var i = 0, l = industryBuildings.length; i < l; i++) {
            industryBuildingsCollection.add(industryBuildings[i]);
        }
        for (var i = 0, l = dorms.length; i < l; i++) {
            dormsCollection.add(dorms[i]);
        }
        for (var i = 0, l = otherBuildings.length; i < l; i++) {
            otherBuildingsCollection.add(otherBuildings[i]);
        }

    myMap.geoObjects
        .add(mainBuildingsCollection)
        .add(industryBuildingsCollection)
        .add(dormsCollection)
        .add(otherBuildingsCollection);

}



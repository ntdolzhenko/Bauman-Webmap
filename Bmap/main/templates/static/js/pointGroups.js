// Группы объектов
var groups = [
        {
            name: "Учебные корпуса основных факультетов",
            style: "islands#blueIcon",
            items: [
                {
                    center: [55.765792, 37.685530],
                    ballonBody: [
                        '<address>',
                        '<strong>Московский государственный технический университет имени Н.Э. Баумана, Главный учебный корпус</strong>',
                        '<br/>',
                        'Адрес: 105005, Москва, 2-я Бауманская ул., д. 5, стр. 1.',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/contacts/">https://bmstu.ru/contacts/</a>',
                        '</address>'
                    ],
                    name: 'ГУК',
                },
                {
                    center: [55.765990, 37.684560],
                    ballonBody: [
                        '<address>',
                        '<strong>Московский государственный технический университет имени Н.Э. Баумана, Учебно-лабораторный корпус</strong>',
                        '<br/>',
                        'Адрес: Рубцовская набережная, 2/18, Москва, 105082',
                        '<br/>',
                        'Подробнее: <a href="www.bmstu.ru">https://www.bmstu.ru</a>',
                        '</address>'
                    ],
                    name: "УЛК"
                },
                {
                    center: [55.764577, 37.682574],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ им. Н. Э. Баумана, Факультеты ИБМ и МТ</strong>',
                        '<br/>',
                        'Адрес: 2-я Бауманская улица, 7, Москва, 105005',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/faculty/mt">https:https://bmstu.ru/faculty/mt</a>,+ <a href="https://bmstu.ru/faculty/ebm">https://bmstu.ru/faculty/ebm</a>',
                        '</address>'
                    ],
                    name: 'Корпус МТ и ИБМ'
                },
                {
                    center: [55.769925, 37.690516],
                    ballonBody: [
                        '<address>',
                        '<strong>Корпус СМ МГТУ им. Баумана</strong>',
                        '<br/>',
                        'Адрес: Госпитальный переулок, 10, Москва, 105005',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/faculty/sm">https://bmstu.ru/faculty/sm</a>',
                        '</address>'
                    ],
                    name: 'Корпус СМ'
                },
                {
                    center: [55.768831, 37.689698],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ имени Н. Э. Баумана, Нук Энергомашиностроение</strong>',
                        '<br/>',
                        'Адрес: Лефортовская набережная, 1, Москва, 105005',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/faculty/energo">https://bmstu.ru/faculty/energo</a>',
                        '</address>'
                    ],
                    name: 'Корпус Э'
                },
                {
                    center: [55.765990, 37.684560],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ им. Н. Э. Баумана, Факультет БМТ</strong>',
                        '<br/>',
                        'Адрес: 105005, г. Москва, ул. 2-я Бауманская, д. 5, к. 1, эт. 3, ауд. 321ю, 319ю, 315ю',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/faculty/bmt">https://bmstu.ru/faculty/bmt</a>',
                        '</address>'
                    ],
                    name: 'Факультет БМТ'
                },
                {
                    center: [55.764617, 37.683620],
                    ballonBody: [
                        '<address>',
                        '<strong>Технологический корпус (A2)</strong>',
                        '<br/>',
                        'Адрес: Москва, 2-я Бауманская ул.,д.5,с.6-9 и д.7,с.2',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/res-and-dev/campus">https://bmstu.ru/res-and-dev/campus</a>',
                        '</address>'
                    ],
                    name: 'Технологический корпус (A2)'
                },
                {
                    center: [55.765211, 37.681494],
                    ballonBody: [
                        '<address>',
                        '<strong>Центр биомедицинских систем и технологий (C2)</strong>',
                        '<br/>',
                        'Адрес: Бригадирский переулок, 12с1, Москва, 105005',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/res-and-dev/campus">https://bmstu.ru/res-and-dev/campus</a>',
                        '</address>'
                    ],
                    name: 'Центр биомедицинских систем и технологий (C2)'
                },
                {
                    center: [55.764582, 37.681374],
                    ballonBody: [
                        '<address>',
                        '<strong>Инжиниринговый центр наземных транспортно-технологических систем (C6)</strong>',
                        '<br/>',
                        'Адрес: Бауманская улица, 57с1, Москва, 105005',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/res-and-dev/campus">https://bmstu.ru/res-and-dev/campus</a>',
                        '</address>'
                    ],
                    name: 'НТС (C6) '
                },
                {
                    center: [55.766928, 37.683145],
                    ballonBody: [
                        '<address>',
                        '<strong>Корпус Химической лаборатории (В1)</strong>',
                        '<br/>',
                        'Адрес: Корпус Химической лаборатории (В1)',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/res-and-dev/campus">https://bmstu.ru/res-and-dev/campus</a>',
                        '</address>'
                    ],
                    name: 'Корпус Химической лаборатории (В1)'
                },
                {
                    center: [55.765640, 37.682483],
                    ballonBody: [
                        '<address>',
                        '<strong>Квантум парк (B2)</strong>',
                        '<br/>',
                        'Адрес: Бригадирский переулок, 13с4, Москва, 105005',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/res-and-dev/campus">https://bmstu.ru/res-and-dev/campus</a>',
                        '</address>'
                    ],
                    name: 'Квантум парк (B2)'
                },
                {
                    center: [55.766581, 37.681412],
                    ballonBody: [
                        '<address>',
                        '<strong>Инновационный хаб, Конгресс-центр (B4)</strong>',
                        '<br/>',
                        'Адрес: Бауманская улица, 57А, Москва, 105005',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/res-and-dev/campus">https://bmstu.ru/res-and-dev/campus</a>',
                        '</address>'
                    ],
                    name: 'Инновационный хаб, Конгресс-центр (B4)'
                },
                {
                    center: [55.767024, 37.680826],
                    ballonBody: [
                        '<address>',
                        '<strong>Кластер "Технологии защиты природы" (B5)</strong>',
                        '<br/>',
                        'Адрес: Бауманская улица, 57А, Москва, 105005',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/res-and-dev/campus">https://bmstu.ru/res-and-dev/campus</a>',
                        '</address>'
                    ],
                    name: 'Кластер "Технологии защиты природы" (B5)'
                },
                {
                    center: [55.766975, 37.681988],
                    ballonBody: [
                        '<address>',
                        '<strong>Кластер информационных технологий (B6)</strong>',
                        '<br/>',
                        'Адрес: Бригадирский переулок, 13, Москва, 105005',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/res-and-dev/campus">https://bmstu.ru/res-and-dev/campus</a>',
                        '</address>'
                    ],
                    name: 'Кластер информационных технологий (B6)'
                },
                {
                    center: [55.767177, 37.681505],
                    ballonBody: [
                        '<address>',
                        '<strong>Кластер "Цифровое материаловедение" (B7)</strong>',
                        '<br/>',
                        'Адрес: Бригадирский переулок, 13, Москва, 105005',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/res-and-dev/campus">https://bmstu.ru/res-and-dev/campus</a>',
                        '</address>'
                    ],
                    name: 'Кластер "Цифровое материаловедение" (B7)'
                },
                {
                    center: [55.767423, 37.682529],
                    ballonBody: [
                        '<address>',
                        '<strong>Федеральный испытательный центр (B8)</strong>',
                        '<br/>',
                        'Адрес: Бригадирский переулок, 13, Москва, 105005',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/res-and-dev/campus">https://bmstu.ru/res-and-dev/campus</a>',
                        '</address>'
                    ],
                    name: 'Федеральный испытательный центр (B8)'
                },
                {
                    center: [55.768567, 37.681568],
                    ballonBody: [
                        '<address>',
                        '<strong>Исследовательский центр (B9)</strong>',
                        '<br/>',
                        'Адрес: Бауманская улица, 53с3, Москва, 105005',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/res-and-dev/campus">https://bmstu.ru/res-and-dev/campus</a>',
                        '</address>'
                    ],
                    name: 'Исследовательский центр (B9)'
                }


            ]
        },
                {
            name: "Филиалы МГТУ им. Н.Э. Баумана",
            style: "islands#greyIcon",
            items: [
                {
                    center: [55.927800, 37.792968],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ им. Н.Э. Баумана, Мытищинский филиал</strong>',
                        '<br/>',
                        'Адрес: 141005, Московская обл., г. Мытищи, ул. 1-я Институтская, д. 1, Мытищинский филиал МГТУ им. Н. Э. Баумана',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/contacts?region=bmstu-mytischi">https://bmstu.ru/contacts?region=bmstu-mytischi</a>',
                        '</address>'
                    ],
                    name: 'Мытищинский филиал'
                },
                {
                    center: [54.508279, 36.248234],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ им. Н.Э. Баумана, Калужский филиал</strong>',
                        '<br/>',
                        'Адрес: 248000, г. Калуга, ул. Баженова, д. 2.',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/contacts?region=bmstu-kaluga">https://bmstu.ru/contacts?region=bmstu-kaluga</a>',
                        '</address>'
                    ],
                    name: 'Калужский филиал'
                },
                {
                    center: [55.772340, 37.685476],
                    ballonBody: [
                        '<address>',
                        '<strong>Московский техникум космического приборостроения</strong>',
                        '<br/>',
                        'Адрес: Волховский переулок, 11с1, Москва, 105005',
                        '<br/>',
                        'Подробнее: <a href="https://mtkp.bmstu.ru/about/contact/">https://mtkp.bmstu.ru/about/contact/</a>',
                        '</address>'
                    ],
                    name: 'МТКП'
                },
                {
                    center: [56.428415, 37.468682],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ им. Н.Э. Баумана, Дмитровский филиал</strong>',
                        '<br/>',
                        'Адрес: 141801, Московская область, Дмитровский район, п. Орево, ДФ МГТУ им. Н.Э.Баумана',
                        '<br/>',
                        'Подробнее: <a href="https://df.bmstu.ru/">https://df.bmstu.ru/</a>',
                        '</address>'
                    ],
                    name: 'Дмитровский филиал'
                }
            ]
        },

        {
            name: "Учебные корпуса отраслевых факультетов",
            style: "islands#pinkIcon",
            items: [
                {
                    center: [55.762666, 37.868188],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ им. Н. Э. Баумана, Факультет Аэрокосмический</strong>',
                        '<br/>',
                        'Адрес: улица Гагарина, 33, Реутов, Московская область, 143966',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/faculty/aerokosmiceskij">https://bmstu.ru/faculty/aerokosmiceskij</a>',
                        '</address>'
                    ],
                    name: 'Корпус АК'
                },
                {
                    center: [55.926746, 37.810963],
                    ballonBody: [
                        '<address>',
                        '<strong>Факультет РКТ МГТУ им. Н. Э. Баумана</strong>',
                        '<br/>',
                        'Адрес: улица Грабина, 1А, Королёв, Московская область, 141071',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/faculty/raketno-kosmiceskaa-tehnika">https://bmstu.ru/faculty/raketno-kosmiceskaa-tehnika</a>',
                        '</address>'
                    ],
                    name: 'Корпус РКТ'
                },
                {
                    center: [55.740828, 37.724256],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ им. Н. Э. Баумана, Радиотехнический факультет</strong>',
                        '<br/>',
                        'Адрес: Авиамоторная улица, 57с14, Москва, 111024',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/faculty/radiotehnicskij">https://bmstu.ru/faculty/radiotehnicskij</a>',
                        '</address>'
                    ],
                    name: 'Корпус РТ'
                },
                {
                    center: [55.740467, 37.725681],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ им. Н. Э. Баумана, Факультет Приборостроительный</strong>',
                        '<br/>',
                        'Адрес: Авиамоторная улица, 55к12, Москва, 111024',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/faculty/priborostroitelnyj">https://bmstu.ru/faculty/priborostroitelnyj</a>',
                        '</address>'
                    ],
                    name: 'Корпус ПС'
                },
            ]
        },
        {
            name: "Спорт",
            style: "islands#yellowIcon",
            items: [
                {
                    center: [55.772392, 37.697788],
                    ballonBody: [
                        '<address>',
                        '<strong>Спортивный комплекс МГТУ им. Н.Э. Баумана</strong>',
                        '<br/>',
                        'Адрес: Госпитальная набережная, 4с1, Москва, 105094',
                        '<br/>',
                        'Подробнее: <a href="https://sport.bmstu.ru/informatsiya/">https://sport.bmstu.ru/informatsiya/</a>',
                        '</address>'
                    ],
                    name: "СК МГТУ"
                },
                {
                    center: [55.773822, 37.702443],
                    ballonBody: [
                        '<address>',
                        '<strong>Стадион Металлург. Футбольное поле №1 (90*60м) (верхнее)</strong>',
                        '<br/>',
                        'Адрес: 1362-й квартал, Басманный район, Центральный административный округ, Москва',
                        '<br/>',
                        'Подробнее: <a href="https://sport.bmstu.ru/metallurg/">https://sport.bmstu.ru/metallurg/</a>',
                        '</address>'
                    ],
                    name: "Футбольное поле №1 (90*60м) (верхнее)"
                },
                {
                    center: [55.774346, 37.700857],
                    ballonBody: [
                        '<address>',
                        '<strong>Стадион Металлург. Футбольное поле №2 (100*70м) (нижнее)</strong>',
                        '<br/>',
                        'Адрес: 1362-й квартал, Басманный район, Центральный административный округ, Москва',
                        '<br/>',
                        'Подробнее: <a href="https://sport.bmstu.ru/metallurg/">https://sport.bmstu.ru/metallurg/</a>',
                        '</address>'
                    ],
                    name: "Футбольное поле №2 (100*70м) (нижнее)"
                },
                {
                    center: [55.774722, 37.701737],
                    ballonBody: [
                        '<address>',
                        '<strong>Стадион Металлург. Футбольное поле №3 (60*35м) (мини-футбольное поле)</strong>',
                        '<br/>',
                        'Адрес: 1362-й квартал, Басманный район, Центральный административный округ, Москва',
                        '<br/>',
                        'Подробнее: <a href="https://sport.bmstu.ru/metallurg/">https://sport.bmstu.ru/metallurg/</a>',
                        '</address>'
                    ],
                    name: "Футбольное поле №3 (60*35м) (мини-футбольное поле)"
                },
                {
                    center: [55.775431, 37.701912],
                    ballonBody: [
                        '<address>',
                        '<strong>Стадион Металлург. Площадка №1 (баскетбольная)</strong>',
                        '<br/>',
                        'Адрес: 1362-й квартал, Басманный район, Центральный административный округ, Москва',
                        '<br/>',
                        'Подробнее: <a href="https://sport.bmstu.ru/metallurg/">https://sport.bmstu.ru/metallurg/</a>',
                        '</address>'
                    ],
                    name: "Площадка №1 (баскетбольная)"
                },
                {
                    center: [55.775599, 37.701651],
                    ballonBody: [
                        '<address>',
                        '<strong>Стадион Металлург. Площадка №2 (баскетбольная)</strong>',
                        '<br/>',
                        'Адрес: 1362-й квартал, Басманный район, Центральный административный округ, Москва',
                        '<br/>',
                        'Подробнее: <a href="https://sport.bmstu.ru/metallurg/">https://sport.bmstu.ru/metallurg/</a>',
                        '</address>'
                    ],
                    name: "Площадка №2 (баскетбольная)"
                },
                {
                    center: [55.775796, 37.702147],
                    ballonBody: [
                        '<address>',
                        '<strong>Стадион Металлург. Футбольное поле №6 (резиновое покрытие)</strong>',
                        '<br/>',
                        'Адрес: 1362-й квартал, Басманный район, Центральный административный округ, Москва',
                        '<br/>',
                        'Подробнее: <a href="https://sport.bmstu.ru/metallurg/">https://sport.bmstu.ru/metallurg/</a>',
                        '</address>'
                    ],
                    name: "Футбольное поле №6 (резиновое покрытие)"
                },
                {
                    center: [55.776143, 37.702486],
                    ballonBody: [
                        '<address>',
                        '<strong>Стадион Металлург. Площадка №3</strong>',
                        '<br/>',
                        'Адрес: 1362-й квартал, Басманный район, Центральный административный округ, Москва',
                        '<br/>',
                        'Подробнее: <a href="https://sport.bmstu.ru/metallurg/">https://sport.bmstu.ru/metallurg/</a>',
                        '</address>'
                    ],
                    name: "Площадка №3"
                },
                {
                    center: [55.776346, 37.702989],
                    ballonBody: [
                        '<address>',
                        '<strong>Стадион Металлург. Площадка №4</strong>',
                        '<br/>',
                        'Адрес: 1362-й квартал, Басманный район, Центральный административный округ, Москва',
                        '<br/>',
                        'Подробнее: <a href="https://sport.bmstu.ru/metallurg/">https://sport.bmstu.ru/metallurg/</a>',
                        '</address>'
                    ],
                    name: "Площадка №4"
                },
                {
                    center: [55.776014, 37.702966],
                    ballonBody: [
                        '<address>',
                        '<strong>Стадион Металлург. Площадка №5</strong>',
                        '<br/>',
                        'Адрес: 1362-й квартал, Басманный район, Центральный административный округ, Москва',
                        '<br/>',
                        'Подробнее: <a href="https://sport.bmstu.ru/metallurg/">https://sport.bmstu.ru/metallurg/</a>',
                        '</address>'
                    ],
                    name: "Площадка №5"
                },
                {
                    center: [55.775028, 37.703760],
                    ballonBody: [
                        '<address>',
                        '<strong>Стадион Металлург. Зал минифутбольный</strong>',
                        '<br/>',
                        'Адрес: 1362-й квартал, Басманный район, Центральный административный округ, Москва',
                        '<br/>',
                        'Подробнее: <a href="https://sport.bmstu.ru/metallurg/">https://sport.bmstu.ru/metallurg/</a>',
                        '</address>'
                    ],
                    name: "Зал минифутбольный"
                },
                {
                    center: [55.775576, 37.704565],
                    ballonBody: [
                        '<address>',
                        '<strong>Стадион Металлург. Зал многофункциональный</strong>',
                        '<br/>',
                        'Адрес: улица Новая Дорога, 11с3, Москва',
                        '<br/>',
                        'Подробнее: <a href="https://sport.bmstu.ru/metallurg/">https://sport.bmstu.ru/metallurg/</a>',
                        '</address>'
                    ],
                    name: "Зал многофункциональный"
                },
                {
                    center: [55.775688, 37.702466],
                    ballonBody: [
                        '<address>',
                        '<strong>Стадион Металлург. Раздевалки</strong>',
                        '<br/>',
                        'Адрес: 1366-й квартал, Басманный район, Центральный административный округ, Москва',
                        '<br/>',
                        'Подробнее: <a href="https://sport.bmstu.ru/metallurg/">https://sport.bmstu.ru/metallurg/</a>',
                        '</address>'
                    ],
                    name: "Раздевалки"
                },
                {
                    center: [55.774365, 37.702495],
                    ballonBody: [
                        '<address>',
                        '<strong>Стадион Металлург. Раздевалки</strong>',
                        '<br/>',
                        'Адрес: 1366-й квартал, Басманный район, Центральный административный округ, Москва',
                        '<br/>',
                        'Подробнее: <a href="https://sport.bmstu.ru/metallurg/">https://sport.bmstu.ru/metallurg/</a>',
                        '</address>'
                    ],
                    name: "Раздевалки"
                },
                {
                    center: [55.775254, 37.702340],
                    ballonBody: [
                        '<address>',
                        '<strong>Стадион Металлург. Зал Единоборств</strong>',
                        '<br/>',
                        'Адрес: улица Новая Дорога, 11с1, Москва, 105094',
                        '<br/>',
                        'Подробнее: <a href="https://sport.bmstu.ru/metallurg/">https://sport.bmstu.ru/metallurg/</a>',
                        '</address>'
                    ],
                    name: "Зал Единоборств"
                },
                {
                    center: [55.788362, 37.792874],
                    ballonBody: [
                        '<address>',
                        '<strong>Измайлово. Футбольное поле</strong>',
                        '<br/>',
                        'Адрес: район Измайлово, Восточный административный округ, Москва',
                        '<br/>',
                        'Подробнее: <a href="https://fv.bmstu.ru/students/time">https://fv.bmstu.ru/students/time</a>',
                        '</address>'
                    ],
                    name: "Футбольное поле"
                },
                {
                    center: [55.788831, 37.793613],
                    ballonBody: [
                        '<address>',
                        '<strong>Измайлово. Раздевалки (Общежитие №4)</strong>',
                        '<br/>',
                        'Адрес: Измайловский проспект, 75/1, Москва, 105043',
                        '<br/>',
                        'Подробнее: <a href="https://fv.bmstu.ru/students/time">https://fv.bmstu.ru/students/time</a>',
                        '</address>'
                    ],
                    name: "Раздевалки (Общежитие №4)"
                },
                {
                    center: [55.789386, 37.792619],
                    ballonBody: [
                        '<address>',
                        '<strong>Измайлово. Раздевалки (Общежитие №6)</strong>',
                        '<br/>',
                        'Адрес: Измайловский проспект, 73А, Москва, 105043',
                        '<br/>',
                        'Подробнее: <a href="https://fv.bmstu.ru/students/time">https://fv.bmstu.ru/students/time</a>',
                        '</address>'
                    ],
                    name: "Раздевалки (Общежитие №6)"
                }
            ]
        },
        {
            name: "Общежития",
            style: "islands#greenIcon",
            items: [
                {
                    center: [55.772901, 37.698908],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ имени Н.Э. Баумана, общежитие №2</strong>',
                        '<br/>',
                        'Адрес: Госпитальная набережная, 4с1А, Москва, 105094',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/bachelor/poselenie">https://bmstu.ru/bachelor/poselenie</a>',
                        '</address>'
                    ],
                    name: "Общежитие №2"
                },
                {
                    center: [55.610214, 38.117323],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ имени Н.Э. Баумана, общежитие №3</strong>',
                        '<br/>',
                        'Адрес: Московская улица, 50/2, рабочий посёлок Ильинский, Раменский городской округ, Московская область',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/bachelor/poselenie">https://bmstu.ru/bachelor/poselenie</a>',
                        '</address>'
                    ],
                    name: "Общежитие №3"
                },
                {
                    center: [55.929389, 37.789267],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ имени Н.Э. Баумана, общежитие №4</strong>',
                        '<br/>',
                        'Адрес: 2-я Институтская улица, 4к3, Мытищи, Московская область, 141005',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/bachelor/poselenie">https://bmstu.ru/bachelor/poselenie</a>',
                        '</address>'
                    ],
                    name: "Общежитие №4"
                },
                {
                    center: [55.788788, 37.791720],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ имени Н.Э. Баумана, общежитие №5</strong>',
                        '<br/>',
                        'Адрес: Измайловский проспект, 73/2, Москва, 105043',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/bachelor/poselenie">https://bmstu.ru/bachelor/poselenie</a>',
                        '</address>'
                    ],
                    name: "Общежитие №5"
                },
                {
                    center: [55.789385, 37.792564],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ имени Н.Э. Баумана, общежитие №6</strong>',
                        '<br/>',
                        'Адрес: Измайловский проспект, 73А, Москва, 105043',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/bachelor/poselenie">https://bmstu.ru/bachelor/poselenie</a>',
                        '</address>'
                    ],
                    name: "Общежитие №6"
                },
                {
                    center: [55.788798, 37.792160],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ имени Н.Э. Баумана, общежитие №8</strong>',
                        '<br/>',
                        'Адрес: Измайловский проспект, 73Б, Москва, 105043',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/bachelor/poselenie">https://bmstu.ru/bachelor/poselenie</a>',
                        '</address>'
                    ],
                    name: "Общежитие №8"
                },
                {
                    center: [55.788814, 37.793040],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ имени Н.Э. Баумана, общежитие №9</strong>',
                        '<br/>',
                        'Адрес: Измайловский проспект, 75А, Москва, 105043',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/bachelor/poselenie">https://bmstu.ru/bachelor/poselenie</a>',
                        '</address>'
                    ],
                    name: "Общежитие №9"
                },
                {
                    center: [55.770351, 37.687225],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ имени Н.Э. Баумана, общежитие №10</strong>',
                        '<br/>',
                        'Адрес: Госпитальный переулок, 4-6с1, Москва, 105005',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/bachelor/poselenie">https://bmstu.ru/bachelor/poselenie</a>',
                        '</address>'
                    ],
                    name: "Общежитие №10"
                },
                {
                    center: [55.770244, 37.688488],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ имени Н.Э. Баумана, общежитие №11</strong>',
                        '<br/>',
                        'Адрес: Госпитальный переулок, 4-6с2, Москва, 105005',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/bachelor/poselenie">https://bmstu.ru/bachelor/poselenie</a>',
                        '</address>'
                    ],
                    name: "Общежитие №11"
                },
                {
                    center: [55.772539, 37.696309],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ имени Н.Э. Баумана, общежитие №14 "Спектр" (F1)</strong>',
                        '<br/>',
                        'Адрес: Госпитальная наб., 4/2, корп. 1, стр. 1, Москва',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/res-and-dev/campus">https://bmstu.ru/res-and-dev/campus</a>',
                        '</address>'
                    ],
                    name: 'Общежитие №14 "Спектр" (F1)'
                },
                {
                    center: [55.771848, 37.696256],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ имени Н.Э. Баумана, общежитие №15 "Парус" (F2)</strong>',
                        '<br/>',
                        'Адрес: Госпитальная наб., 4/2, корп. 1, стр. 2, Москва',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/res-and-dev/campus">https://bmstu.ru/res-and-dev/campus</a>',
                        '</address>'
                    ],
                    name: 'Общежитие №15 "Парус" (F2)'
                }
            ]
        },
        {
            name: "Другое",
            style: "islands#blackIcon",
            items: [
                {
                    center: [55.770905, 37.691514],
                    ballonBody: [
                        '<address>',
                        '<strong>МГТУ им. Н.Э. Баумана, Большой зал Центра креативных индустрий</strong>',
                        '<br/>',
                        'Адрес: Рубцовская набережная, 2/18, Москва, 105082',
                        '<br/>',
                        'Подробнее: <a href="http://creativecenter.bmstu.ru/bzcci">http://creativecenter.bmstu.ru/bzcci</a>',
                        '</address>'
                    ],
                    name: "БЗЦКИ"
                },
                {
                    center: [55.765218, 37.682181],
                    ballonBody: [
                        '<address>',
                        '<strong>Здание поликлиники и бухгалтерии МГТУ им. Н.Э. Баумана</strong>',
                        '<br/>',
                        'Адрес: Бригадирский переулок, 14, Москва, 105005',
                        '<br/>',
                        'Подробнее: <a href="https://health.bmstu.ru/about/contact/">https://health.bmstu.ru/about/contact/</a>, <a href="https://bmstu.ru/about/accounting_department_contacts">https://bmstu.ru/about/accounting_department_contacts</a>,',
                        '</address>'
                    ],
                    name: "Поликлиника и бухгалтерия"
                },
                {
                    center: [55.765912, 37.680713],
                    ballonBody: [
                        '<address>',
                        '<strong>Фанагорийские казармы (B)</strong>',
                        '<br/>',
                        'Адрес: Бауманская ул., 57А, стр. 1, Москва, 105005',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/res-and-dev/campus">https://bmstu.ru/res-and-dev/campus</a>',
                        '</address>'
                    ],
                    name: "Фанагорийские казармы (B)"
                },
                {
                    center: [55.767091, 37.683329],
                    ballonBody: [
                        '<address>',
                        '<strong>Многофункциональный библиотечный корпус (B)</strong>',
                        '<br/>',
                        'Адрес: 2-я Бауманская улица, 10, Москва, 105005',
                        '<br/>',
                        'Подробнее: <a href="https://bmstu.ru/res-and-dev/campus">https://bmstu.ru/res-and-dev/campus</a>',
                        '</address>'
                    ],
                    name: "Многофункциональный библиотечный корпус (B)"
                }
            ]
        }
    ];

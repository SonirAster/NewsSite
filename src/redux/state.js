import axios from "axios";
import usersReducer from "./usersReducer";

let store = {
    _state: {
        users: [
                {name: 'Sonir Aster'},
                {name: 'Pascal Heneumann'},
                {name: 'user 3'}
        ],
        categories: [
            {
                "name": "World",
                "url": "world"
            },
            {
                "name": "Entertainment",
                "url": "entertainment"
            },

            {
                "name": "Business",
                "url": "business"
            },
            {
                "name": "Technology",
                "url": "technology"
            },

            {
                "name": "Other",
                "url": "other"
            },

            {
                "name": "Sports",
                "url": "sports"
            },
            {
                "name": "Science",
                "url": "science"
            },
            {
                "name": "Health",
                "url": "health"
            }
        ],
        // categories: [
        //     {
        //         "name": "Світ",
        //         "url": "world"
        //     },
        //     {
        //         "name": "Iнше",
        //         "url": "other"
        //     },
        //     {
        //         "name": "Бізнес",
        //         "url": "business"
        //     },
        //     {
        //         "name": "Технологія",
        //         "url": "technology"
        //     },
        //     {
        //         "name": "Розваги",
        //         "url": "entertainment"
        //     },
        //     {
        //         "name": "Спорт",
        //         "url": "sports"
        //     },
        //     {
        //         "name": "Наука",
        //         "url": "science"
        //     },
        //     {
        //         "name": "Здоров'я",
        //         "url": "health"
        //     }
        // ],
        articles: [
            {
                "article_id": "8a38528882ed186dbdc15c62754afa2a",
                "title": "Штучний інтелект передбачив, як виступить \"Шахтар\" в оновленій Лізі чемпіонів",
                "link": "https://www.obozrevatel.com/ukr/sport-oboz/shtuchnij-intelekt-peredbachiv-yak-vistupit-shahtar-u-onovlenij-lizi-chempioniv.htm",
                "source_id": "obozrevatel",
                "source_url": "https://www.obozrevatel.com",
                "source_name": "Obozrevatel",
                "image_url": "https://i.obozrevatel.com/news/2024/8/29/filestoragetemp12.jpg?size=1200x630",
                "description": "Чемпіон України стартує у найпрестижнішому єврокубковому футбольному турнірі Європи",
                "pubDate": "2024-08-29 20:52:55",
                "content": "ONLY AVAILABLE IN PAID PLANS"
            },
            {
                "article_id": "454ef94f90a72e779fdf73919c9535a0",
                "title": "«Кривбас» пропустив три голи за три хвилини на полі «Бетиса» і припинив виступи в єврокубках: відеоогляд матчу",
                "link": "https://fakty.ua/442506-krivbass-propustil-tri-gola-za-tri-minuty-na-pole-betisa-i-prekratil-vystupleniya-v-evrokubkah-videoobzor-matcha",
                "source_id": "fakty_ua",
                "source_url": "https://fakty.ua",
                "source_name": "Факти",
                "image_url": "https://fakty.ua/photos2/article/44/25/442506w540zc0.jpg?v=002926",
                "description": "На гру Ліги конференцій до Севільї команда Вернидуба діставалася аж дві доби",
                "pubDate": "2024-08-29 20:52:00",
                "content": "ONLY AVAILABLE IN PAID PLANS"
            },
            {
                "article_id": "d7a517085d8d57c07ea4d08d2224466b",
                "title": "Інтенсивність обстрілів Сумської області збільшилася - ОВА",
                "link": "https://ua.korrespondent.net/ukraine/4712578-intensyvnist-obstriliv-sumskoi-oblasti-zbilshylasia-ova",
                "source_id": "korrespondent",
                "source_url": "https://ua.korrespondent.net",
                "source_name": "Korrespondent",
                "image_url": "https://kor.ill.in.ua/m/610x385/4095987.jpg",
                "description": "Торік загалом було близько восьми тисяч обстрілів населених пунктів та громад Сумської області, а за цей неповний рік вже понад 10 300 обстрілів.",
                "pubDate": "2024-08-29 20:52:00",
                "content": "ONLY AVAILABLE IN PAID PLANS"
            },
            {
                "article_id": "4d2d88c88b28b61d43de9f7668a7fb98",
                "title": "Кривбас розгромно програв Бетісу та припинив виступи у єврокубках",
                "link": "https://champion.com.ua/ukr/football/krivbas-prograv-betisu-ta-viletiv-z-ligi-konferenciy-uyefa-1009344/",
                "source_id": "champion",
                "source_url": "https://champion.com.ua",
                "source_name": "Champion",
                "image_url": "https://static.champion.com.ua/champion/images/doc/5/4/167046/54f27dee5c21866b29acb109a2f6d67f.jpeg?f=jpeg&q=410&w=685",
                "description": null,
                "pubDate": "2024-08-29 20:52:00",
                "content": "ONLY AVAILABLE IN PAID PLANS"
            },
            {
                "article_id": "3f046d288b2c2e5b0b66ff787303e970",
                "title": "\"Кривбас\" пропустив 3 голи за 4 хвилини та залишив єврокубки (відео)",
                "link": "https://news.telegraf.com.ua/ukr/sport-cat/2024-08-29/5869391-krivbass-propustil-3-gola-za-4-minuty-i-pokinul-evrokubki-video",
                "source_id": "telegraf_ua",
                "source_url": "https://telegraf.com.ua",
                "source_name": "Телеграф",
                "image_url": "https://telegraf.com.ua/static/storage/originals/3/03/4397d0aa0bbd107011eac27a0e80d033.jpg",
                "description": "Україну в єврокубках представлять лише два клуби",
                "pubDate": "2024-08-29 20:51:56",
                "content": "ONLY AVAILABLE IN PAID PLANS"
            }
        ],
    },
    getState() {
        return this._state;
    },
    _callSubscriber () {},
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.users = usersReducer(this._state.users, action);
        this._callSubscriber(this._state);
    }
}

export default store;
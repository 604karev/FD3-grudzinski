const aSRockN68CGS4 = require('../img/ASRock N68C-GS4 FX.jpeg');
const geForceGTX10606GBGDDR5 = require('../img/ASUS GeForce GTX 1060 6GB GDDR5.jpeg');
const asusPRIMEH270PLUS = require('../img/Asus PRIME H270-PLUS.jpeg');
const asusPRIMEZ270P = require('../img/Asus PRIME Z270-P.jpeg');
const geForceGTX1080Ti11GBGDDR5X = require('../img/Gigabyte AORUS GeForce GTX 1080 Ti 11GB GDDR5X.jpeg');
const geForceGTX1060GamingX6GBGDDR5 = require('../img/MSI GeForce GTX 1060 Gaming X 6GB GDDR5.jpeg');
const intelCorei38100 = require('../img/Intel Core i3-8100.jpeg');
const intelCorei58400 = require('../img/Intel Core i5-8400.jpeg');
const intelCorei78700K = require('../img/Intel Core i7-8700K.jpeg');

const shopData = [

    {
        id: 1,
        name: 'ASRock N68C-GS4 FX',
        price: '344 р.',
        img: aSRockN68CGS4,
        quantity: 334,
        category: 'motherboard',
        description: 'A-Style : Home Cloud\n' +
        'Поддержка Socket AM3+ процессоров\n' +
        'Поддержка двухканальной DDR3 1600/DDR2 1066\n' +
        'Встроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\n' +
        'Встроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\n' +
        'Поддержка ASRock XFast USB, XFast LAN, XFast RAM\n' +
        'Поддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger',
    },
    {
        id: 2,
        name: 'Asus PRIME H270-PLUS',
        price: '104 р.',
        img: asusPRIMEH270PLUS,
        quantity: 100,
        category: 'motherboard',
        description: 'A-Style : Home Cloud\n' +
        'Поддержка Socket AM3+ процессоров\n' +
        'Поддержка двухканальной DDR3 1600/DDR2 1066\n' +
        'Встроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\n' +
        'Встроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\n' +
        'Поддержка ASRock XFast USB, XFast LAN, XFast RAM\n' +
        'Поддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger',
    },
    {
        id: 3,
        name: 'Asus PRIME Z270-P',
        price: '54 р.',
        img: asusPRIMEZ270P,
        quantity: 558,
        category: 'motherboard',
        description: 'A-Style : Home Cloud\n' +
        'Поддержка Socket AM3+ процессоров\n' +
        'Поддержка двухканальной DDR3 1600/DDR2 1066\n' +
        'Встроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\n' +
        'Встроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\n' +
        'Поддержка ASRock XFast USB, XFast LAN, XFast RAM\n' +
        'Поддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger',
    },

    {
        id: 4,
        name: 'ASUS GeForce GTX 1060 6GB GDDR5',
        price: '344 р.',
        img: geForceGTX10606GBGDDR5,
        quantity: 334,
        category: 'videoCard',
        description: 'A-Style : Home Cloud\n' +
        'Поддержка Socket AM3+ процессоров\n' +
        'Поддержка двухканальной DDR3 1600/DDR2 1066\n' +
        'Встроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\n' +
        'Встроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\n' +
        'Поддержка ASRock XFast USB, XFast LAN, XFast RAM\n' +
        'Поддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger',
    },
    {
        id: 5,
        name: 'Gigabyte AORUS GeForce GTX 1080 Ti 11GB GDDR5X',
        price: '104 р.',
        img: geForceGTX1080Ti11GBGDDR5X,
        quantity: 100,
        category: 'videoCard',
        description: 'A-Style : Home Cloud\n' +
        'Поддержка Socket AM3+ процессоров\n' +
        'Поддержка двухканальной DDR3 1600/DDR2 1066\n' +
        'Встроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\n' +
        'Встроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\n' +
        'Поддержка ASRock XFast USB, XFast LAN, XFast RAM\n' +
        'Поддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger',
    },
    {
        id: 6,
        name: 'MSI GeForce GTX 1060 Gaming X 6GB GDDR5',
        price: '54 р.',
        img: geForceGTX1060GamingX6GBGDDR5,
        quantity: 558,
        category: 'videoCard',
        description: 'A-Style : Home Cloud\n' +
        'Поддержка Socket AM3+ процессоров\n' +
        'Поддержка двухканальной DDR3 1600/DDR2 1066\n' +
        'Встроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\n' +
        'Встроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\n' +
        'Поддержка ASRock XFast USB, XFast LAN, XFast RAM\n' +
        'Поддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger',
    },

    {
        id: 7,
        name: 'Intel Core i3-8100',
        price: '344 р.',
        img: intelCorei38100,
        quantity: 334,
        category: 'processors',
        description: 'A-Style : Home Cloud\n' +
        'Поддержка Socket AM3+ процессоров\n' +
        'Поддержка двухканальной DDR3 1600/DDR2 1066\n' +
        'Встроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\n' +
        'Встроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\n' +
        'Поддержка ASRock XFast USB, XFast LAN, XFast RAM\n' +
        'Поддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger',
    },
    {
        id: 8,
        name: 'Intel Core i5-8400',
        price: '104 р.',
        img: intelCorei58400,
        quantity: 100,
        category: 'processors',
        description: 'A-Style : Home Cloud\n' +
        'Поддержка Socket AM3+ процессоров\n' +
        'Поддержка двухканальной DDR3 1600/DDR2 1066\n' +
        'Встроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\n' +
        'Встроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\n' +
        'Поддержка ASRock XFast USB, XFast LAN, XFast RAM\n' +
        'Поддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger',
    },
    {
        id: 9,
        name: 'Intel Core i7-8700K',
        price: '54 р.',
        img: intelCorei78700K,
        quantity: 558,
        category: 'processors',
        description: 'A-Style : Home Cloud\n' +
        'Поддержка Socket AM3+ процессоров\n' +
        'Поддержка двухканальной DDR3 1600/DDR2 1066\n' +
        'Встроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\n' +
        'Встроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\n' +
        'Поддержка ASRock XFast USB, XFast LAN, XFast RAM\n' +
        'Поддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger',
    }
];

export default function internetShop(state = shopData, action) {
    if (action.type === 'ADD_ROW') {
        return [
            ...state, {
                id: action.id,
                name: action.name,
                img: action.img,
                price: action.price,
                quantity: action.quantity,
                category: action.category,
                description: action.description

            }
        ]

    } else if (action.type === 'REMOVE_ROW') {
        return [
            ...state.filter(
                (data) => {
                    return data.id !== action.id
                })

        ];
    } else if (action.type === 'SAVE_EDIT_ROW') {
        return [
            ...state.map(
                (data) => {
                    if (data.id === action.id) {
                        data.name = action.name;
                        data.quantity = action.quantity;
                        data.img = action.img;
                        data.price = action.price;
                        data.description = action.description
                    }
                    return data;
                })


        ];
    }
    return state
}
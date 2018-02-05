import reducers from '../reducers';

test('reducers', () => {
    let state;
    state = reducers({
        shopData: [{
            id: 1,
            name: 'ASRock N68C-GS4 FX',
            price: '344 р.',
            img: '/static/media/ASRock N68C-GS4 FX.737a8d51.jpeg',
            quantity: 334,
            category: 'motherboard',
            description: 'A-Style : Home Cloud\nПоддержка Socket AM3+ процессоров\nПоддержка двухканальной DDR3 1600/DDR2 1066\nВстроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\nВстроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\nПоддержка ASRock XFast USB, XFast LAN, XFast RAM\nПоддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger'
        }, {
            id: 2,
            name: 'Asus PRIME H270-PLUS',
            price: '104 р.',
            img: '/static/media/Asus PRIME H270-PLUS.367a5163.jpeg',
            quantity: 100,
            category: 'motherboard',
            description: 'A-Style : Home Cloud\nПоддержка Socket AM3+ процессоров\nПоддержка двухканальной DDR3 1600/DDR2 1066\nВстроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\nВстроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\nПоддержка ASRock XFast USB, XFast LAN, XFast RAM\nПоддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger'
        }, {
            id: 3,
            name: 'Asus PRIME Z270-P',
            price: '54 р.',
            img: '/static/media/Asus PRIME Z270-P.bf88232d.jpeg',
            quantity: 558,
            category: 'motherboard',
            description: 'A-Style : Home Cloud\nПоддержка Socket AM3+ процессоров\nПоддержка двухканальной DDR3 1600/DDR2 1066\nВстроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\nВстроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\nПоддержка ASRock XFast USB, XFast LAN, XFast RAM\nПоддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger'
        }, {
            id: 4,
            name: 'ASUS GeForce GTX 1060 6GB GDDR5',
            price: '344 р.',
            img: '/static/media/ASUS GeForce GTX 1060 6GB GDDR5.c4593f3e.jpeg',
            quantity: 334,
            category: 'videoCard',
            description: 'A-Style : Home Cloud\nПоддержка Socket AM3+ процессоров\nПоддержка двухканальной DDR3 1600/DDR2 1066\nВстроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\nВстроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\nПоддержка ASRock XFast USB, XFast LAN, XFast RAM\nПоддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger'
        }, {
            id: 5,
            name: 'Gigabyte AORUS GeForce GTX 1080 Ti 11GB GDDR5X',
            price: '104 р.',
            img: '/static/media/Gigabyte AORUS GeForce GTX 1080 Ti 11GB GDDR5X.ca420cbd.jpeg',
            quantity: 100,
            category: 'videoCard',
            description: 'A-Style : Home Cloud\nПоддержка Socket AM3+ процессоров\nПоддержка двухканальной DDR3 1600/DDR2 1066\nВстроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\nВстроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\nПоддержка ASRock XFast USB, XFast LAN, XFast RAM\nПоддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger'
        }, {
            id: 6,
            name: 'MSI GeForce GTX 1060 Gaming X 6GB GDDR5',
            price: '54 р.',
            img: '/static/media/MSI GeForce GTX 1060 Gaming X 6GB GDDR5.8117b575.jpeg',
            quantity: 558,
            category: 'videoCard',
            description: 'A-Style : Home Cloud\nПоддержка Socket AM3+ процессоров\nПоддержка двухканальной DDR3 1600/DDR2 1066\nВстроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\nВстроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\nПоддержка ASRock XFast USB, XFast LAN, XFast RAM\nПоддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger'
        }, {
            id: 7,
            name: 'Intel Core i3-8100',
            price: '344 р.',
            img: '/static/media/Intel Core i3-8100.45d90f63.jpeg',
            quantity: 334,
            category: 'processors',
            description: 'A-Style : Home Cloud\nПоддержка Socket AM3+ процессоров\nПоддержка двухканальной DDR3 1600/DDR2 1066\nВстроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\nВстроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\nПоддержка ASRock XFast USB, XFast LAN, XFast RAM\nПоддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger'
        }, {
            id: 8,
            name: 'Intel Core i5-8400',
            price: '104 р.',
            img: '/static/media/Intel Core i5-8400.e457054d.jpeg',
            quantity: 100,
            category: 'processors',
            description: 'A-Style : Home Cloud\nПоддержка Socket AM3+ процессоров\nПоддержка двухканальной DDR3 1600/DDR2 1066\nВстроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\nВстроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\nПоддержка ASRock XFast USB, XFast LAN, XFast RAM\nПоддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger'
        }, {
            id: 9,
            name: 'Intel Core i7-8700K',
            price: '54 р.',
            img: '/static/media/Intel Core i7-8700K.58b9f6e2.jpeg',
            quantity: 558,
            category: 'processors',
            description: 'A-Style : Home Cloud\nПоддержка Socket AM3+ процессоров\nПоддержка двухканальной DDR3 1600/DDR2 1066\nВстроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\nВстроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\nПоддержка ASRock XFast USB, XFast LAN, XFast RAM\nПоддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger'
        }], selectedProductCode: 9, workMode: 0
    }, {type: 'REMOVE_ROW', id: 9});
    expect(state).toEqual({
        shopData: [{
            id: 1,
            name: 'ASRock N68C-GS4 FX',
            price: '344 р.',
            img: '/static/media/ASRock N68C-GS4 FX.737a8d51.jpeg',
            quantity: 334,
            category: 'motherboard',
            description: 'A-Style : Home Cloud\nПоддержка Socket AM3+ процессоров\nПоддержка двухканальной DDR3 1600/DDR2 1066\nВстроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\nВстроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\nПоддержка ASRock XFast USB, XFast LAN, XFast RAM\nПоддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger'
        }, {
            id: 2,
            name: 'Asus PRIME H270-PLUS',
            price: '104 р.',
            img: '/static/media/Asus PRIME H270-PLUS.367a5163.jpeg',
            quantity: 100,
            category: 'motherboard',
            description: 'A-Style : Home Cloud\nПоддержка Socket AM3+ процессоров\nПоддержка двухканальной DDR3 1600/DDR2 1066\nВстроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\nВстроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\nПоддержка ASRock XFast USB, XFast LAN, XFast RAM\nПоддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger'
        }, {
            id: 3,
            name: 'Asus PRIME Z270-P',
            price: '54 р.',
            img: '/static/media/Asus PRIME Z270-P.bf88232d.jpeg',
            quantity: 558,
            category: 'motherboard',
            description: 'A-Style : Home Cloud\nПоддержка Socket AM3+ процессоров\nПоддержка двухканальной DDR3 1600/DDR2 1066\nВстроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\nВстроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\nПоддержка ASRock XFast USB, XFast LAN, XFast RAM\nПоддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger'
        }, {
            id: 4,
            name: 'ASUS GeForce GTX 1060 6GB GDDR5',
            price: '344 р.',
            img: '/static/media/ASUS GeForce GTX 1060 6GB GDDR5.c4593f3e.jpeg',
            quantity: 334,
            category: 'videoCard',
            description: 'A-Style : Home Cloud\nПоддержка Socket AM3+ процессоров\nПоддержка двухканальной DDR3 1600/DDR2 1066\nВстроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\nВстроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\nПоддержка ASRock XFast USB, XFast LAN, XFast RAM\nПоддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger'
        }, {
            id: 5,
            name: 'Gigabyte AORUS GeForce GTX 1080 Ti 11GB GDDR5X',
            price: '104 р.',
            img: '/static/media/Gigabyte AORUS GeForce GTX 1080 Ti 11GB GDDR5X.ca420cbd.jpeg',
            quantity: 100,
            category: 'videoCard',
            description: 'A-Style : Home Cloud\nПоддержка Socket AM3+ процессоров\nПоддержка двухканальной DDR3 1600/DDR2 1066\nВстроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\nВстроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\nПоддержка ASRock XFast USB, XFast LAN, XFast RAM\nПоддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger'
        }, {
            id: 6,
            name: 'MSI GeForce GTX 1060 Gaming X 6GB GDDR5',
            price: '54 р.',
            img: '/static/media/MSI GeForce GTX 1060 Gaming X 6GB GDDR5.8117b575.jpeg',
            quantity: 558,
            category: 'videoCard',
            description: 'A-Style : Home Cloud\nПоддержка Socket AM3+ процессоров\nПоддержка двухканальной DDR3 1600/DDR2 1066\nВстроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\nВстроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\nПоддержка ASRock XFast USB, XFast LAN, XFast RAM\nПоддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger'
        }, {
            id: 7,
            name: 'Intel Core i3-8100',
            price: '344 р.',
            img: '/static/media/Intel Core i3-8100.45d90f63.jpeg',
            quantity: 334,
            category: 'processors',
            description: 'A-Style : Home Cloud\nПоддержка Socket AM3+ процессоров\nПоддержка двухканальной DDR3 1600/DDR2 1066\nВстроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\nВстроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\nПоддержка ASRock XFast USB, XFast LAN, XFast RAM\nПоддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger'
        }, {
            id: 8,
            name: 'Intel Core i5-8400',
            price: '104 р.',
            img: '/static/media/Intel Core i5-8400.e457054d.jpeg',
            quantity: 100,
            category: 'processors',
            description: 'A-Style : Home Cloud\nПоддержка Socket AM3+ процессоров\nПоддержка двухканальной DDR3 1600/DDR2 1066\nВстроенная графика NVIDIA® GeForce 7025, DX9.0 VGA, Pixel Shader 3.0\nВстроенное аудио 5.1 HD (Аудиокодек Realtek ALC662)\nПоддержка ASRock XFast USB, XFast LAN, XFast RAM\nПоддержка ASRock Instant Boot, Instant Flash, OC DNA, APP Charger'
        }], selectedProductCode: 9, workMode: 0
    });
});
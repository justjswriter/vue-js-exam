const _products =
    [
        {
            "id": 1,
            "title": "LX570",
            "price": "10",
            "inventory":2
        },
        {
            "id": 2,
            "title": "BMW",
            "price": "7",
            "inventory": 5
        },
        {
            "id": 3,
            "title": "KIA",
            "price": "5",
            "inventory": 7
        }
    ];

export default {
    getProducts (cb) {
        setTimeout(() => cb(_products), 100);
    },

    buyProducts (products, cb, errorCb) {
        setTimeout(() => {
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
                ? cb()
                : errorCb();
        }, 100)
    }
}
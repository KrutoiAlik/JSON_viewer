let ourData = {
    "version": 1,
    "databases": [{
        "mid": "test",
        "host": "localhost:1111",
        "type": "test",
        "version": "10",
        "config": {
            "user": "test",
            "password": "****",
            "charset": "UTF8",
            "timeout": 60
        }
    }, {
        "mid": "test",
        "host": "localhost:2222",
        "type": "test",
        "version": "2018",
        "config": {
            "user": "test",
            "password": "****",
            "charset": "UTF8",
            "timeout": 60
        }
    }],
    "autorization": {
        "mid": "test",
        "host": "http://localhost:8500",
        "config": {}
    },
    "transaction": {
        "mid": "test",
        "host": "http://localhost:8501",
        "databases": [{
            "mid": "test",
            "base": "test",
            "password": "***"
        }],
        "service": {
            "xreport": 155,
            "openday": 156,
            "closeday": 157,
            "sum": 158
        },
        "config": {
            "chequeheader": [
                "š 1",
                "ÄÎÁĐÎ ĎÎĆŔËÎÂŔŇÜ"
            ],
            "chequefooter": [
                "6 ěĺń˙öĺâ"
            ]
        }
    },
    "dictionary": {
        "mid": "test",
        "host": "http://localhost:8502",
        "config": {
            "pathData": "data"
        }
    },
    "transport": {
        "mid": "test",
        "host": "http://localhost:8503",
        "databases": [{
            "mid": "test",
            "base": "test",
            "user": "test",
            "password": "***"
        },
            {
                "mid": "test",
                "base": "test",
                "user": "test",
                "password": "****",
                "nocreate": 1
            }
        ],
        "config": {
            "ftp": {
                "host": "ftp.test.ru",
                "login": "test",
                "password": "*****",
                "path": "/test/"
            }
        }
    },
    "event": {
        "mid": "test",
        "host": "http://localhost:8504"
    },
    "monitor": {
        "mid": "test",
        "host": "http://localhost:8505"
    },
    "tariff": {
        "host": "http://test.ru"
    },
    "address": {
        "host": "https://test.ru"
    },
    "terminals": [{
        "post": 10000,
        "kgp": ["000-00-00", "123-45-67"],
        "gui_version": 1,
        "windows": [{
            "win": 1,
            "fiscal": {
                "mid": "test",
                "host": "http://localhost:8506",
                "config": {}
            },
            "card": {
                "mid": "test",
                "host": "http://localhost:8507",
                "config": {}
            },
            "printer": {
                "mid": "test",
                "host": "http://localhost:8508",
                "databases": [{
                    "mid": "test",
                    "base": "test",
                    "password": "****"
                }],
                "config": {
                    "device_default": ""
                }
            },
            "barcode": {
                "mid": "test",
                "host": "http://localhost:8509",
                "config": {
                    "logicalscannername": ""
                }
            },
            "weight": {
                "mid": "test",
                "host": "http://localhost:8510",
                "config": {
                    "device_default": ""
                }
            }
        }, {
            "win": 2,
            "fiscal": {
                "mid": "test",
                "host": "http://localhost:8511",
                "config": {
                    "driverport": "COM1"
                }
            },
            "card": {
                "mid": "test",
                "host": "http://localhost:8512",
                "config": {}
            },
            "printer": {
                "mid": "test",
                "host": "http://localhost:8513",
                "databases": [{
                    "mid": "test",
                    "base": "test",
                    "password": "*****"
                }],
                "config": {}
            },
            "barcode": {
                "mid": "test",
                "host": "http://localhost:8514",
                "config": {
                    "logicalscannername": ""
                }
            },
            "weight": {
                "mid": "test",
                "host": "http://localhost:8515",
                "config": {}
            }
        }, {
            "win": 80,
            "name": "äĺđĺâî"
        }],
        "services": [{
            "mid": "test",
            "host": "http://localhost:8516",
            "databases": [{
                "mid": "test",
                "base": "test",
                "password": "*****"
            }],
            "service": [10, 11, 12],
            "config": {}
        }, {
            "mid": "test",
            "host": "http://localhost:8517",
            "databases": [{
                "mid": "test",
                "base": "test",
                "user": "test",
                "password": "*******"
            }],
            "service": [1, 2, 3, 4, 5, 6, 7],
            "config": {}
        }, {
            "mid": "test",
            "host": "http://localhost:8518",
            "databases": [{
                "mid": "test",
                "base": "test",
                "user": "test",
                "password": "********"
            }],
            "service": [500]
        }]
    }]

};
console.log(ourData);
readJSON(JSON.parse(JSON.stringify(ourData)));
document.addEventListener('DOMContentLoaded', function () {
    setHeaders(JSON.parse(JSON.stringify(ourData)));
});

function readJSON(data) {

    for (obj in data) {

    }
}

function setHeaders(data) {
    let logo = document.getElementById('nav-tab')
    for (header in data) {

        logo.innerHTML += '<a class="nav-item nav-link" id="' + header + '-tab" data-toggle="tab" href="#' + header + '-profile" role="tab" aria-controls="nav-home" aria-selected="true">' + header[0].toUpperCase() + header.substring(1) + '</a>'
    }
}

$('#pills-tab a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show')
});

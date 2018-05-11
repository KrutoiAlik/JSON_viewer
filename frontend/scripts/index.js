"use strict";

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
let data = JSON.parse(JSON.stringify(ourData));
console.log(ourData);
document.addEventListener('DOMContentLoaded', function () {
    setHeaders(data);
    readJSON(data);
});

function readJSON(data) {

    for (let obj in data) {
        let size = Object.keys(data[obj]).length;
        let obj_tab = document.getElementById(obj + "-profile");
        console.log(obj + " " + data[obj]);
        if (size !== 1) {
            for (let field in data[obj]) {

            }
        }
    }
}

function setHeaders(data) {
    let logo = document.getElementById('nav-tab');
    for (let header in data) {
        logo.innerHTML += '<li class="nav-item">' +
            '<a class="nav-link" id="' + header + '-tab" data-toggle="tab" href="#' + header + '-profile" role="tab" aria-controls="nav-home" aria-selected="true">' + header[0].toUpperCase() + header.substring(1) + '</a></li>'
    }
}

function createTable(header, data) {
    let obj = document.getElementById(header + '-jumbotron');

    obj.innerHTML += '<thead><tr>';
    for (let element in data) {
        obj.innerHTML += '<th scope="col">' + element + '</th>';
    }
    obj.innerHTML += '</tr></thead>';

    obj.innerHTML += '<tbody><tr>';
    for (let element in data) {
        if (element === 'config') {
            obj.innerHTML += '<td scope="col"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#config-model">Config</button></td>';
            continue;
        }
        obj.innerHTML += '<td scope="col">' + data[element] + '</td>';
    }
    obj.innerHTML += '</tr></tbody>';
}

function createForm(header, data) {
    let obj = document.getElementById(header + '-container');

    obj.innerHTML += '<div class="form-group">';
    for (let field in data) {
        let id = header + '-' + field;
        obj.innerHTML += '<label for=' + id + '>' + field + '</label>';
        obj.innerHTML += '<input type="text" class="form-control" id=' + id + '>';
    }
    obj.innerHTML += '</div>';
    obj.innerHTML += '<button type="submit" class="btn btn-primary">Submit</button>';
}



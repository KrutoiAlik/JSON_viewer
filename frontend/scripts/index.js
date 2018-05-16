"use strict";

let ourData = {
    "version": 1,
    "databases": [{
        "mid": "test",
        "host": "localhost:1111",
        "type": "test",
        "version": "10",
        "config": {
            "user": "test1",
            "password": "pas22s",
            "charset": "UTF8",
            "timeout": 60
        }
    }, {
        "mid": "test",
        "host": "localhost:2222",
        "type": "test",
        "version": "2018",
        "config": {
            "user": "test2",
            "password": "pass",
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
            "password": "pass"
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
            "password": "pass"
        },
            {
                "mid": "test",
                "base": "test",
                "user": "test",
                "password": "pass",
                "nocreate": 1
            }
        ],
        "config": {
            "ftp": {
                "host": "ftp.test.ru",
                "login": "test",
                "password": "pass",
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
                    "password": "pass"
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
                    "password": "pass"
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
                "password": "pass"
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
                "password": "pass"
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
                "password": "pass"
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
        if (obj === 'databases') {
            createTable(obj, data[obj]);
        } else {
            createForm(obj, data[obj]);
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

function createConfig(user, password, charset, timeout) {
    let config = document.getElementById('config-form');
    config.innerHTML = '<tbody>' +
        '<tr>' +
        '<td><p>User<input class="form-control input-sm" type="text" value="' + user + '"/></p></td>' +
        '</tr>' +
        '<tr>' +
        '<td><p>Password<input class="form-control input-sm" type="password" value="' + password + '"/></p></td>' +
        '</tr>' +
        '<tr>' +
        '<td><p>Charset<input class="form-control input-sm" type="text" value="' + charset + '"/></p></td>' +
        '</tr>' +
        '<tr>' +
        '<td><p>Timeout<input class="form-control input-sm" type="number" value="' + timeout + '"/></p></td>' +
        '</tr>';
}

function createTable(header, data) {
    let head = header + '-profile-jumbotron';
    console.log(head);
    let obj = document.getElementById(head);
    console.log(obj);
    let html = '<table class="table table-bordered" style="width: fit-content" id="database-profile-database"><thead><tr>';
    for (let o in data[0]) {
        html += '<th scope="col">' + o + '</th>';
    }
    html += '</tr></thead>';

    html += '<tbody><tr>';
    for (let element in data) {
        for (let o in data[element]) {
            if (o === 'config') {
                html += addConfigButton(data[element][o]);
                continue;
            }
            html += '<td scope="col">' + data[element][o] + '</td>';
        }
        html += '</tr>';
    }
    html += '</tbody></table>';
    console.log(obj.innerHTML);
    obj.innerHTML += html;
}

function createForm(header, data) {
    let obj = document.getElementById(header + '-profile-container');
    let html = '<form><div class="form-group">';
    if (Object.keys(data).length > 0) {
        for (let field in data) {
            if (field === 'config') {
                html += '<br/>' + addConfigButton(data[field]);
            } else if (field === 'databases') {
                createTable(field + '-' + header, data[field]);
            } else if (Object.keys(data[field]).length > 1) {
                createForm(field + '-field', data);
            } else {
                let id = header + '-' + field;
                html += '<label for=' + id + '>' + field + '</label>';
                html += '<input type="text" class="form-control" id=' + id + ' value=' + data[field] + '>';
            }
        }
    } else {
        html += '<label for=' + header + '>' + header + '</label>';
        html += '<input type="number" class="form-control" id=' + header + ' value=' + data + '>';
    }
    html += '</div><button type="button" class="btn btn-primary">Edit</button><br/></form>';
    obj.innerHTML += html;
}

function addConfigButton(data) {
    let vars =
        "\'" + data.user + "\', " +
        "\'" + data.password + "\', " +
        "\'" + data.charset + "\', " +
        "\'" + data.timeout + "\'";
    return '<td scope="col"><button ' +
        'type="button" class="btn btn-primary" ' +
        'data-toggle="modal" data-target="#config-model" ' +
        'onclick="createConfig(' + vars + ');">Config</button></td>';

}



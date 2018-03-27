let level = 10;

let req = new XMLHttpRequest();
req.open('GET', 'http://localhost:8080/json/file?fileName=file');

req.onload = function () {

    let container = document.getElementsByClassName('container');
    let div = document.createElement('div');
    div.classList.add('row');

    let ourData = req.responseText;
    readJSON(div, JSON.parse(ourData));

    container[1].insertAdjacentElement('beforeend', div);

};

req.send();

function createInputWithType(divKey, type, data) {
    divKey.innerHTML +=
        '<input style="width: 100%; float: left" type=' + type + ' value="'
        + data + '" disabled/>';
}

function readJSON(div, data) {
    level--;
    for (i in data) {
        let divKey = document.createElement('div');
        divKey.classList.add('portfolio-item');
        divKey.id = i;
        divKey.innerHTML = '<h' + level + '>' + i[0].toUpperCase() + i.substring(1, i.length) + '</h' + level + '>';

        if (typeof data[i] !== 'object') {
            if (i === 'version') {
                createInputWithType(divKey, 'number', data[i]);
            } else if (i === 'password'){
                createInputWithType(divKey, 'password', data[i]);
            } else if(i === 'host'){
                createInputWithType(divKey, 'url', data[i]);
            } else {
                createInputWithType(divKey, 'text', data[i]);
            }
        } else {
            divKey.innerHTML += '<table><tr style="padding: 5px">';
            readJSON(divKey, data[i]);
            divKey.innerHTML += '</tr></table>';
            level++;
        }
        div.insertAdjacentElement('beforeend', divKey);
    }
}

function viewVersion(version) {

}

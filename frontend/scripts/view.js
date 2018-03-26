let req = new XMLHttpRequest();
req.open('GET', 'http://localhost:8080/json/file?fileName=file');
req.onload = function () {
    let ourData = req.responseText;
    readJSON(JSON.parse(ourData));
};

req.send();

function readJSON(data) {
    for (let i in data) {
        document.body.appendChild(document.createElement('br'));
        console.log(typeof data[i]);
        let value = document.createElement('p');
        value.innerHTML = i + ' ' + ((typeof(data[i]) !== 'object')
            ? '<input type="text" value=' + data[i] + ' disabled/>' : '') + '<br/>';
        if (typeof data[i] === 'object'){
            document.body.appendChild(value);
            readJSON(data[i]);
        } else {
            let text = document.createElement('text');
            text.innerHTML = i + ': ';
            document.body.appendChild(text);
            console.log('type of ' + typeof data[i]);
            let input = document.createElement('input');
            input.type = 'text';
            input.value = data[i];
            input.disabled = true;
            input.afterprint = '<br/>';

            console.log('value ' + value);
            document.body.appendChild(input);
            document.body.appendChild(document.createElement('br'));

        }
    }
}
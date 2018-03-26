let req = new XMLHttpRequest();
req.open('GET', 'http://localhost:8080/json/file?fileName=file');

req.onload = function () {

    let form = document.createElement('form');
    form.onscroll = true;

    let ourData = req.responseText;
    readJSON(form, JSON.parse(ourData));

    let div = document.createElement('div');
    div.insertAdjacentElement('beforeend', form);
    document.getElementById('content').insertAdjacentElement('afterend', div);
};

req.send();

function readJSON(form, data) {

    for (let head in data) {

        let h4 = document.createElement('h4');
        h4.innerHTML = head + ': ';

        form.insertAdjacentElement('beforeend', h4);

        if (typeof data[head] === 'object') {
            readJSON(form, data[head]);
        } else {

            let ifValue;
            if (typeof data[head] !== 'object') {
                ifValue = document.createElement('input');
                ifValue.classList.add('input-text');
                ifValue.type = 'text';
                ifValue.value = data[head];
                ifValue.disabled = true;
            } else {
                ifValue = '';
            }

            if (ifValue) {
                form.insertAdjacentElement('beforeend', ifValue);
            }
        }
    }
}

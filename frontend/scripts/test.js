
if (false) {
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


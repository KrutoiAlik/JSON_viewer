let req = new XMLHttpRequest();
req.open('GET', 'http://localhost:8080/json/file?fileName=file');

req.onload = function () {
    let ourData = req.responseText;
    $.getJSON(JSON.parse(ourData), function () {

    });
};

function readJSON(data) {
    for (firstID in data) {

    }
}

document.getElementById('versionButton').addEventListener('click', function () {

    document.getElementById('version').disabled = false;
    document.getElementById('versionButton').classList.add('hide-me');

    let versionSave = document.getElementById('versionSave');
    if (versionSave) {
        versionSave.classList.remove('hide-me');
    } else {
        versionSave = document.createElement('button');
        versionSave.id = 'versionSave';
        versionSave.type = 'button';
        versionSave.innerHTML = 'Save';
        document.getElementById('version-row').insertAdjacentElement(
            'beforeend', versionSave);

        document.getElementById('versionSave').addEventListener('click',
            function () {
                document.getElementById('version').disabled = true;
                versionSave.classList.add('hide-me');
                document.getElementById('versionButton').classList.remove(
                    'hide-me');
            });
    }
});
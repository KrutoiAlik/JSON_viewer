let req = new XMLHttpRequest();
req.open('GET', 'http://localhost:8080/json/file?fileName=file');
req.onload = function () {
    let ourData = JSON.parse(req.responseText);
    console.log(ourData);
    renderHTML(ourData);
};

req.send();

function renderHTML(data) {
    document.getElementById('view')
    .insertAdjacentHTML('beforeend', data);
}
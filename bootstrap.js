function loadBootstrap() {
    fetch('bootstrap.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('bootstrap-container').innerHTML = data;
        });
}

document.addEventListener('DOMContentLoaded', loadBootstrap);
function loadBootstrap() {
    fetch('bootstrap.html')
        .then(response => response.text())
        .then(data => {
            document.write(data);
        });
}

document.addEventListener('DOMContentLoaded', loadBootstrap);

function loadData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../controllers/ajax_controller.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("response-container").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
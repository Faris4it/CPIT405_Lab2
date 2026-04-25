const ACCESS_KEY = "Do8AQlT80hXSXeiXYD4caWFJUHsvB-_qiGg_DCn9640";

function getQuery() {
  return document.getElementById("query").value || "nature";
}

function displayImages(images) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  images.forEach(img => {
    const image = document.createElement("img");
    image.src = img.urls.small;
    container.appendChild(image);
  });
}
function fetchXHR() {
  const query = getQuery();
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      displayImages(data.results);
    } else {
      console.error("XHR Error:", xhr.status);
    }
  };

  xhr.send();
}
function fetchWithPromises() {
  const query = getQuery();
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayImages(data.results))
    .catch(err => console.error("Promise Fetch Error:", err));
}
async function fetchAsync() {
  const query = getQuery();
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayImages(data.results);
  } catch (err) {
    console.error("Async/Await Error:", err);
  }
}

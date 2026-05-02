const ACCESS_KEY = "Do8AQlT80hXSXeiXYD4caWFJUHsvB-_qiGg_DCn9640";
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const imageGrid = document.getElementById("image-grid");
const loader = document.getElementById("loader");
const errorMessage = document.getElementById("error-message");

async function fetchImages(query) {
    // 1. Set loading state
    imageGrid.innerHTML = "";
    errorMessage.classList.add("hidden");
    loader.classList.remove("hidden");

    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}&per_page=12`;

    try {
        // 2. Fetch data
        const response = await fetch(url);
        
        // 3. Handle HTTP errors
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // 4. Handle empty results
        if (data.results.length === 0) {
            throw new Error("No images found! Try a weirder search term.");
        }

        // 5. Display the data
        displayImages(data.results);

    } catch (error) {
        // Handle network errors or custom errors
        errorMessage.textContent = `Oops! ${error.message}`;
        errorMessage.classList.remove("hidden");
    } finally {
        // Remove loading state regardless of success or failure
        loader.classList.add("hidden");
    }
}

function displayImages(images) {
    images.forEach(image => {
        const card = document.createElement("div");
        card.classList.add("image-card");

        const imgElement = document.createElement("img");
        imgElement.src = image.urls.regular;
        imgElement.alt = image.alt_description || "An Unsplash image";

        card.appendChild(imgElement);
        imageGrid.appendChild(card);
    });
}

// Event Listeners
searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) fetchImages(query);
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const query = searchInput.value.trim();
        if (query) fetchImages(query);
    }
});

// Load default images on initialization
fetchImages(searchInput.value);
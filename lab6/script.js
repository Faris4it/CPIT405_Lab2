console.log("Script is successfully loaded!");
let likes = 0;
let dislikes = 0;
let comments = [];

const setCookie = (name, value) => {
    document.cookie = `${name}=${JSON.stringify(value)}; path=/; max-age=31536000`;
};

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return JSON.parse(parts.pop().split(';').shift());
    return null;
};

function updateUI() {
    document.getElementById('likeCount').textContent = likes;
    document.getElementById('dislikeCount').textContent = dislikes;
    document.getElementById('commentList').innerHTML = comments.map(c => `<p>• ${c}</p>`).join('');
}

// Load data
window.onload = () => {
    likes = getCookie('likes') || 0;
    dislikes = getCookie('dislikes') || 0;
    comments = getCookie('comments') || [];
    updateUI();
};

// Events
document.getElementById('likeBtn').onclick = () => {
    likes++;
    setCookie('likes', likes);
    updateUI();
};

document.getElementById('dislikeBtn').onclick = () => {
    dislikes++;
    setCookie('dislikes', dislikes);
    updateUI();
};

document.getElementById('submitBtn').onclick = () => {
    const input = document.getElementById('commentInput');
    if (input.value.trim()) {
        comments.push(input.value.trim());
        setCookie('comments', comments);
        input.value = '';
        updateUI();
    }
};

document.getElementById('resetBtn').onclick = () => {
    likes = 0;
    dislikes = 0;
    comments = [];
    const expiry = "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "likes" + expiry;
    document.cookie = "dislikes" + expiry;
    document.cookie = "comments" + expiry;
    updateUI();
};
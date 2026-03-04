// Sample data (usually provided in the starter code)
const players = [
    { name: "LeBron James", team: "Lakers", points: 25.7, rebounds: 7.3, assists: 8.3 },
    { name: "Stephen Curry", team: "Warriors", points: 26.4, rebounds: 4.5, assists: 5.1 },
    { name: "Nikola Jokic", team: "Nuggets", points: 26.1, rebounds: 12.4, assists: 9.0 },
    { name: "Kevin Durant", team: "Suns", points: 27.1, rebounds: 6.6, assists: 5.0 }
];

// 1. Select DOM Elements
const playerRows = document.getElementById('player-rows');
const teamFilter = document.getElementById('team-filter');
const searchInput = document.getElementById('search');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// 2. Populate Table Function
function displayPlayers(filteredPlayers) {
    playerRows.innerHTML = ''; // Clear current rows
    filteredPlayers.forEach(player => {
        const row = `
            <tr>
                <td>${player.name}</td>
                <td>${player.team}</td>
                <td>${player.points}</td>
                <td>${player.rebounds}</td>
                <td>${player.assists}</td>
            </tr>
        `;
        playerRows.innerHTML += row;
    });
}

// 3. Populate Team Filter Dropdown
function setupTeamFilter() {
    const teams = ['all', ...new Set(players.map(p => p.team))];
    teamFilter.innerHTML = teams.map(team => 
        `<option value="${team}">${team.charAt(0).toUpperCase() + team.slice(1)}</option>`
    ).join('');
}

// 4. Combined Search and Filter Logic
function updateDashboard() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedTeam = teamFilter.value;

    const filtered = players.filter(player => {
        const matchesSearch = player.name.toLowerCase().includes(searchTerm);
        const matchesTeam = selectedTeam === 'all' || player.team === selectedTeam;
        return matchesSearch && matchesTeam;
    });

    displayPlayers(filtered);
}

// 5. Event Listeners
searchInput.addEventListener('input', updateDashboard);
teamFilter.addEventListener('change', updateDashboard);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Initial Setup
setupTeamFilter();
displayPlayers(players);
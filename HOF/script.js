document.addEventListener('DOMContentLoaded', () => {
  const songContainer = document.querySelector('.song-container');
  const genreSelect = document.getElementById('genre-select');

  // Function to create and display song cards
  function displaySongs(songs) {
    const songCardsHTML = songs.map(song => {
      return `
        <div class="song-card">
            
          <div class="song-card-content">
            <h3>${song.Song_name}</h3>
            <p>Artist: ${song.artist}</p>
            <p class="duration">${song.duration} mins</p>
          </div>
        </div>
      `;
    }).join('');
    songContainer.innerHTML = songCardsHTML;
  }

  // Display all songs initially
  displaySongs(Songs);

  // Event listener for genre selection
  genreSelect.addEventListener('change', (e) => {
    const selectedGenre = e.target.value;

    // Filter songs by selected genre
    const filteredSongs = selectedGenre === 'All'
      ? Songs
      : Songs.filter(song => song.genre === selectedGenre);

    // Display filtered songs
    displaySongs(filteredSongs);
  });
});

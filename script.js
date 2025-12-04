//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}
// create a function to create and padStart episode code (S01 E10)
function makeEpisodeCode(season, episode) {
  const seasonStr = season.toString().padStart(2, "0");
  const episodeStr = episode.toString().padStart(2, "0");
  return `S${seasonStr}E${episodeStr}`;
}
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = ""; // clear previous contents so dont keep adding to it when function is called multiple times

  // create a div container element to store episodes
  const episodeContainer = document.createElement("div");
  episodeContainer.className = "episode-container";

  // loop through each episode in episodeList
  for (const episode of episodeList) {
    // create a div for each episode
    const episodeElem = document.createElement("div");
    episodeElem.className = "episode";

    // create a divs for titles of episodes and episode code (S)
    const titleElem = document.createElement("h3");
    const episodeCode = makeEpisodeCode(episode.season, episode.number);
    titleElem.textContent = `${episodeCode} - ${episode.name}`;

    const episodeImg = document.createElement("img");
      episodeImg.src = episode.image.medium;

    // append divs to containers for each element
    episodeElem.appendChild(titleElem);
    episodeElem.appendChild(episodeImg);
    episodeContainer.appendChild(episodeElem);
  }
  // append the container with episodes to the rootElem to display on the page
  rootElem.appendChild(episodeContainer);
}

window.onload = setup;

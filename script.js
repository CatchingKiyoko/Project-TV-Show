//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = ""; // clear previous contents so dont keep adding to it when function is called multiple times

    // create a div container element to store episodes
    const episodeContainer = document.createElement("div");
    episodeContainer.className = "episode-container";

    // loop through each episode in episodeList
    for (const episode of episodeList){
      // create a div for each episode
      const episodeElem = document.createElement("div");
      episodeElem.className = "episode"; 

      // append episode div to the container
      episodeContainer.appendChild(episodeElem);
    }
// append the container with episodes to the rootElem to display on the page
rootElem.appendChild(episodeContainer);
}

window.onload = setup;

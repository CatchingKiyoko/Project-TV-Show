//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = ""; // clear previous contents so dont keep adding to it when function is called multiple times

    // create a div container element to store episodes
    episodeContainer = document.createElement("div");
    episodeContainer.className = "episode-container";

    // loop through each episode in episodeList
    for (const episode of episodeList){
      
    }

  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;

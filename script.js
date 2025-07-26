//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = ""; // clear previous contents so dont keep adding to it when function is called multiple times

  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;

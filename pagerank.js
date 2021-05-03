function pageRank(updatePage) {
  const DAMPING_FACTOR = 0.85;
  const ITERATIONS = 20;
  const ranking = [];
  for (const fileName in files) {
    const fileData = {name: fileName, rank: 1, outboundLinks: []};
    const linkTextList = files[fileName].split("<a href=");
    let firstLink = true;
    for (const linkText of linkTextList) {
      if (firstLink) {
        firstLink = false;
      } else {
        fileData.outboundLinks.push(linkText.substr(1).split(/'|"/)[0]);
      }
    }
    ranking.push(fileData);
  }
  let output = "";
  for (let i = 0; i < ITERATIONS; i++) {
    output += `<h2>Iteration ${i}</h2>`;
    for (const fileData of ranking) {
      output += `<h3>${fileData.name}</h3>`;
      let newRank = 1 - DAMPING_FACTOR;
      output += `Starting rank: ${newRank}<br>`;
      for (const otherFile of ranking) {
        if (otherFile.name != fileData.name) {
          for (const linkHref of otherFile.outboundLinks) { // iterates through all in case there are multiple links to this file
            if (linkHref == fileData.name || linkHref == `./${fileData.name}`) {
              const toAdd = DAMPING_FACTOR * otherFile.rank / otherFile.outboundLinks.length;
              newRank += toAdd;
              output += `Linked from: ${otherFile.name}, rank: ${otherFile.rank}, outbound: ${otherFile.outboundLinks.length}<br>`;
              output += `Adding ${DAMPING_FACTOR} * ${otherFile.rank} / ${otherFile.outboundLinks.length} = ${toAdd}<br>`;
              output += `New rank: ${newRank}<br>`;
            }
          }
        }
      }
      fileData.rank = newRank;
    }
  }
  if (updatePage) document.getElementById("pagerank-working").innerHTML = output;
  return ranking;
}
/* checks that ranking is valid by checking sum of ranks is the same at the start and end
let totalRank = 0
for (const fileData of ranking) {
  totalRank += fileData.rank 
}
console.log(totalRank, ranking.length);
*/

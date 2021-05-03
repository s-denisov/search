function findModifiedFile(fileName) {
  return files[fileName].replace(/<.*?>/g, "");
}

function simplifyString(str) {
  return str.toLowerCase().replace(/\W/g, " "); // removes non alphanumeric characters
}

function indexesOf(text, search) {
  // https://stackoverflow.com/a/36631773 
  console.log(text, simplifyString(text))
  let i = simplifyString(text).indexOf(simplifyString(search));
  const results = [];
  while (i != -1) {
    results.push(i);
    i = simplifyString(text).indexOf(simplifyString(search), i + 1);
  }
  return results;
}

function submitSearch(event) {
  event.preventDefault();
  const searchText = document.getElementById("search-text").value;
  if (searchText == "") return;
  const ranking = pageRank(false);
  const results = [];
  for (const fileName in files) {
    const indexes = indexesOf(findModifiedFile(fileName), searchText);
    let result = "";
    if (indexes.length != 0) result += `<li><a href=${fileName}>${fileName}</a></li>`;
    for (startingIndex of indexes) {
        let sample = "";
        for (direction of [1, -1]) {
          let i = Math.min(0, direction);
          let keywordToMark = direction == 1;
          while (true) {
            if (startingIndex + i >= findModifiedFile(fileName).length || startingIndex + i < 0) break;
            const char = findModifiedFile(fileName)[startingIndex + i]; 
            if (keywordToMark && !simplifyString(searchText).includes(simplifyString(sample + char))) {
              sample = `<b>${sample}</b>`;
              keywordToMark = false;
            }
            if (direction == 1) sample += char; else sample = char + sample;
            if (Math.abs(i) >= 20 && char == " ") {
              const elipsis = "<i>...</i>";
              if (direction == 1) sample += elipsis; else sample = elipsis + sample;
              break;
            }
            i += direction;
          }
        }
        result += sample + "<br>";
    }
    const fileRank = ranking.find(file => file.name == fileName).rank;
    const sortingOrder = fileRank * indexes.length;
    if (indexes.length != 0) result += `(rank * matches = ${fileRank} * ${indexes.length} = ${sortingOrder})`;
    results.push({ result, matches: sortingOrder });
  }
  results.sort((a, b) => b.matches - a.matches);
  document.getElementById("search-results").innerHTML = results.map(x => x.result).join("");
}

document.getElementById("search-form").addEventListener("submit", submitSearch)

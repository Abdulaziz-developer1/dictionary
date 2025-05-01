let words = [
  { word: "hello", translation: "salom" },
  { word: "world", translation: "dunyo" },
  { word: "help", translation: "yordam" },
  { word: "hero", translation: "qahramon" },
  { word: "house", translation: "uy" },
  { word: "heart", translation: "yurak" },
  { word: "hope", translation: "umid" },
  { word: "hurry", translation: "shoshilish" },
  { word: "hard", translation: "qiyin" },
  { word: "happy", translation: "baxtli" },
  { word: "habit", translation: "odat" },
  { word: "history", translation: "tarix" },
  { word: "high", translation: "baland" },
  { word: "hold", translation: "ushlamoq" },
  { word: "home", translation: "uy" }
];

const wordList = document.getElementById('wordList');
const inp = document.getElementById('inp');

function updateList() {
  wordList.innerHTML = ""; // clear the list before adding new ones

  let search = inp.value.toLowerCase();

  let filteredWords = words.filter(element => 
    element.word.toLowerCase().includes(search)
  );

  filteredWords.forEach((element) => {
    const newListItem = document.createElement("li");
    newListItem.innerText = element.word;
    newListItem.classList.add('new');

    const translation = document.createElement("p");
    translation.innerText = element.translation;
    translation.style.display = "none";
    translation.style.fontSize = "0.7em";
    translation.style.color = "#555";

    newListItem.appendChild(translation);

    newListItem.addEventListener('click', () => {
      if (translation.style.display === "none") {
        translation.style.display = "block";
      } else {
        translation.style.display = "none";
      }
    });

    wordList.appendChild(newListItem);
  });
}

// update the list as the user types
inp.addEventListener('input', updateList);

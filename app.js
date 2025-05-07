let words = words1.sort((a, b) => a.word.localeCompare(b.word));

const wordList = document.getElementById("wordList");
const inp = document.getElementById("inp");

if (inp.value === "") {
  words.forEach((element) => {
    const newListItem = document.createElement("li");
    newListItem.innerText = element.word;
    newListItem.classList.add("new");

    const translation = document.createElement("p");
    translation.innerText = element.translation;
    translation.style.display = "none";
    translation.style.fontSize = "0.7em";
    translation.style.color = "#555";

    newListItem.appendChild(translation);

    newListItem.addEventListener("click", () => {
      if (translation.style.display === "none") {
        translation.style.display = "block";
      } else {
        translation.style.display = "none";
      }
    });

    wordList.appendChild(newListItem);
  });
}
function updateList() {
  wordList.innerHTML = ""; // clear the list before adding new ones

  let search = inp.value.toLowerCase();

  let filteredWords = words.filter((element) =>
    element.word.toLowerCase().includes(search)
  );

  filteredWords.forEach((element) => {
    const newListItem = document.createElement("li");
    newListItem.innerText = element.word;
    newListItem.classList.add("new");

    const translation = document.createElement("p");
    translation.innerText = element.translation;
    translation.style.display = "none";
    translation.style.fontSize = "0.7em";
    translation.style.color = "#555";

    newListItem.appendChild(translation);

    newListItem.addEventListener("click", () => {
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
inp.addEventListener("input", updateList);

let btn = document.querySelector(".btn");
let modal = document.querySelector(".modal");

// Show the modal when the button is clicked
btn.addEventListener("click", function () {
  modal.classList.toggle("modal-active");
});

let checkbox = document.getElementById("dark");

if (checkbox.checked || localStorage.getItem("dark") === "true") {
  document.querySelector(".bg").classList.add("dark");
  checkbox.checked = true; // Ensure the checkbox reflects the current state
}

// Add an event listener to toggle dark mode and save the state in localStorage
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.querySelector(".bg").classList.add("dark");
    localStorage.setItem("dark", "true");
  } else {
    document.querySelector(".bg").classList.remove("dark");
    localStorage.setItem("dark", "false");
  }
});

if (localStorage.getItem("dark") === "true") {
  btn.style.color = "#fff";
  inp.style.color = "#fff";
} else if (localStorage.getItem("dark") === "false") {
  btn.style.color = "#000";
  inp.style.color = "#000";
}


// Apply settings immediately on page load
document.addEventListener("DOMContentLoaded", () => {
  // Apply dark mode setting
  if (localStorage.getItem("dark") === "true") {
    document.querySelector(".bg").classList.add("dark");
    checkbox.checked = true; // Ensure the checkbox reflects the current state
    btn.style.color = "#fff";
  } else {
    document.querySelector(".bg").classList.remove("dark");
    checkbox.checked = false;
    btn.style.color = "#000";
  }

});

// Update the reloadOnSettingsChange function
function reloadOnSettingsChange() {
  const settingsInputs = document.querySelectorAll("#dark, #font");

  settingsInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.id === "dark") {
        // Save dark mode state
        localStorage.setItem("dark", input.checked ? "true" : "false");
      } else if (input.id === "font") {
        // Save font size
        localStorage.setItem("font", input.value);
      }
      location.reload(); // Reload the page after saving changes
    });
  });
}

// Call the function to enable reloading on settings change
reloadOnSettingsChange();


console.log(`${words.length}ta so'z mavjud!`);

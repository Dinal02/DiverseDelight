const jokeContainer = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  // jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      console.log(item.joke);
      jokeContainer.textContent = `${item.joke}`;
      // jokeContainer.classList.add("fade");
    });
};

jokeBtn.addEventListener("click", getJoke);
getJoke();

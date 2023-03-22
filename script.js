async function fetchJoke() {
  try {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
    const data = await response.json();
    const joke = data.joke;
    document.getElementById("jokes-here").innerHTML = joke;

  } catch (error) {
    console.error(error);
  }
}

window.onload = function() {
  fetchJoke();
}


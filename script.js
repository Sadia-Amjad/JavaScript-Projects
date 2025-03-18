const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
// using joke api
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt&type=single";
// using async and await
const getJoke = async () => {
    try {  //try 
        jokeContainer.classList.remove("fade"); // Remove fade effect before updating joke

        const response = await fetch(url);
        const joke = await response.text();

        jokeContainer.textContent = joke; // Display the joke
        
        setTimeout(() => {
            jokeContainer.classList.add("fade"); // Apply fade effect after joke appears
        }, 500); // Add a delay to ensure smooth transition
    } catch (error) {   //shows error message
        console.error("Error fetching joke:", error);
        jokeContainer.textContent = "Oops! Something went wrong. 😢";
    }
};

btn.addEventListener("click", getJoke);
getJoke(); // Load a joke on page load




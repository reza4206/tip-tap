const animals = [
    { name: "Lion", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5mY_cvo6-XP-Fivsf9qUh_gIIDBZunOhq2Q&s" },
    { name: "Elephant", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSamvTpkKyot8rCC2ZtWxYyokyQfr-1o9Pqnw&s" },
    { name: "Tiger", image: "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg" },
    { name: "Zebra", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJAFJ2cCC3gFAubQ8mFa77Oj8KFexvUJkM0A&s" },
    { name: "Deer", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/A_chital_stag_1.JPG/800px-A_chital_stag_1.JPG" },
    { name: "Monkey", image: "https://shop.wwf.ca/cdn/shop/files/Macaque.jpg?v=1694022235&width=2048" },
    { name: "Panda", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/640px-Grosser_Panda.JPG" },
    { name: "Kangaroo", image: "https://c02.purpledshub.com/uploads/sites/62/2024/07/kangaroo-facts.jpg?w=1029&webp=1" },
    { name: "Penguin", image: "https://cdn.britannica.com/77/81277-050-2A6A35B2/Adelie-penguin.jpg" },
    { name: "Cow", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmTO4znkQ_lXg6ZaZm6CqCkIKeV1EzLFGNIQ&s" },
    { name: "Cat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4_cfe_ZM15Cs0umK3rwc2S-Ema9moqKvqg&s" },
    { name: "Crocodile", image: "https://cdn.britannica.com/84/198884-050-A37B8971/crocodile-Nile-swath-one-sub-Saharan-Africa-Madagascar.jpg" },
    { name: "Dolphin", image: "https://news.harvard.edu/wp-content/uploads/2024/10/2500dolphin.jpg?resize=1680%2C945" },
    { name: "Bear", image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg" },
    { name: "Horse", image: "https://cdn.britannica.com/96/1296-050-4A65097D/gelding-bay-coat.jpg" },
    { name: "Butterfly", image: "https://i.natgeofe.com/k/9acd2bad-fb0e-43a8-935d-ec0aefc60c2f/monarch-butterfly-grass_3x2.jpg" },
    { name: "Fish", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0oZ6coSR0RsZIjNLjTxt55WyNsPmy4Tl2Sg&s" },
    { name: "Flower", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdrxN5R0-xG-QLaTtFRijEke_BVkqsVGhhGg&s" },
    { name: "Bird", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/House_sparrow_male_in_Prospect_Park_%2853532%29.jpg/1200px-House_sparrow_male_in_Prospect_Park_%2853532%29.jpg" },

    { name: "Dog", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg" }
];

const buttons = document.querySelectorAll(".color-btn");
const startBtn = document.getElementById("startBtn");
const exitBtn = document.getElementById("exitBtn");
const gameTitle = document.getElementById("gameTitle");
const gameArea = document.getElementById("gameArea");

startBtn.addEventListener("click", () => {
    gameArea.classList.remove("hidden");
    startBtn.classList.add("hidden");
    gameTitle.classList.add("hidden");
    exitBtn.classList.remove("hidden");
});

exitBtn.addEventListener("click", () => {
    gameArea.classList.add("hidden");
    startBtn.classList.remove("hidden");
    gameTitle.classList.remove("hidden");
    exitBtn.classList.add("hidden");
    buttons.forEach(button => {
        button.style.backgroundImage = "";
        button.textContent = "";
    });
});

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
        button.style.backgroundImage = `url(${randomAnimal.image})`;
        button.textContent = randomAnimal.name;

        setTimeout(() => {
            button.style.backgroundImage = "";
            button.textContent = "";
        }, 5000);
    });
});

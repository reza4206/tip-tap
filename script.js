document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("startBtn");
    const exitBtn = document.getElementById("exitBtn");
    const gameArea = document.getElementById("gameArea");

    // ২০টি প্রাণীর তালিকা
    const animals = [
        { name: "সিংহ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5mY_cvo6-XP-Fivsf9qUh_gIIDBZunOhq2Q&s", sound: "lion.mp3" },
        { name: "হাতি", image: "https://cdn.britannica.com/02/152302-050-1A984FCB/African-savanna-elephant.jpg", sound: "elephant.mp3" },
        { name: "কুকুর", image: "https://image.petmd.com/files/styles/978x550/public/2024-06/hip-dysplasia-in-dogs.jpg", sound: "dog.mp3" },
        { name: "বিড়াল", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg", sound: "cat.mp3" },
        { name: "গরু", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmTO4znkQ_lXg6ZaZm6CqCkIKeV1EzLFGNIQ&s", sound: "cow.mp3" },
        { name: "ভেড়া", image: "https://eu-images.contentstack.com/v3/assets/bltdd43779342bd9107/blt662268f193621fb4/6393064fcc9a6b25070803fb/sheep-animals-idalGettyImages0702F2-3518_0_0.jpg", sound: "sheep.mp3" },
        { name: "ঘোড়া", image: "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg", sound: "horse.mp3" },
        { name: "মুরগি", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNv3w5KIArhXNLzkeFOU-twPEAZfGNXQnBLw&s", sound: "chicken.mp3" },
        { name: "বাঁদর", image: "https://c.ndtvimg.com/2023-07/qrtpmldg_baby-monkey-generic_625x300_28_July_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=738", sound: "monkey.mp3" },
        { name: "হরিণ", image: "https://images.pexels.com/photos/34231/antler-antler-carrier-fallow-deer-hirsch.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", sound: "deer.mp3" },
        { name: "শিয়াল", image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm94fGVufDB8fDB8fHww", sound: "fox.mp3" },
        { name: "ভালুক", image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg", sound: "bear.mp3" },
        { name: "খরগোশ", image: "https://i.pinimg.com/736x/66/3e/c0/663ec0d76d5709f2b36a0d950fed70ce.jpg", sound: "rabbit.mp3" },
        { name: "উট", image: "https://cdn.britannica.com/96/152296-050-BC95629B/Arabian-dromedary-camel-calf.jpg", sound: "camel.mp3" },
        { name: "বাজপাখি", image: "https://i.natgeofe.com/n/28876467-3e34-450f-88d5-2668d6229e6b/NationalGeographic_2432616.jpg?w=1280&h=853", sound: "eagle.mp3" },
        { name: "কুমির", image: "https://cdn.britannica.com/84/198884-050-A37B8971/crocodile-Nile-swath-one-sub-Saharan-Africa-Madagascar.jpg", sound: "crocodile.mp3" },
        { name: "পান্ডা", image: "https://d1jyxxz9imt9yb.cloudfront.net/animal/283/meta_image/regular/panda_1.jpg", sound: "panda.mp3" },
        { name: "টিয়াপাখি", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oW7HpiTQof9LzgYaWVi5J9hlSw57Ii-Cww&s", sound: "parrot.mp3" },
        { name: "ডলফিন", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTWEOw0RR5V1fEP4YItNewzlXdPcAcPM7uTQ&s", sound: "dolphin.mp3" },
        { name: "পেঙ্গুইন", image: "https://cdn.britannica.com/77/81277-050-2A6A35B2/Adelie-penguin.jpg", sound: "penguin.mp3" }
    ];

    startBtn.addEventListener("click", function() {
        gameArea.classList.remove("hidden");
        startBtn.classList.add("hidden");
    });

    exitBtn.addEventListener("click", function() {
        window.close();  // গেম বন্ধ করার জন্য
    });

    document.querySelectorAll(".animal-btn").forEach((btn) => {
        btn.addEventListener("click", function() {
            // র‍্যান্ডমভাবে একটি প্রাণী নির্বাচন করা হবে
            const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

            // বাটনে ছবি এবং নাম দেখানো হবে
            btn.innerHTML = `
                <img src="${randomAnimal.image}" alt="${randomAnimal.name}">
                <p>${randomAnimal.name}</p>
            `;

            // সাউন্ড প্লে করা হবে
            const sound = new Audio(randomAnimal.sound);
            sound.play();

            // ৫ সেকেন্ড পর বাটন অটো রিসেট হবে
            setTimeout(() => {
                btn.innerHTML = "";  // বাটন খালি করা হবে
            }, 5000);
        });
    });
});

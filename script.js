/* =========================
   PASSWORD
========================= */

const WEBSITE_PASSWORD = "1234";

function checkPassword() {

    const password =
        document.getElementById("passwordInput").value;

    const error =
        document.getElementById("passwordError");

    if (password === WEBSITE_PASSWORD) {

        document
            .getElementById("passwordScreen")
            .classList.add("hidden");

        document
            .getElementById("mainWebsite")
            .classList.remove("hidden");

        error.innerText = "";

    } else {

        error.innerText =
            "❌ Wrong password. Try again.";

    }
}


/* =========================
   SLIDER
========================= */

let currentSlide = 0;

const profiles =
    document.querySelectorAll(".profile");

const dots =
    document.querySelectorAll(".dots span");


function showSlide(index) {

    if (index >= profiles.length) {
        currentSlide = 0;
    }

    else if (index < 0) {
        currentSlide = profiles.length - 1;
    }

    else {
        currentSlide = index;
    }


    profiles.forEach((profile) => {

        profile.classList.remove("active");

    });


    if (profiles[currentSlide]) {

        profiles[currentSlide]
            .classList.add("active");

    }


    dots.forEach((dot) => {

        dot.style.background = "#777";

    });


    if (dots[currentSlide]) {

        dots[currentSlide]
            .style.background = "#19c463";

    }
}


function nextSlide() {

    showSlide(currentSlide + 1);

}


function previousSlide() {

    showSlide(currentSlide - 1);

}


function goToSlide(index) {

    showSlide(index);

}


/* =========================
   AUTO SLIDER
========================= */

setInterval(() => {

    if (
        document
            .getElementById("mainWebsite")
            .classList
            .contains("hidden")
    ) {
        return;
    }

    nextSlide();

}, 5000);


/* =========================
   CHARACTER DATA
========================= */

const characters = {

    1: {

        name: "Fucchu",

        address: "Sibpuridham Jungle",

        phone: "9868980091",

        replies: [

            "Hello dood 😄",

            "I'm good, how are you?",

            "What are you doing right now? 😊",

            "Nice to hear from you ❤️"

        ]

    },


    2: {

        name: "Sani",

        address: "Kailali Jungle",

        phone: "9756770291",

        replies: [

            "Hii dood 😄",

            "I'm doing good, what about you?",

            "Aww, nice message 😊",

            "Tell me, what happened?"

        ]

    },


    3: {

        name: "Loofi",

        address: "Mohana River Side",

        phone: "9967890999",

        replies: [

            "Hello dood 👋",

            "I'm fineee 😄",

            "How have you been?",

            "That's nice to hear ❤️"

        ]

    },


    4: {

        name: "Mushu",

        address: "Sibpuri Jungle",

        phone: "9876547899",

        replies: [

            "Heyy dood 😄",

            "I'm good, how are you?",

            "Haha, tell me more 😂",

            "I'm listening 😊"

        ]

    }

};


/* =========================
   CHAT VARIABLES
========================= */

let selectedCharacter = null;

let replyCount = 0;


/* =========================
   OPEN CHAT
========================= */

function openChat(characterID) {

    selectedCharacter =
        characters[characterID];

    replyCount = 0;


    document
        .getElementById("chatWindow")
        .classList
        .remove("hidden");


    document
        .getElementById("chatName")
        .innerText =
        selectedCharacter.name;


    document
        .getElementById("chatMessages")
        .innerHTML = "";


    addReceivedMessage(
        "Heyy dood 👋"
    );

}


/* =========================
   CLOSE CHAT
========================= */

function closeChat() {

    document
        .getElementById("chatWindow")
        .classList
        .add("hidden");

}


/* =========================
   SEND MESSAGE
========================= */

function sendMessage() {

    const input =
        document.getElementById("messageInput");

    const message =
        input.value.trim();


    if (message === "") {
        return;
    }


    addSentMessage(message);


    input.value = "";


    setTimeout(() => {

        automaticReply(message);

    }, 800);

}


/* =========================
   ENTER KEY
========================= */

function handleEnter(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

}


/* =========================
   ADD SENT MESSAGE
========================= */

function addSentMessage(message) {

    const container =
        document.getElementById("chatMessages");


    const messageElement =
        document.createElement("div");


    messageElement.className =
        "message sent";


    messageElement.innerText =
        message;


    container.appendChild(
        messageElement
    );


    scrollChat();

}


/* =========================
   ADD RECEIVED MESSAGE
========================= */

function addReceivedMessage(message) {

    const container =
        document.getElementById("chatMessages");


    const messageElement =
        document.createElement("div");


    messageElement.className =
        "message received";


    messageElement.innerText =
        message;


    container.appendChild(
        messageElement
    );


    scrollChat();

}


/* =========================
   AUTOMATIC REPLY
========================= */

function automaticReply(userMessage) {

    if (!selectedCharacter) {
        return;
    }


    const lowerMessage =
        userMessage.toLowerCase();


    /* GREETING */

    if (
        lowerMessage.includes("hello") ||
        lowerMessage.includes("hi") ||
        lowerMessage.includes("hii") ||
        lowerMessage.includes("hey")
    ) {

        const greetingReplies = [

            `Hello dood 😄`,

            `Hii, how are you? 😊`,

            `Heyyy dood ❤️`

        ];


        addReceivedMessage(
            randomItem(greetingReplies)
        );


        replyCount++;

    }


    /* NORMAL MESSAGE */

    else {

        if (
            replyCount <
            selectedCharacter.replies.length
        ) {

            addReceivedMessage(
                selectedCharacter
                    .replies[replyCount]
            );

            replyCount++;

        }

    }


    /* PHONE NUMBER */

    if (replyCount >= 4) {

        setTimeout(() => {

            addReceivedMessage(
                `Call me on this number 📞 ${selectedCharacter.phone}`
            );

        }, 1000);

        replyCount = 0;

    }

}


/* =========================
   RANDOM REPLY
========================= */

function randomItem(array) {

    return array[
        Math.floor(
            Math.random() * array.length
        )
    ];

}


/* =========================
   CHAT SCROLL
========================= */

function scrollChat() {

    const container =
        document.getElementById("chatMessages");


    container.scrollTop =
        container.scrollHeight;

}


/* =========================
   INITIAL SLIDE
========================= */

showSlide(0);

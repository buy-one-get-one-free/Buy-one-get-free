
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #071a12, #102f20, #06140d);
    color: white;
    min-height: 100vh;
}


/* =========================
   PASSWORD SCREEN
========================= */

.password-screen {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.password-box {
    width: 100%;
    max-width: 380px;
    padding: 35px 25px;
    text-align: center;

    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;

    backdrop-filter: blur(15px);

    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

.password-box h1 {
    margin-bottom: 12px;
    font-size: 30px;
}

.password-box p {
    color: #cfcfcf;
    margin-bottom: 20px;
}

.password-box input {
    width: 100%;
    padding: 14px;

    border: none;
    outline: none;

    border-radius: 10px;

    background: rgba(255, 255, 255, 0.12);
    color: white;

    font-size: 16px;

    margin-bottom: 15px;
}

.password-box input::placeholder {
    color: #aaa;
}

.password-box button {
    width: 100%;
    padding: 14px;

    border: none;
    border-radius: 10px;

    background: #19c463;
    color: white;

    font-size: 16px;
    font-weight: bold;

    cursor: pointer;
}

.password-box button:hover {
    background: #12a951;
}

#passwordError {
    color: #ff5555;
    margin-top: 15px;
    margin-bottom: 0;
}


/* =========================
   MAIN WEBSITE
========================= */

.hidden {
    display: none !important;
}

#mainWebsite {
    min-height: 100vh;
    padding: 30px 15px;
}

header {
    text-align: center;
    margin-bottom: 25px;
}

header h1 {
    font-size: 30px;
    margin-bottom: 8px;
}

header p {
    color: #aaa;
}


/* =========================
   SLIDER
========================= */

.slider {
    width: 100%;
    max-width: 900px;

    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 12px;
}

.slides {
    width: 100%;
    overflow: hidden;
    border-radius: 20px;
}

.profile {
    display: none;

    background: rgba(255, 255, 255, 0.08);

    border-radius: 20px;
    overflow: hidden;

    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);

    animation: slideIn 0.5s ease;
}

.profile.active {
    display: block;
}

.profile img {
    width: 100%;
    height: 430px;

    object-fit: cover;

    display: block;
}

.profile-info {
    padding: 20px;
    text-align: center;
}

.profile-info h2 {
    font-size: 26px;
    margin-bottom: 8px;
}

.profile-info p {
    color: #bbb;
    margin-bottom: 18px;
}


/* =========================
   MESSAGE BUTTON
========================= */

.message-button {
    padding: 12px 20px;

    border-radius: 10px;

    border: 2px solid #19c463;

    background: transparent;

    color: #19c463;

    font-size: 15px;
    font-weight: bold;

    cursor: pointer;

    transition: 0.25s;
}

.message-button:hover {
    background: #19c463;
    color: white;

    transform: scale(1.03);
}


/* =========================
   SLIDER BUTTONS
========================= */

.slide-btn {
    width: 45px;
    height: 45px;

    flex-shrink: 0;

    border: none;
    border-radius: 50%;

    background: rgba(255, 255, 255, 0.12);

    color: white;

    font-size: 22px;

    cursor: pointer;
}

.slide-btn:hover {
    background: #19c463;
}


/* =========================
   DOTS
========================= */

.dots {
    text-align: center;
    margin-top: 18px;
}

.dots span {
    display: inline-block;

    width: 10px;
    height: 10px;

    margin: 0 5px;

    border-radius: 50%;

    background: #777;

    cursor: pointer;
}

.dots span:hover {
    background: #19c463;
}


/* =========================
   CHAT WINDOW
========================= */

.chat-window {
    position: fixed;

    right: 20px;
    bottom: 20px;

    width: 350px;
    max-width: calc(100% - 30px);

    height: 500px;

    background: #ffffff;

    color: #111;

    border-radius: 18px;

    overflow: hidden;

    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5);

    z-index: 1000;

    display: flex;
    flex-direction: column;
}


/* =========================
   CHAT HEADER
========================= */

.chat-header {
    padding: 15px;

    background: #19c463;

    color: white;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.chat-header strong {
    display: block;
    font-size: 17px;
}

.chat-header small {
    display: block;
    margin-top: 4px;
    opacity: 0.9;
}

.chat-header button {
    width: 32px;
    height: 32px;

    border: none;
    border-radius: 50%;

    background: rgba(255,255,255,0.2);

    color: white;

    font-size: 22px;

    cursor: pointer;
}


/* =========================
   CHAT MESSAGES
========================= */

.chat-messages {
    flex: 1;

    padding: 15px;

    overflow-y: auto;

    background: #f4f6f5;
}

.message {
    max-width: 80%;

    padding: 10px 13px;

    margin-bottom: 10px;

    border-radius: 15px;

    font-size: 14px;

    line-height: 1.4;
}

.received {
    background: white;

    color: #222;

    border-top-left-radius: 4px;

    margin-right: auto;

    box-shadow: 0 2px 5px rgba(0,0,0,0.08);
}

.sent {
    background: #19c463;

    color: white;

    border-top-right-radius: 4px;

    margin-left: auto;
}


/* =========================
   CHAT INPUT
========================= */

.chat-input {
    display: flex;

    padding: 10px;

    background: white;

    border-top: 1px solid #ddd;
}

.chat-input input {
    flex: 1;

    padding: 11px;

    border: 1px solid #ddd;

    border-radius: 20px;

    outline: none;

    font-size: 14px;
}

.chat-input button {
    width: 42px;

    margin-left: 8px;

    border: none;

    border-radius: 50%;

    background: #19c463;

    color: white;

    font-size: 17px;

    cursor: pointer;
}


/* =========================
   ANIMATION
========================= */

@keyframes slideIn {

    from {
        opacity: 0;
        transform: translateX(30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 600px) {

    #mainWebsite {
        padding: 20px 10px;
    }

    header h1 {
        font-size: 25px;
    }

    .profile img {
        height: 330px;
    }

    .slide-btn {
        width: 38px;
        height: 38px;
        font-size: 18px;
    }

    .chat-window {
        right: 10px;
        bottom: 10px;

        width: calc(100% - 20px);

        height: 480px;
    }

}

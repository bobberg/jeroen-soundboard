import React from "react";
import "./App.css";

// import jeroenNietDoen from "./../src/assets/sounds/Keukenkampioen.m4a"
// import jeroenNietDoen from "./assets/sounds/Keukenkampioen.m4a";

function App() {
  // URLs of the audio clips
  const sounds = [
    {
      name: "Jeroen niet doen!",
      url: "./jeroen-niet-doen.mp3",
      img: "./images/jeroen-niet-doen.png",
    },
    {
      name: "We are Champions League, not Keukenkampioen",
      url: "/assets/sounds/Keukenkampioen.m4a",
      img: "./images/we-are-champions-league-not-keukenkampioen.png",
    },
    {
      name: "Priority no. 1 remains, continue business as usual",
      url: "path/to/sound3.mp3",
      img: "./images/priority-no-1-remains-continue-business-as-usual.png",
    },
    {
      name: "Are we going to Dickies?",
      url: "path/to/sound4.mp3",
      img: "./images/are-we-going-to-dickies.png",
    },
    {
      name: "I don't see it on the slide, so it's not there...",
      url: "path/to/sound5.mp3",
      img: "./images/i-dont-see-it-in-the-slide-so-its-not-there.png",
    },
    {
      name: "How many clients did you call today?",
      url: "path/to/sound5.mp3",
      img: "./images/how-many-clients-did-you-call-today.png",
    },
    {
      name: "Let's get real or let's not play",
      url: "path/to/sound5.mp3",
      img: "./images/lets-get-real-or-lets-not-play.png",
    },
    {
      name: "That is NOT a good question",
      url: "path/to/sound5.mp3",
      img: "./images/that-is-not-a-good-question.png",
    },
    {
      name: "I'm not gonna give you answers, only context",
      url: "path/to/sound5.mp3",
      img: "./images/im-not-gonna-give-you-answers-only-context.png",
    },
    {
      name: "Consulting is a marathon, not a sprint",
      url: "path/to/sound5.mp3",
      img: "./images/consulting-is-a-marathon-not-a-sprint.png",
    },
    {
      name: "If you don't follow the process, it doesn't exist",
      url: "path/to/sound5.mp3",
      img: "./images/if-you-dont-follow-the-process-it-doesnt-exist.png",
    },
  ];

  const baseUrl = process.env.REACT_APP_PUBLIC_URL
    ? process.env.REACT_APP_PUBLIC_URL
    : "https://purple-sea-0a26ebb03.5.azurestaticapps.net";

  // const path = `${baseUrl}/DamoresMijnFSV.pdf`;

  const playSound = (url: string) => {
    const setUrl = `${baseUrl}${url}`;

    const audio = new Audio(`${setUrl}`);
    audio
      .play()
      .catch((error) => console.error("Error playing the sound:", error));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>The Jeroen Soundboard</h1>
      {/* add image of jeroen */}
      <img style={{ height: "200px" }} src="/images/jeroen.png" alt="" />
      <br />
      {sounds.map((sound, index) => (
        <img
          key={index}
          style={buttonStyle}
          onClick={() => playSound(sound.url)}
          src={sound.img}
          alt={sound.name}
        ></img>
      ))}
    </div>
  );
}

// Style for the buttons
const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  height: "200px",
};

export default App;

import { useState, useRef } from 'react';
import Confetti from 'react-confetti';
import './App.css';

function App() {
  const [gif, setGif] = useState("https://media.tenor.com/K0Op-0SpsvkAAAAj/dudu-cute.gif");
  const [question, setQuestion] = useState("รักเค้าไหมอ้วน");
  const [isNotLoveClicked, setIsNotLoveClicked] = useState(false);
  const [heartVisible, setHeartVisible] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const [showBalloon, setShowBalloon] = useState(false);

  const popSoundRef = useRef(null);

  const handleYesClick = () => {
    setGif("https://media.tenor.com/-aW73OVUtyYAAAAi/tkthao219-bubududu.gif");
    setQuestion("เค้าก็รักอ้วนนะะะ <3 <3");
    playPopSound();
    setShowBalloon(true); // Show the balloon on "Yes" click
  };

  const handleNoClick = () => {
    setIsNotLoveClicked(true);
    playPopSound();
  };

  const playPopSound = () => {
    if (popSoundRef.current) {
      popSoundRef.current.play();
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="bg-[#FCFFC1] bg-gradient-to-tr from-[#FBB4A5] min-h-screen text-center text-gray-800">
      <header className="bg-[#FB9EC6] text-white py-6 text-3xl font-bold">
        สุขสันต์วันเกิดแก้มนะะ ❤️🎉
        <button
          className="ml-4 px-4 py-2 bg-white text-pink-600 rounded-full shadow-md"
          onClick={toggleMusic}
        >
          {isMusicPlaying ? "Pause Music" : "Play Music"}
        </button>
      </header>

      {showBalloon && (
        <div className="balloon-container relative">
          <img
            src="https://example.com/balloon.png" // Replace with the balloon image URL
            alt="Balloon"
            className="balloon absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-rise"
          />
          <img
            src="https://example.com/bottle.png" // Replace with the bottle image URL
            alt="Bottle"
            className="bottle mx-auto"
          />
        </div>
      )}

      <div className="wrapper relative pb-8 max-w-xl w-full mx-auto bg-gradient-to-tr from-pink-200 to-yellow-200 p-8 rounded-3xl text-center shadow-lg">
        <h2 className="text-3xl text-pink-600 font-semibold my-4">{question}</h2>
        <img className="gif max-w-xs mx-auto my-4" alt="gif" src={gif} />
        <div className="groupbtn relative mt-8 flex justify-center space-x-4">
          <button
            className="yes-btn w-36 h-12 bg-pink-600 text-white rounded-full shadow-md text-xl cursor-pointer"
            onClick={handleYesClick}
          >
            รัก
          </button>
          <button
            className={`no-btn w-36 h-12 bg-white text-pink-600 rounded-full shadow-md text-xl transition-all duration-300 ${isNotLoveClicked ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handleNoClick}
          >
            {isNotLoveClicked ? "กดไม่ได้หรอก🤗" : "ไม่รัก"}
          </button>
        </div>
      </div>

      <audio ref={popSoundRef} src="https://l343-c.github.io/project-gf/pop.mp3" />
    </div>
  );
}

export default App;

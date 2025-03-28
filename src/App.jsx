import { useState, useRef } from 'react';
import Confetti from 'react-confetti';
import './App.css';

function App() {
  const [gif, setGif] = useState("https://media.tenor.com/K0Op-0SpsvkAAAAj/dudu-cute.gif");
  const [question, setQuestion] = useState("รักเค้าไหมคะเบบี๋");
  const [isNotLoveClicked, setIsNotLoveClicked] = useState(false);
  const [heartVisible, setHeartVisible] = useState(false);  // State to control heart visibility
  const [isMusicPlaying, setIsMusicPlaying] = useState(true); // State for music toggle

  const popSoundRef = useRef(null);
  const audioRef = useRef(null);

  const handleYesClick = () => {
    setGif("https://media.tenor.com/-aW73OVUtyYAAAAi/tkthao219-bubududu.gif");
    setQuestion("เค้าก็รักเบบี๋นะ <3 <3");
    playPopSound();
  };

  const handleNoClick = () => {
    setIsNotLoveClicked(true);
  };

  const playPopSound = () => {
    if (popSoundRef.current) {
      popSoundRef.current.play();
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  const [confettiVisible, setConfettiVisible] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const showMessage = () => {
    if (!isVisible) {
      setIsVisible(true);
      setConfettiVisible(true);

      if (audioRef.current) {
        audioRef.current.play();
      }

      setTimeout(() => {
        setConfettiVisible(false);
      }, 15000);
    }
  };

  // Toggle music play/pause
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

  // Trigger heart effect when clicking the message
  const triggerHeartEffect = () => {
    setHeartVisible(true);
    setTimeout(() => {
      setHeartVisible(false);  // Hide the heart after animation ends
    }, 1000);  // Duration of the heart animation
  };

  return (
    <div className="bg-[#FCFFC1] bg-gradient-to-tr from-[#FBB4A5] min-h-screen text-center text-gray-800">
      <header className="bg-[#FB9EC6] text-white py-6 text-3xl font-bold">
        HBD นะกั้ป เบบี๋ 🐷🍵
        <button
          className="ml-4 px-4 py-2 bg-white text-pink-600 rounded-full shadow-md"
          onClick={toggleMusic}
        >
          {isMusicPlaying ? "Pause Music" : "Play Music"}
        </button>
      </header>

      {confettiVisible && <Confetti width={windowWidth} height={windowHeight} />}

      <div className="flex justify-center items-center mx-4 sm:mx-6 lg:mx-8 my-4">
        <main className="max-w-xl mx-auto px-4 py-4 bg-white rounded-lg shadow-md sm:my-8 sm:p-6 md:my-12 md:p-8">
          <div className="photo my-6">
            <img 
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzJpczc1YmwzcXlvaTRqc2F5dzhneXhqZDd3MjIwYWV0YWMyNGc0MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VKckk0LtyUyNeX4idd/giphy.gif" 
              className="w-full rounded-lg"
            />
          </div>

          <div
            className="message text-base leading-relaxed sm:text-lg cursor-pointer"
            onClick={() => { showMessage(); triggerHeartEffect(); }}  // Trigger both message and heart effect
          >
            {isVisible ? (
              <div className="opacity-100 transition-opacity duration-1000">
                <p>
                  <p className='font-semibold text-orange-400'>Dear น้องผ่ายยย</p>
                  สุขสันต์ วันเกิดนะคะ เบบี๋ ปีนี้เค้าอาจจะไม่ได้อยู่กับเบบี๋ ขอให้ปีนี้เป็นปีที่ดีสำหรับเบบี๋นะคะ เค้าอยากให้เธอมีความสุขเย้อๆ ไม่อยากให้เครียดเรื่องๆเล็กๆน้อย เค้าอยากให้เธอทำอะไรก็ผ่านทำอะไรก็ดี แล้วอีกอย่างนึง เค้าขอให้เธออยู่กับเค้าไปนานๆ นะคะ อยู่กับเค้าทุกวันเกิดเลยยย เค้าอาจจะเขียนไม่ได้เยอะแต่สิ่งที่เค้าเขียนมันมาจากใจเค้าทุกคำพูดเลยนะคะ เค้ารักเธอที่สุดในสามโลกเลยยยยยย💝💗
                </p>
              </div>
            ) : (
              <p className='fade-in2 font-medium text-blue-600'>Click here to read the message</p>
            )}
          </div>
        </main>
      </div>

      <audio ref={audioRef} src="https://cdn.discordapp.com/attachments/873181328437293096/1355188961877692487/wish._-_official_audio.mp3?ex=67e80592&is=67e6b412&hm=f08662042f3a771b16ff25da06cb88d43271227b02ecc95f5626fc1c5ddce98e&" autoPlay />
      
      <audio ref={popSoundRef} src="https://l343-c.github.io/project-gf/pop.mp3" />

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

      {/* Heart effect container */}
      {heartVisible && (
        <div className="heart-effect absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
          ❤️
        </div>
      )}
    </div>
  );
}

export default App;

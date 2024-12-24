import { useState, useRef } from 'react';
import Confetti from 'react-confetti';
import './App.css';

function App() {
  const [gif, setGif] = useState("https://media.tenor.com/K0Op-0SpsvkAAAAj/dudu-cute.gif");
  const [question, setQuestion] = useState("รักเค้าไหมอ้วน");
  const [isNotLoveClicked, setIsNotLoveClicked] = useState(false);

  const popSoundRef = useRef(null);

  const handleYesClick = () => {
    setGif("https://media.tenor.com/-aW73OVUtyYAAAAi/tkthao219-bubududu.gif");
    setQuestion("เค้าก็รักอ้วนนะะะ <3 <3");
    playPopSound();
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

  const [isVisible, setIsVisible] = useState(false);
  const [confettiVisible, setConfettiVisible] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const audioRef = useRef(null);

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

  return (
    <div className="bg-[#FCFFC1] bg-gradient-to-tr from-[#FBB4A5] min-h-screen text-center text-gray-800">
      <header className="bg-[#FB9EC6] text-white py-6 text-3xl font-bold">
        สุขสันต์วันเกิดแก้มนะะ ❤️🎉
      </header>

      {confettiVisible && <Confetti width={windowWidth} height={windowHeight} />}

      <div className="flex justify-center items-center mx-4 sm:mx-6 lg:mx-8 my-4">
        <main className="max-w-xl mx-auto px-4 py-4 bg-white rounded-lg shadow-md sm:my-8 sm:p-6 md:my-12 md:p-8">
          <div className="photo my-6">
            <img 
              src="https://l343-c.github.io/project-gf/Kaem.png" 
              alt="" 
              className="w-full rounded-lg"
            />
          </div>

          <div
            className="message text-base leading-relaxed sm:text-lg cursor-pointer"
            onClick={showMessage}
          >
            {isVisible ? (
              <div className="opacity-100 transition-opacity duration-1000">
                <p>
                  <p className='font-semibold text-orange-400'>Dear แก้ม</p>
                  ขอบคุณนะแก้มที่อยู่ข้างเค้ามาตลอดของขวัญชิ้นนี้เค้าหวังว่าเธอจะชอบนะกล่องสุ่มโคนันที่เธอบ่นอยากได้มานานละะ ถึงเว็ปที่เค้าทําจะไม่ได้อลังการมากแต่เค้าก็อยากมอบสิ่งที่เค้าชอบทําให้กับคนที่เค้ารักมากก ทั้งหมดเค้าทําจากใจนะะ❤️❤️ อายุ 16 แล้วเติบโตขึ้นอีกปีแล้วเค้าขอให้ปีนี้เธอมีความสุขมากๆนะดูแลสุขภาพตัวเยอะๆด้วยอย่าป่วยบ่อย ถึงจะมีอะไรที่เสียใจบ้างผิดหวังบ้างท้อบ้างแต่อย่างน้อยเธอก็มีเค้าอยู่ข้างๆตลอดนะ ขอให้เธอสมหวังกับสิ่งที่เธอจะทํากับสิ่งที่เธอจะเป็นนะเค้าเป็นกําลังใจให้เธอเสมอเลยยไอ้อ้วน รักเค้าแล้วอย่าลืมรักตัวเองด้วยนะคนสวยเราจะโตไปพร้อมกันนะแล้วก็จะผ่านอะไรยากๆไปด้วยกันด้วยยย รักแก้มที่สุดในโลกกก😊😊
                </p>
              </div>
            ) : (
              <p className='font-medium text-blue-600' onClick={popSoundRef} >Click here to read the message</p>
            )}
          </div>
        </main>
      </div>

      <audio ref={audioRef} src="https://l343-c.github.io/project-gf/song.mp3" autoPlay />
      
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
    </div>
  );
}

export default App;

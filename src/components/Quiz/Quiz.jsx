import axios from 'axios';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Quiz = () => {
  const id = useSelector((state) => state.id);
  const url = `https://opentdb.com/api.php?amount=10&category=${id}`;
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  //dummy data

  // const [data, setData] = useState([
  //   {
  //     ans: 'Cars',
  //     options: ['Cars', 'Helicopters', 'Submarines', 'Planes'],
  //     question:
  //       'How does the character Dragowizard, Qinus Axia&#039;s from the anime &quot;Buddyfight&quot; differ between the Japanese and English dubs?',
  //     type: 'multiple',
  //   },
  //   {
  //     ans: 'Cars',
  //     options: ['Cars', 'namste', 'Submarines', 'Planes'],
  //     question: 'Rocket League is a game which features..',
  //     type: 'multiple',
  //   },
  //   {
  //     ans: 'True',
  //     options: ['True', 'False'],
  //     question:
  //       'In the &quot;To Love-Ru&quot; series, Peke is considered a female robot.',
  //     type: 'boolean',
  //   },
  // ]);
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  const getData = async () => {
    try {
      const res = await axios.get(url);
      let data = res.data.results;
      let result = [];
      for (let i of data) {
        let obj = {
          type: '',
          question: '',
          options: [],
          ans: '',
        };
        obj.type = i.type;
        obj.question = i.question;
        obj.ans = i.correct_answer;
        if (i.type === 'boolean') {
          obj.options = ['True', 'False'];
        } else {
          let arr = [i.correct_answer, ...i.incorrect_answers];
          obj.options = shuffle(arr);
        }
        result.push(obj);
      }
      setData(result);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleAnswerSubmit = (item) => {
    if (item === data[index].ans) setScore((prev) => prev + 1);
    if (index < data.length - 1) setIndex((prev) => prev + 1);
    else setShowScore(true);
  };

  const handleTryAgain = () => {
    setData([]);
    getData();
    setIndex(0);
    setScore(0);
    setShowScore(false);
  };
  //Convert html entities to text
  function decode(str) {
    let txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
  }

  if (data.length > 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[100vh] text-white mt-[-5rem]">
        <div className="bg-[#1F2544] lg:w-[37rem] md:w-[35rem] sm:w-[30rem]  rounded-[15px] p-5 flex w-[15rem]justify-evenly h-80 ">
          {showScore ? (
            <div className="flex text-4xl  flex-col items-center justify-center">
              <p className="mb-10">Your Score</p>
              <p>
                {score} out of {data.length}
              </p>
            </div>
          ) : (
            <>
              <div className="w-full relative">
                <div className="mb-5">
                  <span className="text-2xl">Question {index + 1}</span>/
                  {data.length}
                </div>
                <div className="mb-3">{decode(data[index].question)}</div>
              </div>
              <ul className="w-full flex flex-col ">
                {data[index].options.map((item, ind) => (
                  <li
                    key={ind}
                    className="w-full  text-white bg-[#252d4a] rounded-2xl flex p-3 justify-start items-center border-4 border-[#234668] cursor-pointer hover:bg-[#555e7d] mb-2"
                    onClick={() => handleAnswerSubmit(item)}
                  >
                    {decode(item)}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        {!showScore && (
          <div className="text-[#252d4a] text-2xl m-5">Score: {score}</div>
        )}
        {showScore && (
          <div className="flex justify-evenly w-full text-3xl mt-10">
            <button
              onClick={handleTryAgain}
              className="text-[#252d4a] text-center  p-3 rounded-3xl border-4 border-[#252d4a] hover:scale-110 transition-all"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default Quiz;

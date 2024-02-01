import axios from 'axios';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Quiz = () => {
  const id = useSelector((state) => state.id);
  const url = `https://opentdb.com/api.php?amount=15&category=${id}`;
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // const [data, setData] = useState([
  //   {
  //     ans: 'Cars',
  //     options: ['Cars', 'Helicopters', 'Submarines', 'Planes'],
  //     question: 'Rocket League is a game which features..',
  //     type: 'multiple',
  //   },
  //   {
  //     ans: 'Cars',
  //     options: ['Cars', 'namste', 'Submarines', 'Planes'],
  //     question: 'Rocket League is a game which features..',
  //     type: 'multiple',
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
  },[]);
  const handleNext = () => {
    if (index < data.length-1) setIndex((prev) => prev + 1);
    else setShowScore(true);
  };
  const handleAnswerSubmit = (e,item) => {
    if(item===data[index].ans)setScore((prev)=>prev+1);
  };
  if (data.length>0) {
    return (
      <div className="flex flex-col justify-center items-center h-[75vh] w-[50vh] bg-slate-400 mt-6 m-auto border-2 border-black">
        {showScore ? (
          <h2>
            Your Score is {score} out of {data.length}
          </h2>
        ) : (
          <>
            <h2>
              {index + 1}.{data[index].question}
            </h2>
            <ul className="w-full m-10">
              {data[index].options.map((item, ind) => (
                <li key={ind} className="p-2 bg-slate-800 text-white my-2 cursor-pointer mx-1 rounded-lg" onClick={(e)=>handleAnswerSubmit(e,item)}>
                  {ind + 1}.{item}
                </li>
              ))}
            </ul>
            <button
              onClick={handleNext}
              className="mb-3 p-3 bg-purple-700 text-white rounded-2xl"
            >
              Next
            </button>
            <div className="">
              {index + 1} of {data.length} questions
            </div>
          </>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default Quiz;

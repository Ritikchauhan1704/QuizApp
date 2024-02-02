
const About = () => {
  let a=[
      {
        ans: 'Cars',
        options: ['Cars', 'Helicopters', 'Submarines', 'Planes'],
        question: 'How does the character Dragowizard, Qinus Axia&#039;s from the anime &quot;Buddyfight&quot; differ between the Japanese and English dubs?',
        type: 'multiple',
      },
      {
        ans: 'Cars',
        options: ['Cars', 'namste', 'Submarines', 'Planes'],
        question: 'Rocket League is a game which features..',
        type: 'multiple',
      },
    ]
      function decode(str) {

        let txt = document.createElement("textarea");
        
        txt.innerHTML = str;
        
        return txt.value;
        
        
    }
  return (
    <div className="">
      {a.map((item,i)=>(
        <li key={i}>{decode(item.question)}</li>
      ))}
    </div>
  )
}

export default About
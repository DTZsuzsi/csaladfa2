import './App.css';
import Csaladtag from './components/Csaladtag';
import { ditroiak } from './components/data';
import { useState } from 'react';

function App() {

  const [clickedDetail, setClickedDetail] = useState(false);

function handleClick(e) {
setClickedDetail(true)
}

  return (
    <div className='App'>
      <div className='header'>
        <h1>DITRÓI-TÓTH CSALÁD</h1>
      </div>


      <div className='csalad'>
        {ditroiak.map((member) => (
          <div>
         <Csaladtag
            nickName={member.nickName}
            lastName={member.lastName}
            firstName={member.name}
            birthday={member.birthday}
            image={member.image}
          ></Csaladtag>
          <button value={member.name} onClick={(e)=>handleClick(e)} > RÉSZLETEK</button>
          </div>
        )) }
      </div>
    </div>
  );
}

export default App;

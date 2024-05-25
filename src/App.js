import './App.css';
import Csaladtag from './components/Csaladtag';
import Reszletek from './components/Reszletek';
import { ditroiak } from './components/data';
import { useEffect, useState } from 'react';

function App() {
  const [clickedDetail, setClickedDetail] = useState(false);
  const [chosenData, setChosenData] = useState(null);
  const [chosenName, setChosenName] = useState(null);

  function handleClick(e) {
    setClickedDetail(true);
    const name = e.target.value;
    console.log(e.target.value);
    setChosenName(name);
  }

  useEffect(() => {
    const data = ditroiak.find((member) => member.firstName === chosenName);
    setChosenData(data);
  }, [chosenName]);

  console.log(chosenData);

  return !clickedDetail ? (
    <div className='App'>
      <div className='header'>
        <h1>DITRÓI-TÓTH CSALÁD</h1>
      </div>

      <div className='csalad'>
        {ditroiak.map((member, index) => (
          <div>
            <Csaladtag
              key={index}
              nickName={member.nickName}
              lastName={member.lastName}
              firstName={member.firstName}
              birthday={member.birthday}
              image={member.foto}
            ></Csaladtag>
            <button value={member.firstName} onClick={(e) => handleClick(e)}>
              {' '}
              RÉSZLETEK
            </button>
          </div>
        ))}
      </div>
    </div>
  ) : (
    chosenData && (
      <div>
        <Reszletek
          firstName={chosenName}
          etel={chosenData.etel}
          konyv={chosenData.konyv}
          film={chosenData.film}
          szin={chosenData.szin}
          neme={chosenData.neme}
        />
      </div>
    )
  );
}

export default App;

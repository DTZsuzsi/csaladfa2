
import './App.css';
import Csaladtag from './components/Csaladtag';

function App() {
  const lastName='Ditrói-Tóth'

const ditroiCsalád=[{name: 'Zsuzsa', nickName: 'Zsuzsi', birthday:'1982-08-30', image:'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/319923089_545195540799781_6933716524248878342_n.jpg?stp=c0.226.1363.1363a_dst-jpg_s552x414&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mcxvMvk8byAQ7kNvgFpzid6&_nc_ht=scontent-vie1-1.xx&oh=00_AYCV76yKQOsHbsatwk4fmWRQi6N4qDJJE3-16uaviFbeTA&oe=66578876'}, {name: 'Szabolcs', nickName:'Szabolcs', birthday:'1980-10-28', image:'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/206291056_10159741884231004_3139659820991249845_n.jpg?stp=c69.0.414.414a_dst-jpg_p552x414&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6aGoNPH4lv0Q7kNvgEHwzBo&_nc_ht=scontent-vie1-1.xx&oh=00_AYCU-m30ttOXCLKEmObf14lmlWgpbMaZVFuxg9sM1miwFA&oe=6678FAC0'}]

  return (
    <div className="App">
      <h1>DITRÓI-TÓTH CSALÁD</h1>

      <Csaladtag lastName='Ditrói-Tóth' firstName='Sámuel' nickName='Samu' birthday='2014-07-23' image={'https://scontent-vie1-1.xx.fbcdn.net/v/t31.18172-8/13475121_10206223866661991_7539253682796881906_o.jpg?stp=c103.0.414.414a_dst-jpg_p552x414&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HWZIjIFRtXkQ7kNvgGid_x3&_nc_ht=scontent-vie1-1.xx&oh=00_AYBwuMRPvuEGiJo330jPk1HhQ9tMWjgaIzMP33KZhzH0zA&oe=66790BB6'}></Csaladtag>
   <Csaladtag lastName={lastName} firstName='Nana' birthday='2016-06-30' image={'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/357191029_10161205505771004_7048878125104382541_n.jpg?stp=c0.45.405.405a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=euRvDQnUh0UQ7kNvgECrK8A&_nc_ht=scontent-vie1-1.xx&oh=00_AYDp50KIDGNx6EVXh0z6vT0DzoMF06mHg5szXqiiZt98xA&oe=66577F69'} ></Csaladtag>

   {ditroiCsalád.map((member)=> <Csaladtag nickName={member.nickName}lastName={lastName} firstName={member.name} birthday={member.birthday} image={member.image} ></Csaladtag>)}
    </div>
  );
}

export default App;

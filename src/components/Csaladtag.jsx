

function Csaladtag(props) {
  const lastName = props.lastName;
  const firstName = props.firstName;
  const nickName = props.nickName;
  const birthday = props.birthday;
  const image = props.image;

  return (
    <div className='csaladtag'>
      <img className='image' alt={nickName} src={image}></img>
      <div>
        <h1>
          Név: {lastName} {firstName}
        </h1>
        <h2>Becenév: {nickName} </h2>
        <p> Születésnap: {birthday}</p>
      </div>
    </div>
  );
}

export default Csaladtag;

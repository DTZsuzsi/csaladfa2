

function Reszletek(props) {

    const firstName=props.firstName
 const etel=props.etel
const film=props.film
const konyv=props.konyv
const neme=props.neme
const szin=props.szin


return  (
    <div className="reszletek">
        <h1>Név: {firstName}</h1>
        <p>Kedvenc étel: {etel}</p>
        <p>Kedvenc film: {film} </p>
        <p>Kedvenc könyv: {konyv} </p>
        <p> Kedvenc színe: {szin}</p>
        <p>Neme: {neme} </p>

    </div>
)

}


export default Reszletek
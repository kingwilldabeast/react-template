import { useNavigate } from "react-router-dom"
import {Link} from 'react-router-dom'


export default function BoatList (props) {

  let navigate = useNavigate()

  //naviage and link are similar in that they bring us to part of SPA, wheras a tags link to out of site
  //link is an object -> makes anything a link
  //navigate is a method, runs in onClick function 

  const openBoatDetailPage = (boat) => {
    navigate(`${boat.id}`)
  }

  return (
    <div className="boat-grid">
        <Link to ='/'>Back</Link>
      {
      props.boats.map((boat) => (
        <div className="boat-card" onClick={() => openBoatDetailPage(boat)} key={boat.id}>
          <img style={{ display: 'block' }} src={boat.img} alt={boat.name} />
          <h3>{boat.name}</h3>
        </div>
      ))}
    </div>
    
  )
}


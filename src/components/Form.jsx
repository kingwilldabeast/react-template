import { useNavigate } from "react-router-dom"

export default function Form (props) {

  let navigate = useNavigate()
  const [boatInProgress, setBoatInProgress] = useState({
    id: '',
    name: '',
    img: '',
    description: '',
    price: ''
  })

  const [inputInProgress, setInputInProgress] = useState({ searchBar: '' });

  
  const handleSubmit = (e) => {
    props.addBoat(e)
    navigate('/listings')
  }

  const handleChange = (e) => {
    setInputInProgress({ ...inputInProgress, [e.target.name]: e.target.value })
  }

  return (
    <div>
    <h1>Add A New Boat Listing</h1>
    <form onSubmit={ handleSubmit }>
      <input type="text" value={newBoat.name} onChange={ handleChange} name={'name'} placeholder={'name'} />
      <input type="text" value={newBoat.img} onChange={ handleChange} name={'img'} placeholder={'image'} />
      <input type="text-area" value={newBoat.description} onChange={ handleChange} name={'description'} placeholder={'description'} />
      <input type="text" value={newBoat.price} onChange={ handleChange} name={'price'} placeholder={'price'} />
      <button>Submit</button>
    </form>
    </div>
  );
}


function Card(props) {
  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={props.image} alt="Character Image" />
      </div>
      <div className="text-wrapper">
        <p className="character-name">{props.name}</p>
        <p className="character-type">{props.type}</p>
      </div>
    </div>
  )
}

export default Card
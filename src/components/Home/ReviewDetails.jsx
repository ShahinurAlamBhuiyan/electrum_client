const ReviewDetails = props => {
  console.log(props)
  // const {name, address, description, img} = reviewDetail;
  // console.log("reviewDetail"+reviewDetail)
  return (
    <div className='item'>
      <div className='shadow-effect'>
        {/* <img className="img-circle" src={img} /> */}
        {/* <p>{description}</p> */}
      </div>
      <div className='testimonial-name'>
        {/* <h5>{name}</h5> */}
        {/* <small>{address}</small> */}
      </div>
    </div>
  )
}

export default ReviewDetails

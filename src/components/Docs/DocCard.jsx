import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const DocCard = ({ item }) => {
  const navigate = useNavigate()
  const { id, title, description, published, imageURL } = item

  const shortDescription = description.slice(0, 80) + '...'

  return (
    <Card onClick={() => navigate(`/doc/${id}`)} className='single-card'>
      <div
        style={{
          background: '#484747',
          border: 'none',
          borderRadius: '8px'
        }}
      >
        <Card.Body className='card-body'>
          <Card.Title style={{ background: 'transparent' }}>{title}</Card.Title>
          <Card.Text
            style={{ background: 'transparent' }}
            className='card-description'
          >
            {shortDescription}
          </Card.Text>
          <Card.Text
            style={{ background: 'transparent' }}
            className='card_date'
          >
            {published}
          </Card.Text>
        </Card.Body>
      </div>

      <Card.Img
        style={{ background: 'transparent' }}
        variant='top'
        src={imageURL}
      />
    </Card>
  )
}

DocCard.propTypes = {
  item: PropTypes.func.isRequired
}

export default DocCard

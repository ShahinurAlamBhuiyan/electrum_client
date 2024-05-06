import PropTypes from 'prop-types'

import SingleCard from './SingleCard'
import './Styles.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'


const AllComponentsContainer = ({ activeNew, activeOld, searchTerm }) => {
  const [components, setComponents] = useState([]) 
  const [loading, setLoading] = useState(true) 
  const [error, setError] = useState(null) 

  // Fetch all components when the component mounts
  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER}/components`
        ) 
        setComponents(response.data) 
      } catch (err) {
        setError(err.message || 'Error fetching components') 
      } finally {
        setLoading(false) 
      }
    }

    fetchComponents() 
  }, []) 

  if (loading) {
    return <Spinner animation='grow' /> 
  }

  if (error) {
    return <div>Error: {error}</div> 
  }

  if (components.length === 0) {
    return <div>No components found</div> 
  }

  console.log(components)

  const filteredNewComponents = components
    .filter(component => component.type === 'new')
    .filter(
      component =>
        component.name
          ?.toLowerCase()
          .includes(searchTerm?.toLowerCase()) ||
        component.description?.toLowerCase().includes(searchTerm?.toLowerCase())
    )

  const filteredOldComponents = components
    .filter(component => component.type === 'old')
    .filter(
      component =>
        component.name
          ?.toLowerCase()
          .includes(searchTerm?.toLowerCase()) ||
        component.description?.toLowerCase().includes(searchTerm?.toLowerCase())
    )

  return (
    <>
      <div className='comp_card_container'>
        {activeNew &&
          filteredNewComponents.map(component => (
            <SingleCard key={component._id} component={component} />
          ))}

        {activeOld &&
          filteredOldComponents.map(component => (
            <SingleCard key={component._id} component={component} />
          ))}

        {activeNew && filteredNewComponents.length == 0 && (
          <p style={{ color: 'red' }}>No New components found.</p>
        )}
        {activeOld && filteredOldComponents.length == 0 && (
          <p style={{ color: 'red' }}>No Pre-owned components found.</p>
        )}
      </div>
    </>
  )
}

AllComponentsContainer.propTypes = {
  activeNew: PropTypes.bool.isRequired,
  activeOld: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired
}

export default AllComponentsContainer

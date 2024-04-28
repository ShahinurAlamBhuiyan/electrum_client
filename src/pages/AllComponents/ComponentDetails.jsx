import { useParams } from 'react-router-dom'

const ComponentDetails = () => {
  const { component_id } = useParams()
  return <div>ComponentDetails : {component_id}</div>
}

export default ComponentDetails

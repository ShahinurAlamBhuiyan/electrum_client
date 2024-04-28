import { useParams } from "react-router-dom"

const DocDetails = () => {
    const { doc_id} = useParams();
  return (
    <div>DocDetails : {doc_id}</div>
  )
}

export default DocDetails
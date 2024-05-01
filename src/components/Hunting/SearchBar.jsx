import PropTypes from 'prop-types'

const SearchBar = ({ setQuery }) => {
  return (
    <div className='search_container'>
      <input
        className='job_input'
        placeholder='Search Jobs with title, location, description etc.'
        onChange={e => setQuery(e.target.value)}
      />
    </div>
  )
}

SearchBar.propTypes = {
  setQuery: PropTypes.string.isRequired
}

export default SearchBar

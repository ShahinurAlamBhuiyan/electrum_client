import PropTypes from 'prop-types'

const AllComponentsHeader = ({
  setActiveNew,
  setActiveOld,
  activeNew,
  searchTerm,
  setSearchTerm
}) => {
  const handleNewComponents = () => {
    setActiveNew(true)
    setActiveOld(false)
  }

  const handlePreOwnedComponents = () => {
    setActiveOld(true)
    setActiveNew(false)
  }

  return (
    <div className='comp_header'>
      <button
        style={{ backgroundColor: activeNew ? '#64B357' : '#202E25' }}
        className='btn_new_comp'
        onClick={handleNewComponents}
      >
        New Components
      </button>
      <button
        style={{ backgroundColor: !activeNew ? '#64B357' : '#202E25' }}
        className='btn_pre_comp'
        onClick={handlePreOwnedComponents}
      >
        Pre-Owned Components
      </button>
      <input
        className='input_comp'
        type='text'
        placeholder='Search your components here...'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

AllComponentsHeader.propTypes = {
  setActiveNew: PropTypes.func.isRequired,
  setActiveOld: PropTypes.func.isRequired,
  activeNew: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired
}

export default AllComponentsHeader

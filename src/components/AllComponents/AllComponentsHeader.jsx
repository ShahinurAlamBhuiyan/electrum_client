import PropTypes from 'prop-types'
import searchIcon from '../../assets/search.png'

const AllComponentsHeader = ({ setActiveNew, setActiveOld, activeNew }) => {
  const handleNewComponents = () => {
    console.log('new ')
    setActiveNew(true)
    setActiveOld(false)
  }
  const handlePreOwnedComponents = () => {
    console.log('old ')
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
      />
      <img className='search_icon' src={searchIcon} alt='' />
    </div>
  )
}

AllComponentsHeader.propTypes = {
  setActiveNew: PropTypes.func.isRequired,
  setActiveOld: PropTypes.func.isRequired,
  activeNew: PropTypes.func.isRequired
}

export default AllComponentsHeader

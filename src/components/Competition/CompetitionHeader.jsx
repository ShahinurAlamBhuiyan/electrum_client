import './Style.css';

export default function AllComponentsHeader({
  activeUpcoming,
  activePrevious,
  setActiveUpcoming,
  setActivePrevious,
  setVisibleCards
}) {
  const handleUpcoming = () => {
    setActiveUpcoming(true);
    setActivePrevious(false);
    setVisibleCards(3);
  };

  const handlePrevious = () => {
    setActiveUpcoming(false);
    setActivePrevious(true);
    setVisibleCards(3);
  };
  // console.log(activeUpcoming)
  // console.log(activePrevious)

  return (
    <div className="competition_header" style={{marginTop:'20px', marginBottom:'20px'}}>
      <button
        onClick={handleUpcoming}
        style={{ backgroundColor: activeUpcoming ? '#64B357' : '#202E25', marginRight: '30px' }}
        className="btn_new_comp"
      >
        Upcoming Events
      </button>
      <button
        onClick={handlePrevious}
        style={{ backgroundColor: activePrevious ? '#64B357' : '#202E25' }}
        className="btn_pre_comp"
      >
        Previous Events
      </button>
    </div>
  );
}

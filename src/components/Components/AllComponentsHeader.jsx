import searchIcon from "../../assets/search.png"

export default function AllComponentsHeader() {
  return (
    <div className="comp_header">
        <button className="btn_new_comp">New Components</button>
        <button className="btn_pre_comp">Pre-Owned Components</button>
        <input className="input_comp" type="text" placeholder="Search your components here..." />
        <img className="search_icon" src={searchIcon} alt="" />
    </div>
  )
}

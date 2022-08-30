import '../Style_css/Header.scss'

function Header () {
return (
<div className="Header-main-container">
    <img className='Logo' src='Geo_Dev.ico' alt='Logo' width={120}></img>
<ul className="Header-main-list">
<li className="Header-child-list">Home</li>
<li className="Header-child-list">About</li>
<li className="Header-child-list">Projects</li>
<li className="Header-child-list">Skills</li>
<li className="Header-child-list">Contact</li>
</ul>
</div>
)}

export default Header
import { NavLink } from 'react-router-dom';
import '../Style_css/Header.scss';

export default function Header () {
return (

    <div className="Header-main-container">
        <img className="Logo" src="Geo_Dev.ico" alt="Logo" width={120}></img>
        <ul className="Header-main-list">
            <li><NavLink className="Header-child-list-link" to="/" >Home</NavLink></li>
            <li><NavLink className="Header-child-list-link" to="/about">About</NavLink></li>
            <li><NavLink className="Header-child-list-link" to="/projects" index={true} >Projects</NavLink></li>
            <li><NavLink className="Header-child-list-link" to="/skills">Skills</NavLink></li>
            <li><NavLink className="Header-child-list-link" to="/contact">Contact</NavLink></li>
        </ul>
    </div>
)}


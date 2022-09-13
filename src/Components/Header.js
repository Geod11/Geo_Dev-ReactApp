import { Link } from 'react-router-dom';
import '../Style_css/Header.scss';

export default function Header () {
return (

    <div className="Header-main-container">
        <img className="Logo" src="Geo_Dev.ico" alt="Logo" width={120}></img>
        <ul className="Header-main-list">
            <li><Link className="Header-child-list-link" to="/">Home</Link></li>
            <li><Link className="Header-child-list-link" to="/about">About</Link></li>
            <li><Link className="Header-child-list-link" to="/projects">Projects</Link></li>
            <li><Link className="Header-child-list-link" to="/skills">Skills</Link></li>
            <li><Link className="Header-child-list-link" to="/contact">Contact</Link></li>
        </ul>
    </div>
    
)}
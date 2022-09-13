import '../Style_css/Header.scss';
import { Link } from 'react-router-dom';

export default function Header () {
return (

    <div className="Header-main-container">
        <img className="Logo" src="Geo_Dev.ico" alt="Logo" width={120}></img>
        <ul className="Header-main-list">
            <li className="Header-child-list"><Link to="/">Home</Link></li>
            <li className="Header-child-list"><Link to="/about">About</Link></li>
            <li className="Header-child-list" Link to="/projects">Projects</li>
            <li className="Header-child-list" Link to="/skills">Skills</li>
            <li className="Header-child-list" Link to="/contact">Contact</li>
        </ul>
    </div>
    
)}

//<Link to={to}>{label}</Link>

// function CustomLink({ to, children, ...props }) {
// const resolvedPath = useResolvedPath(to)
// const isActive = useMatch({ path: resolvedPath.pathname, end: true})
// return (
//     <ul>
//     <li>
//     <Link to="/">Home</Link>
//     </li>
//     <li>
//     <Link to="/about">About</Link>
//     </li>
//     </ul>
// )





import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {
    return (
        <header className="navbar bg-gray-800 p-4">
            <nav>
                <ul className="navbar bg-gray-800 p-4">
                    <li><ScrollLink to="about" smooth={true} duration={500} className="text-white hover:bg-gray-700 p-2 rounded">About</ScrollLink></li>
                    <li><ScrollLink to="about" smooth={true} duration={500} className="text-white hover:bg-gray-700 p-2 rounded">Experience</ScrollLink></li>
                    <li><ScrollLink to="about" smooth={true} duration={500} className="text-white hover:bg-gray-700 p-2 rounded">Projects</ScrollLink></li>
                    <li><ScrollLink to="about" smooth={true} duration={500} className="text-white hover:bg-gray-700 p-2 rounded">Contact</ScrollLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
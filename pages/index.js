import Head from 'next/head';
import { Link as ScrollLink } from 'react-scroll';


export default function Home() {
    return (
        <>
            <Head>
                <title>Luis Ramón | Personal Website</title>
                <meta name="description" content="My personal website" />
            </Head>

            <header className="navbar">
                <nav>
                    <ul>
                        <li><ScrollLink to="about" smooth={true} duration={500} className="navbar li a">About</ScrollLink></li>
                        <li><ScrollLink to="resume" smooth={true} duration={500} className="navbar li a">Resume</ScrollLink></li>
                        <li><ScrollLink to="projects" smooth={true} duration={500} className="navbar li a">Projects</ScrollLink></li>
                        <li><ScrollLink to="contact" smooth={true} duration={500} className="navbar li a">Contact</ScrollLink></li>
                    </ul>
                </nav>
            </header>

            <section id="hero" className="hero-section h-screen flex items-center bg-gray-100 p-8">
                <div className="flex-1">
                    <img src ="/images/professional_picture.jpg" alt="Luis Ramon" className="rounded-full w-48 h-48 object-cover" />
                </div>
                <div className="flex-1 text-right">
                    <h1 className="text-5xl font-bold">Hi, I'm Luis Ramón</h1>
                    <p className="mt-4 text-xl">Welcome to my personal website!</p>
                    <p className="mt-2">I'm a Computer Science student at Binghamton University</p>
                </div>
            </section>

            <section id="about" className="section">
                <h2>About Me</h2>
                <p>I am passionate about technology, programming, and creating solutions to complex problems</p>
            </section>

            <section id="projects" className="section">
                <h2>Featured Projects</h2>
            </section>

            <footer id="contact" className="section">
                <p>Contact me at: <a href="mailto:luis.ramon4799@gmail.com">luis.ramon4799@gmail.com</a></p>
            </footer>
        </>
    );
}
import Head from 'next/head';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';


export default function Home() {
    return (
        <>
            <Head>
                <title>Luis Ramón | Personal Website</title>
                <meta name="description" content="My personal website" />
            </Head>

            <Navbar />
            <Hero />
            {/*<Experience /> */}
            {/*<Projects /> */}
            {/*<Contact /> */}
        </>
    );
}
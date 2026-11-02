'use client';

import Hero from './Hero';
import Navbar from './Navbar';
import SkillTicker from './SkillTicker';
import About from './About';
import Services from './Services';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
            <div className="min-h-screen flex flex-col">
                <div className="sticky top-0 z-50">
                    <Navbar />
                </div>
                <div id="home" className="px-4 sm:px-6 lg:px-8">
                    <Hero />
                </div>
                <SkillTicker />
                <div className="px-4 sm:px-6 lg:px-8">
                    <div id="about">
                        <About />
                    </div>
                    <div id="services">
                        <Services />
                    </div>
                    <div id="skills">
                        <Skills />
                    </div>
                    <div id="projects">
                        <Projects />
                    </div>
                    <div id="contact">
                        <Contact />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Footer from "../components/Footer";

const LandingPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Hero />
        <Main />
        <Footer />
        </div>
    );
}

export default LandingPage;

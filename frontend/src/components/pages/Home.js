import '../../App.css';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import Signup from './Signup';


function Home(){
    return(
        <>
        <Navbar/>
        <Signup />
        <HeroSection />
        </>
    )
}

export default Home;
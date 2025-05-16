import Hero from "./sections/Hero.jsx";
import ShowCaseSection from "./sections/ShowCaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";


const App = () => {
    return (
      <>
          <NavBar/>
          <Hero/>
          <ShowCaseSection/>
          <LogoSection/>
          <FeatureCards/>

      </>
    )
}
export default App

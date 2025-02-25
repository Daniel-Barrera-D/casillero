import AboutUs from "../Components/AboutUs/AboutUs"
import CalculateShipping from "../Components/CalculateShipping/CalculateShipping"
import Fee from "../Components/Fee/Fee"
import HeaderHome from "../Components/HeaderHome/HeaderHome"
import Start from "../Components/Start/Start"

const Home = () => {

    return(
        <>
            <HeaderHome/>
            <Start />
            <AboutUs />
            <Fee />
            <CalculateShipping />
        </>
    )
}

export default Home

import MindSection from "./Partials/MindSection"
import Restaurant from "./Restaurant"
import RestroChain from "./RestroChain"
import BestPlace from "./BestPlace"
import BestCuisine from "./BestCuisine"
import Footer from "./Footer"

function Home() {
  return (
    <>
     <div className=" bg-gradient-to-b from-[#f2f1f1ed] to-white">
        <MindSection/>
        <RestroChain/>
        <Restaurant/>
        <BestPlace/>
        <BestCuisine/>
        <Footer/>
     </div>
    </>
  )
}

export default Home
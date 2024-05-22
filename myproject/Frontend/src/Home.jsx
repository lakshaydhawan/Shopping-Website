import Navba from "./Navba";
import UncontrolledExample from "./uncontrolledExample";
function Home(){
    return(
        <>
        <div className="bg-body-tertiary">
            <Navba/>
            
            <div className=" container mt-5 ">
              <div className="container " style={{fontFamily: "Times New Roman"}}  ><h1 className="text-center ">Here are our some best selling products.Clearance sale is live now on all best selling products!!!</h1></div> 
            </div>
            <UncontrolledExample/> 
        </div>
        </>
    )
}
export default Home;
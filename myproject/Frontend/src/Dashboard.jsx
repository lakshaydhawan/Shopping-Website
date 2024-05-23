
import { Link } from "react-router-dom";
import Cardd from "./Cardd";
import jean from "./images/jean.jpg";
import tshirt from "./images/tshirt.jpg";
import shirt from "./images/shirt.jpg";
import jacket from "./images/jacket.jpg";
import cap from "./images/cap.jpg";
import watch from "./images/watch.jpg";
import DashboardNavbar from "./DashboardNavbar";
import Footer from "./Footer";
function Dashboard(){
    return(
        <>
          <div className="bg-body-tertiary" style={{height:1050}}>
          <DashboardNavbar/>
      <div className="container">
      <h1 style={{fontFamily: "Times New Roman"}} className="mt-5 text-center">Here are our some of the latest products.</h1>
      <div className='row  align-items-baseline'>
        <Cardd name="Shirt" price="450$" i={shirt}/>
        <Cardd name="Jean" price="450$" i={jean}/>
      <Cardd name="TShirt" price="450$" i={tshirt}/>
      <Cardd name="Jacket" price="450$" i={jacket}/>
      <Cardd name="Cap" price="450$" i={cap}/>
      <Cardd name="Watch" price="450$" i={watch}/>
      </div>
      
      </div>
      </div>
      <Footer/>
        </>
    )
}
export default Dashboard;
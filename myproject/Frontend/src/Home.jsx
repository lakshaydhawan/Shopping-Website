import Navba from "./Navba";
import UncontrolledExample from "./uncontrolledExample";
import Footer from "./Footer";
import Cardd2 from "./Cardd2";
import review1 from "./images/review1.jpg";
import review2 from "./images/review2.jpg";
import review3 from "./images/review3.jpg";
import banner from "./images/banner.webp";
function Home(){
    return(
        <>
        <div className="bg-body-tertiary">
            <Navba/>
            
            <div className=" container mt-5 ">
              <div className="container " style={{fontFamily: "Times New Roman"}}  ><h1 className="text-center ">Here are our some best selling products.Clearance sale is live now on all best selling products!!!</h1></div> 
            </div>
            <UncontrolledExample/> 
            <div className="container">
                <h1 style={{fontFamily: "Times New Roman"}} className="mt-5 text-center" >Your positive  feedback keeps us motivated</h1>
            <div className='row  align-items-baseline'>
            <Cardd2 name="Ana Marie" price="This is a very good shopping site." i={review1} />
            <Cardd2 name="Julie Bond" price="This site provides genuine products." i={review2}/>
            <Cardd2 name="Daryl Walker" price="The service is very fast." i={review3}/>
            </div>
            </div>
            <div >
            <h1 style={{fontFamily: "Times New Roman"}} className="mt-1 text-center" >Download our mobile app now and earn rewards</h1>
                <img style={{height:400,width:1349}} src={banner}></img>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Home;
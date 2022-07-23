import { useState } from "react";
import priceData from "./priceData";
function Pricing() {
    const [open, setOpen] = useState("p2")
    /* Base-Builder */
    const [base_regular, setBase_regular] = useState("₹1,000");
    const [base_actual, setBase_actual] = useState("₹800");
    const [base_total_regular, setBase_total_regular] = useState("₹49,000");
    const [base_total_actual, setBase_total_actual] = useState("₹39,200");
    /* Super-Coder  */
    const [super_regular, setSuper_regular] = useState("₹1,000");
    const [super_actual, setSuper_actual] = useState("₹750");
    const [super_total_regular, setSuper_total_regular] = useState("₹147,000");
    const [super_total_actual, setSuper_total_actual] = useState("₹110,250");
    /* Champion-Coder */
    const [champion_regular, setChampion_regular] = useState("₹1,000");
    const [champion_actual, setChampion_actual] = useState("₹700");
    const [champion_total_regular, setChampion_total_regular] = useState("₹310,000");
    const [champion_total_actual, setChampion_total_actual] = useState("₹210,700");
    /* Get country */
    let globalCountry
    async function myFunction () {
        /* Get user country from api */
        const res = await fetch('https://ipapi.co/json') //https://ipapi.co/json
        /* Store data as json */
        const data = await res.json()
        /* Store country in a variable */
        globalCountry = data.country
        /* Get data and loop through Data */
        priceData.data.map((item, index)=>{
            /* Get current country data*/
            if(globalCountry == item.country){
                /* Set Base-Builder price for country */

                /* Set regular price per class */
                setBase_regular(priceData.data[index].price.basic.perClass.regular)
                /* Set actual price per class */
                setBase_actual(priceData.data[index].price.basic.perClass.actual)
                /* Set regular total price */
                setBase_total_regular(priceData.data[index].price.basic.total.regular)
                /* Set actual total price */
                setBase_total_actual(priceData.data[index].price.basic.total.actual)
                /* Set Base-Builder Ends */

                /* Set Super-Coder price for country  */

                /* Set regular price per class */
                setSuper_regular(priceData.data[index].price.super.perClass.regular)
                /* Set actual price per class */
                setSuper_actual(priceData.data[index].price.super.perClass.actual)
                /* Set regular total price */
                setSuper_total_regular(priceData.data[index].price.super.total.regular)
                /* Set actual total price */
                setSuper_total_actual(priceData.data[index].price.super.total.actual)
                /* Set Super-Coder Ends */

                /* Set Champion-Coder price for country  */

                /* Set regular price per class */
                setChampion_regular(priceData.data[index].price.champion.perClass.regular)
                /* Set actual price per class */
                setChampion_actual(priceData.data[index].price.champion.perClass.actual)
                /* Set regular total price */
                setChampion_total_regular(priceData.data[index].price.champion.total.regular)
                /* Set actual total price */
                setChampion_total_actual(priceData.data[index].price.champion.total.actual)
                /* Set Champion-Coder Ends*/
                return true; 
            }
        });
    }
    myFunction()
    
  return (
    <>
        <section className="content-inner" style={{backgroundImage: "url(images/background/bg20.png)", backgroundRepeat: "no-repeat", backgroundSize: "100%", backgroundPosition:"center"}}>
            <div className="container">
                <div className="section-head style-1 text-center">
                    <h6 className="sub-title">PACKAGES</h6>
                    <h2 className="title">PICK YOUR FAVOURITE</h2>
                </div>
                <div className="row pricingtable-wraper-2">
                    <div className="col-lg-4 col-md-6">
                        <div className={`${open === "p1" ? "pricingtable-wrapper active style-1 m-b30" : "pricingtable-wrapper style-1 center m-b30"}`} onMouseOver={() => setOpen("p1")}>
                            <div className="pricingtable-inner">
                            <h5 className="pricingtable-bx" style={{marginTop:'-35px', marginBottom:'10px'}} > 
                                        <small style={{color:'white', backgroundColor:'navy',padding:'4px 8px 2px 8px', fontWeight:'bolder',borderRadius:'8px',fontSize:'25px' }}>Save 20%</small>
                                    </h5>
                                <div className="pricingtable-title">
                                    <h3 className="title">Base-Builder</h3>
                                </div>
                                <div className="pricingtable-price"> 
                                    <h3 className="pricingtable-bx">49<small> Classes</small>
                                    <h3 className="pricingtable-bx" >
                                            <small className="flex" style={{fontWeight:'bold'}}> 
                                                <small className="strikethrough">
                                                    {/* <i className="fa fa-inr"></i>1000  */}
                                                    {base_regular}
                                                </small> 
                                                {/* <i className="fa fa-inr"></i> */}
                                                {base_actual}/class                
                                            </small>
                                            
                                        </h3>
                                    </h3>
                                    <ul className="pricingtable-features">
                                        <h3 className="pricingtable-bx flex" >
                                            <small className="strikethrough">
                                                {base_total_regular}
                                            </small>
                                            {base_total_actual}
                                        </h3>
                                    </ul>
                                </div>
                                <p className="text">A course for Newbies who want to dip their feet into the world of Coding.</p>
                                <ul className="pricingtable-features">
                                <h3 className="pricingtable-bx">Course Content</h3>
                                    <li>Scratch Programming</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>PWA</li>
                                <h3 className="pricingtable-bx"><small>Benifits</small></h3>
                                <li>7+ Projects & Quizzes</li>
                                    <li>1 Live Project</li>
                                    <li>Base-Builder Certificate</li>
                                </ul>
                                <div className="pricingtable-footer"> 
                                    <a href="https://www.edurific.com/curriculum.pdf" target="_blank" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>View Curriculum </a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6">
                        <div className={`${open === "p2" ? "pricingtable-wrapper style-1 active m-b30" : "pricingtable-wrapper style-1 center m-b30"}`} onMouseOver={() => setOpen("p2")}>
                            <div className="pricingtable-inner">
                            <h5 className="pricingtable-bx" style={{marginTop:'-35px', marginBottom:'10px'}} > 
                                        <small style={{color:'white', backgroundColor:'navy',padding:'4px 8px 2px 8px', fontWeight:'bolder',borderRadius:'8px',fontSize:'25px' }}>Save 25%</small>
                                    </h5>
                                <div className="pricingtable-title">
                                    <h3 className="title">Super-Coder</h3>
                                </div>
                                <div className="pricingtable-price"> 
                                    <h3 className="pricingtable-bx">147<small> Classes</small>
                                    <h3 className="pricingtable-bx" >
                                            <small className="flex" style={{fontWeight:'bold'}}> 
                                                <small className="strikethrough">
                                                    {super_regular}
                                                </small>{super_actual}/class                           
                                            </small>
                                            
                                        </h3>
                                    </h3>
                                    <ul className="pricingtable-features">
                                    <h3 className="pricingtable-bx flex" >
                                    <small className="strikethrough">
                                        {super_total_regular}
                                    </small>
                                        {super_total_actual}
                                    </h3>
                                    </ul>
                                </div>
                                <p className="text">For those who need deeper understanding of Complex Coding Concepts</p>
                                <ul className="pricingtable-features">
                                <h3 className="pricingtable-bx">Course Content</h3>
                                    <li>Coding (Web)</li>
                                    <li>ChatBot</li>
                                    <li>Python</li>
                                    <li>Artificial Intelligence</li>
                                    <li>Robotics</li>
                                <h3 className="pricingtable-bx"><small>Benifits</small></h3>
                                <li>25+ Projects & Quizzes</li>
                                    <li>3+ Live Projects</li>
                                    <li>Super-Coder Certificate</li>
                                </ul>
                                <div className="pricingtable-footer"> 
                                    <a href="https://www.edurific.com/curriculum.pdf" target="_blank" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>View Curriculum </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-12">
                        <div className={`${open === "p3" ? "pricingtable-wrapper active style-1 m-b30" : "pricingtable-wrapper style-1 center m-b30"}`} onMouseOver={() => setOpen("p3")}>
                            <div className="pricingtable-inner">
                            <h5 className="pricingtable-bx" style={{marginTop:'-35px', marginBottom:'10px'}} > 
                                        <small style={{color:'white', backgroundColor:'navy',padding:'4px 8px 2px 8px', fontWeight:'bolder',borderRadius:'8px',fontSize:'25px' }}>Save 30%</small>
                                    </h5>
                                <div className="pricingtable-title">
                                    <h3 className="title">Champion-Coder</h3>
                                </div>
                                <div className="pricingtable-price"> 
                                    <h3 className="pricingtable-bx" >301<small> Classes </small>
                                        <h3 className="pricingtable-bx" >
                                            <small className="flex" style={{fontWeight:'bold'}}> 
                                            <small className="strikethrough">
                                                    {champion_regular}
                                                </small> {champion_actual}/class                           
                                            </small>
                                            
                                        </h3>
                                    </h3>
                                    <ul className="pricingtable-features">
                                    <h4 className="pricingtable-bx flex" >
                                    <small className="strikethrough">
                                                {champion_total_regular}
                                    </small>
                                        {champion_total_actual}
                                    </h4>
                                    </ul>
                                   
                                    
                                </div>
                                <p className="text">A perfect course to solve real-world problem to create better future.</p>
                                <ul className="pricingtable-features">
                                <h3 className="pricingtable-bx">Course Content</h3>
                                    <li>Coding (Web)</li>
                                    <li>Artificial Intelligence</li>
                                    <li>Robotics</li>
                                    <li>Blockchain</li>
                                    <li>Automation</li>
                                <h3 className="pricingtable-bx"><small>Benifits</small></h3>
                                <li>50+ Projects and Quizzes</li>
                                    <li>10+ Live Projects</li>
                                    <li>Champion-Coder Certificate</li>
                                </ul>
                                <div className="pricingtable-footer"> 
                                    <a href="https://www.edurific.com/curriculum.pdf" target="_blank" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>View Curriculum </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Pricing;
import React,{ Component } from "react";
import './rough.css'
import { FaCode, FaDesktop, } from "react-icons/fa";
import { ImPencil } from "react-icons/im";



export class Page3 extends Component{
    render(){
        return(
            <div>
                <div className="head">
                    <h2 style={{fontSize:'40px', color:'rgba(13, 218, 91, 0.904)', marginBottom:'30px'}}>What I do</h2>
                </div>
                <div className="box">
                    <div className="head">
                    <h2><FaCode/><br></br> Web Development</h2>
                    </div>
                    <div className="body">
                        <p>"Programming isn't about what you know; it's about what you can figure out."</p>
                    </div>
                    <div className="btn">
                        <button>Read More</button>
                    </div>
                </div>
                <div className="box">
                    <div className="head">
                     <h2><FaDesktop /><br /> Web Developer</h2>
                    </div>
                    <div className="body">
                        <p>""The public is more familiar with bad design than good design."</p>
                    </div>
                    <div className="btn">
                        <button style={{marginTop:'19%'}}>Read More</button>
                    </div>
                </div>
                <div className="box">
                    <div className="head">
                    <h2><ImPencil/><br /> Writting</h2>
                    </div>
                    <div className="body">
                        <p>Keep it brief. While there is no definitive number of words that this should be.</p>
                    </div>
                    <div className="btn">
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Page3
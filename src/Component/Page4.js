import React,{Component} from "react";
import { GrInstagram,GrFacebook,GrTwitter } from "react-icons/gr";

const envelope={
    height:'100vh',
    paddingTop:'15%',
    marginTop:'30%',
    backgroundColor:'rgba(48, 53, 47, 0.952)',
    color:'white',
}

const head={
    fontWeight:'bold',
    fontSize:'30px',
    marginBottom:'10%'
}

const body={
    fontSize:'25px',
    fontWeight:'bold',
}
 const icon={
    marginLeft:'30px',
    display:'inline-grid',
    fontSize:'30px',
    // backgroundColor:'rgba(13, 218, 91, 0.904)',
    // borderRadius:'50%',

 }
export class Page4 extends Component{
    render(){
        return(
            <div>
                <div className="envelope" style={envelope}>
                  <div className="head" style={head}>
                    <h1>Amusa Shuaib Olanrewaju</h1>
                  </div>  
                  <div className="body" style={body}>
                    <p>If you need more info. Click on any of the icons below</p>
                  </div>
                 <div className="iconS" style={{marginTop:'10%',}}>
                 <div className="icon" style={icon}>
                    <GrTwitter/>
                  </div>
                  <div className="icon" style={icon}>
                   < GrFacebook/>
                  </div>
                  <div className="icon" style={icon}>
                   <GrInstagram/>
                  </div>
                 </div>
                </div>   
            </div>
        )
    }
}
export default Page4
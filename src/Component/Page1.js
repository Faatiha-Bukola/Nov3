import React,{Component  } from "react";

const container={
    display:'flex',
    paddingLeft:'5%',
    paddingTop:'4%',

    
}

export class Page1 extends Component{
    render(){
        return(
            <div>
                <div className="container" style={container}>
                    <div className="name">
                        <h2>Olanrewaju</h2>
                    </div>
                    <div className="nav">
                        <nav >
                            <ul type='none' style={{display:'inline-flex', marginLeft:'',}}>
                                <li><a href="#" style={{textDecoration:'none',}}>Home</a></li>
                                <li><a href="#" style={{textDecoration:'none',}}>About </a></li>
                                <li><a href="#" style={{textDecoration:'none',}}>Services</a></li>
                                <li><a href="#" style={{textDecoration:'none',}}>Works</a></li>
                                <li><a href="#" style={{textDecoration:'none',}}>Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="button" style={{marginLeft:'30%'}}>
                        <button style={{}}><a href="" style={{textDecoration:'none',}}>Get in touch</a></button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Page1
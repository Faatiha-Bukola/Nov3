import React,{Component} from "react";
import './rough.css'


const About={color:'rgba(13, 218, 91, 0.904)',
        fontSize:'35px',
        fontWeight:'bold',
        marginLeft:'20%'}
const body={ fontWeight:'bold',
            fontSize: '25px',
            fontFamily: 'Segoe UI',             
}
const button={
    borderRadius:'20px',
    backgroundColor:'rgba(13, 218, 91, 0.904)',
    borderColor:'rgba(13, 218, 91, 0.904)',
    marginTop:'10px',
    marginLeft:'5px'
}

const container={ 
    backgroundColor:'white',
    padding:'10%',
    margin:'10px',
}

export class Page2 extends Component{
    render(){
        return(
            <div className="Container" style={container}>
                <div className="image" style={{display:'flex', height:'300px', position:'absolute',  paddingTop:'4%',   }}>
                    <img src="../../images/smiling-man.jpg" alt="" />
                </div>
                <div className="content" >
                <div className="about" style={About} >
                    <p>About Me</p>
                </div>
                <div className="body" style={body}>
                    <p>My name is Amusa Shuaib Olanrewaju, A student of Olabisi Onabnjo University, I'm a web Developer and also a UI/UX Designer. Deep FAN of Olamide music cause it helps me relax, cats and dogs? I will go with i love working but sometimes i hate it when i am unproductive. I plan on starting a Blog soon. So see you all there. Laughs, if you need any of my services. Click on the link below.</p>
                </div>
                <div className="btn">
                    <button style={button}> <a href="http://wa.link/2vl9xr" style={{textDecoration:'none',color:'white',fontSize:'18px', padding:'2px', margin:'2px', fontWeight:'bold'}} >Let's Talk</a></button>
                </div>
                </div>

            </div>
        )
    }
}
export default Page2
import React from 'react';
import './Skill.css';
import react from '../assets/Reactjs.png'
import js from '../assets/Js.png'
import node from '../assets/node.png'
import cpp from '../assets/cpp.png'
import html from '../assets/html.png'
import bootstrap from '../assets/Bootstrap.png'
const Skill = () => {
    return (
        <div className=' contain skills ' id='skills' data-aos="zoom-out-right">
            <h1>Skills</h1><hr />
            <div className='skill' >
                <div className="skill_sh"  >
                    <img src={html} alt="" style={{background:"wheat",borderRadius:"10px"}} />
                    <h3 className='text-align-center'>HTML</h3>
                </div>
                <div className="skill_sh" >
                    <img src={cpp} alt="" style={{background:"wheat",borderRadius:"10px"}}/>
                    <h3 className='text-align-center'>C++</h3>
                </div>
                <div className="skill_sh" >
                    <img src={js} alt="" style={{background:"wheat",borderRadius:"10px"}}/>
                    <h3 className='text-align-center'>Js</h3>
                </div>
                <div className="skill_sh" >
                    <img src={node} alt="" style={{background:"wheat",borderRadius:"10px"}}/>
                    <h3 className='text-align-center'>Node</h3>
                </div>
                <div className="skill_sh" >
                    <img src={react} alt="" style={{background:"wheat",borderRadius:"10px"}}/>
                    <h3 className='text-align-center'>react</h3>
                </div>
                <div className="skill_sh" >
                    <img src={bootstrap} alt="JavaScript" style={{background:"wheat",borderRadius:"10px"}}/>
                    <h3 className='text-align-center'>Bootstrap</h3>
                </div>
            </div>
                <button onClick={()=>{window.open("https://github.com/abdulhannan63")}} className='btn mt-2 btn-lg-sm btn-lg btn-outline-warning btn-lg m-auto align-items-center d-block'>Explore More</button>
        </div>
    )
}

export default Skill
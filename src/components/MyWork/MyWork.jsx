import React from 'react'
import './MyWork.css'
import { data } from './Data'
import gitIcon from '../../assets/gitIcon.png'
const MyWork = () => {
    return (
        <>
            <div className="contain mywork" id='mywork' data-aos="zoom-out-right">
                <div className="mywork-title">
                    <h1>My Work</h1><hr />
                </div>
                <div className="worklist d-block d-lg-flex  " >
                    <div className="main  mt-lg-2 mb-2">
                        <img src={data[0].img} alt="" />
                        <div className="caption">
                            <a href="https://abdulhannan63.github.io/TodoList/"><img src={gitIcon} alt="" /></a>
                            {/* <img src={gitIcon} alt="" /> */}
                        </div>
                    </div>
                    <div className="main  mt-lg-2 mb-2">
                        <img src={data[1].img} alt="" />
                        <div className="caption">
                            <a href="https://abdulhannan63.github.io/ReactWebsite_121/"><img src={gitIcon} alt="" /></a>
                        </div>
                    </div>
                    <div className="main  mt-lg-2 mb-2">
                        <img src={data[3].img} alt="" />
                        <div className="caption">
                            <a href="http://"><img src={gitIcon} alt="" /></a>
                        </div>
                    </div>
                </div>
                <button onClick={()=>{window.open("https://github.com/abdulhannan63")}} className='btn mt-2 btn-lg-sm btn-lg btn-outline-warning btn-lg m-auto align-items-center d-block'>View All on Github</button>
            </div>
        </>
    )
}

export default MyWork
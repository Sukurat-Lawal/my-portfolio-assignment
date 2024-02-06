import React from "react";
import laptop from '../assets/laptop.png';
import cursor from '../assets/cursor.png';
import server from '../assets/server.png';
import icon from '../assets/icon.png';
export const About = () => {
    return (
        <section class="contain" id="about">
            <h2 className="context">About</h2>
            <div className="content">
                <img 
                src={laptop} alt="us"className={laptop} />
                <ul className="aboutItems">
                    <li className='aboutItem'>
                        <img
                         src={cursor} alt="mine"className={cursor} />
                        <div className="aboutItemText">
                            <h3>Fontend Developer</h3>
                            <p>I'am a frontend developer with experience in building responsive and optimised sites</p>
                                           
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img 
                        src={server} alt="we" className={server} />
                        <div className={"abourItemText"}>
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fast and optimised back-end sysytems and APIs</p>

                        </div>
                        
                    </li>
                    <li>
                        <li className="aboutItem">
                            <img 
                            src={icon} alt="Icon" className={icon} />
                            <div className="aboutItemIext">
                                <h3>Designer</h3>
                                <p>
                                    I have designed multiple landing pages and have created design systems as well
                                </p>
                          </div>
                        </li>
                    </li>
                </ul>

            </div>
        </section>
    );
};
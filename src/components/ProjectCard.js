import React from "react";
import { getImageUrl } from "../image";

export const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo, source },
}) => {
    return (
        <div className="containerss">
            <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className="image" />
            <h3 className="tittle">{title}</h3>
            <p className="descriptions">{description}</p>
            <ul className="skilled">
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className="skills">
                            {skill}
                        </li>
                    )
                })}

            </ul>
            <div className="Links">
                <a href={demo} className="linked">
                    Demo
                </a>
                
                <a href={source} className="links"></a>
            </div>
        </div>

    )
            }
                    
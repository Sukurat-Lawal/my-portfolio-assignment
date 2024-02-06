import React from "react";

import Projects from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
    return (
        <section className="coontainer" id="Project">
            <h2 className="title">Project</h2>
            <div className="projects">
                {Projects.map((Project, id) => {
                    return <ProjectCard key={id} project={Project} />
                })}
            </div>
        </section>
    )
}

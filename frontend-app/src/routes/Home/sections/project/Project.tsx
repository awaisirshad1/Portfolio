import "../../../../styles/components/main-content/home/project/project.css"
import { Component, For } from "solid-js";
import { SvgIcon } from "../../../../types/SvgIcon";
import { Project } from "../../../../types/Project";
import TopRightArrow from "../../../../components/icons/TopRightArrow"
import C from "../../../../assets/icons/svg/techstacks/c.svg"

interface ProjProps {
  projects: Project[];
}

const techStackIconMap: Record<string, SvgIcon> = {
  "C": C
}

const getTechStackIcons = (arr: string[]): SvgIcon[] => {
  return arr.flatMap(name => techStackIconMap[name] ? [techStackIconMap[name]] : []);
}

const ProjectComponent: Component<ProjProps> = (props) => {
  
  return (
    <div class="project-container-div">
      <For each={props.projects}>
        {(project) => (
          <div class="project-component-card">
            <div class="title-bar">
              <a class ="project-link" href={project.projectLink} target="_blank">
                <span>{project.projectName}</span>
                <TopRightArrow height={28} width={28}/>
              </a>
            </div>
            <div class="tech-stack">
              <For each={getTechStackIcons(project.techStack)}>
                {(Icon) => (
                  <Icon height={40} width={40} class="tech-stack-icon"/>
                )}
              </For>
            </div>
            <div class="project-details">
              {project.description}
            </div>
          </div>
        )}
      </For>
      
    </div>
  );
};

export default ProjectComponent;

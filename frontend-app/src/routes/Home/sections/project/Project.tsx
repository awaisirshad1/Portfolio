import { Component, For } from "solid-js";
import "../../../../styles/components/main-content/home/project/project.css"
import { Project } from "../../../../types/Project";
import TopRightArrow from "../../../../components/icons/TopRightArrow"
// import CLanguage from "../../../../components/icons/CLanguage";
import C from "../../../../assets/icons/svg/techstacks/c.svg"

interface ProjProps {
  projects: Project[];
}

const ProjectComponent: Component<ProjProps> = (props) => {
  // console.log(C)
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
              {/* <CLanguage height={28} width={28} /> */}
              <C height={40} width={40}/>
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
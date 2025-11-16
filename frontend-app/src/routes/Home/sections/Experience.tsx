import { Component, createSignal, onMount } from "solid-js";
import "../../../styles/components/main-content/home/experience.css"
import { Experience } from "../../../types/Experience";
import Timeline from "./experience/Timeline";

const ExperienceComponent: Component = () => {
  const [experiences, setExperiences] = createSignal<Experience[]>([]);
  
  const loadExperiences = async () => {
    try {
      const response = await fetch ("/experience.json");
      const data = await response.json();
      const parsedExperiences: Experience[] = data.map((exp: any) => ({
        ...exp,
        startDate: new Date(exp.startDate),
        endDate: new Date(exp.endDate)
      }));
      setExperiences(parsedExperiences)
    } catch (error) {
      console.error("Error loading experiences: ", error);
    }
  }

  onMount(() => {
    loadExperiences();
  })

  return (
    <div class="experience-container-div">
      <p class="experience-section-header">Experience</p>
      <Timeline experiences={experiences()}></Timeline>
    </div>
  );
};


export default ExperienceComponent;
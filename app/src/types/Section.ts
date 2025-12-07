import { Experience } from "./experience"
import { Project } from "./project"

export type Section = {
  title: string,
  description: string,
  items: Array<Experience> | Array<Project>
}
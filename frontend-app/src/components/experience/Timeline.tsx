// Timeline.tsx
import { For, Component } from "solid-js";
import { Experience } from "../../types/Experience";

interface TimelineProps {
  experiences: Experience[];
}

const Timeline: Component<TimelineProps> = (props) => {
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <div class="timeline">
      <For each={props.experiences}>
        {(experience) => (
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <span class="job-title">{experience.jobTitle}</span>
                <span class="org-name">{experience.orgName}</span>
                <span class="date-range">
                  {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                </span>
              </div>
              <p class="description">{experience.description}</p>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default Timeline;
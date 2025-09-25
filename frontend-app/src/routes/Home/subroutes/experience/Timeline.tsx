// Timeline.tsx
import { For, Component } from 'solid-js';
import { Experience } from '../../../../types/Experience';
import "../../../../styles/components/main-content/home/experience/timeline.css"

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
                <h3 class="job-title">{experience.jobTitle}</h3>
                <h4 class="org-name">{experience.orgName}</h4>
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
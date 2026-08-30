import type { Skill } from './skills';
import type { Experience } from './types';
import type { ResumePreset } from './presets';

export function selectSkillsForPreset(
  skills: Skill[],
  preset: ResumePreset,
): Skill[] {
  return skills.filter((skill) => {
    const matchesArea =
      !preset.targetAreas?.length ||
      preset.targetAreas.some((area) =>
        skill.areas.includes(area),
      );

    const matchesCategory =
      !preset.targetSkillCategories?.length ||
      preset.targetSkillCategories.includes(
        skill.category,
      );

    return matchesArea && matchesCategory;
  });
}

export function selectExperiencesForPreset(
  experiences: Experience[],
  preset: ResumePreset,
): Experience[] {
  const targetGroups = preset.targetExperienceGroups;

  if (!targetGroups?.length) {
    return experiences;
  }

  return experiences
    .map((experience) => {
      const selectedEngagements = experience.engagements
        .map((engagement) => {
          const selectedHighlights =
            engagement.highlights.filter((highlight) =>
              highlight.groups.some((group) =>
                targetGroups.includes(group),
              ),
            );

          if (selectedHighlights.length === 0) {
            return null;
          }

          return {
            ...engagement,
            highlights: selectedHighlights,
          };
        })
        .filter(
          (engagement) => engagement !== null,
        );

      if (selectedEngagements.length === 0) {
        return null;
      }

      return {
        ...experience,
        engagements: selectedEngagements,
      };
    })
    .filter(
      (experience) => experience !== null,
    );
}
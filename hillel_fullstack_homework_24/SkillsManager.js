export class SkillsManager {
  constructor() {
    this.skills = [];
  }

  addSkill(skill) {
    if (typeof(skill) === 'string' && skill.length >= 2) {
      this.skills.push(skill);
      return skill;
    } else {
      return null;
    }
  }

  getAllSkills() {
    return this.skills;
  }
}
import * as aboutData from '../data/about.json';
export function renderAboutInfo() {
const aboutTitleElement = document.querySelector('.about__title');
const aboutNameElement = document.querySelector('.about__name');
const aboutEducationElement = document.querySelector('.about__education');
const aboutDescriptionElement = document.querySelector('.about__description');
const aboutProfilePictureElement = document.querySelector('.about__profile-picture');
const technicalSkillsListElement = document.querySelector('.skills__list--technical');
const softSkillsListElement = document.querySelector('.skills__list--soft');

if (aboutTitleElement && aboutNameElement && aboutEducationElement && aboutDescriptionElement && aboutProfilePictureElement && technicalSkillsListElement && softSkillsListElement) {
aboutTitleElement.textContent = 'About Me';
aboutNameElement.textContent = aboutData.name;
aboutEducationElement.textContent = aboutData.title;
aboutDescriptionElement.textContent = aboutData.description;
aboutProfilePictureElement.setAttribute('src', aboutData.profilePicture);

aboutData.technicalSkills.forEach(skill => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="${skill.iconClass}"></i> ${skill.name}`;    
    technicalSkillsListElement.appendChild(li);
});

aboutData.softSkills.forEach(skill => {
    const li = document.createElement('li');
    li.innerHTML = `<i class= "${skill.iconClass}"></i> ${skill.name}`;
    softSkillsListElement.appendChild(li);
    
});
}
}
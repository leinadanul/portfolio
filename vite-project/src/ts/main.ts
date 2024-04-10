const menu = document.querySelector('.header__menu');
const openButton = document.querySelector('.header__open');
const closeButton = document.querySelector('.header__close');

openButton?.addEventListener('click', () => {
    menu?.classList.toggle('header__menu--hidden');
    openButton.classList.add('header__menu--hidden');
    closeButton?.classList.remove('header__menu--hidden');
});

closeButton?.addEventListener('click', () => {
    menu?.classList.toggle('header__menu--hidden');
    openButton?.classList.remove('header__menu--hidden');
    closeButton.classList.add('header__menu--hidden');
});


import * as aboutData from '../data/about.json';

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
    li.textContent = skill;
    technicalSkillsListElement.appendChild(li);
});

aboutData.softSkills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    softSkillsListElement.appendChild(li);
});
}

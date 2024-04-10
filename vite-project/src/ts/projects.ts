import * as projectsData from '../data/projects.json';

export function renderProjectInfo(){
const projectsContainer = document.getElementById('projects');

if (projectsContainer) {
projectsData.pojects.forEach(project => {
const projectCard = document.createElement('article');
projectCard.classList.add('project__card');

projectCard.innerHTML = `
    <header class="project__header">
    <h3>${project.title}</h3>
    <span>${project.date}</span>
    </header>
    <main>
    <img class="project__image" src="${project.image}" alt="${project.title}"/>
    <p class="project__description">${project.description}</p>
    </main>
    <footer>
    <p>Technologies used </p>
    <ul class="project__list-technologies">
        ${project.tags.map(tech => `<li class="project__item">${tech}</li>`).join('')}
    </ul>
    <p class="project__link">GitHub Repository: <a href="${project.githubLink}">${project.title}</a></p>
    </footer>
`;

projectsContainer.appendChild(projectCard);
});
}
}
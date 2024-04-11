import * as projectsData from '../data/projects.json';

export function renderProjectInfo() {
    const projectsContainer = document.getElementById('projects');
    const modal = document.getElementById('modal');
    
    if (projectsContainer && modal) {
        projectsData.pojects.forEach(project => {
            const projectCard = document.createElement('article');
            projectCard.classList.add('project__card');

            const projectTitle = document.createElement('h3');
            projectTitle.textContent = project.title;

            const projectImage = document.createElement('img');
            projectImage.classList.add('project__image');
            projectImage.src = project.image;
            projectImage.alt = project.title;

            const projectDate = document.createElement('span');
            projectDate.classList.add('project__date');
            projectDate.textContent = project.date;

            projectCard.appendChild(projectTitle);
            projectCard.appendChild(projectImage);
            projectCard.appendChild(projectDate);

            projectCard.addEventListener('click', () => {
                const modalContent = document.getElementById('modal-content');

                if (modalContent) {
                    modalContent.innerHTML = `
                        <header class="project__header">
                            <h3>${project.title}</h3>
                            <span>${project.date}</span>
                        </header>
                        <main>
                            <img class="project__image" src="${project.image}" alt="${project.title}"/>
                            <p class="project__description">${project.description}</p>
                        </main>
                        <footer>
                            <p>Technologies used</p>
                            <ul class="project__list-technologies">
                                ${project.tags.map(tech => `<li class="project__item">${tech}</li>`).join('')}
                            </ul>
                            <p class="project__link">GitHub Repository: <a href="${project.githubLink}">${project.title}</a></p>
                        </footer>
                    `;
                    modal.style.display = 'block';
                }
            });

            if (projectsContainer) {
                projectsContainer.appendChild(projectCard);
            }
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

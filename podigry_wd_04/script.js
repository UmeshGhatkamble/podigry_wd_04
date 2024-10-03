const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 70 },
];

const projects = [
    { title: 'Project 1', description: 'This is Amazon Website clone.', link: 'https://github.com/UmeshGhatkamble/amazon-website.git' },
   /* { title: 'Project 2', description: 'Description for project 2.', link: 'https://github.com/yourprojectlink2' },*/
];

function displaySkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.innerHTML = `<strong>${skill.name}</strong><div class="progress"><div class="progress-bar" style="width: ${skill.level}%"></div></div>`;
        skillsContainer.appendChild(skillElement);
    });
}

function displayProjects() {
    const projectContainer = document.getElementById('projectContainer');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p><a href="${project.link}" target="_blank">View on GitHub</a>`;
        projectContainer.appendChild(projectElement);
    });
}

document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const button = document.getElementById('themeToggle');
    button.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

document.getElementById('addProject').addEventListener('click', () => {
    const title = prompt("Enter project title:");
    const description = prompt("Enter project description:");
    const link = prompt("Enter project GitHub link:");
    if (title && description && link) {
        projects.push({ title, description, link });
        displayProjects();
    }
});

displaySkills();
displayProjects();

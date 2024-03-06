// Exemplo de projetos
const projects = [
    
    { name: 'Projeto 1', description: 'Descrição do Projeto 1', url: 'https://example.com/projeto1' },
    { name: 'Projeto 2', description: 'Descrição do Projeto 2', url: 'https://example.com/projeto2' },
    { name: 'Projeto 3', description: 'Descrição do Projeto 3', url: 'https://example.com/projeto3' },
    // Adicione mais projetos conforme necessário
];

document.addEventListener('DOMContentLoaded', function() {
    const projectsGrid = document.getElementById('projects-grid');

    // Adiciona os projetos ao grid
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        const projectHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank">Veja o projeto</a>
        `;

        projectElement.innerHTML = projectHTML;
        projectsGrid.appendChild(projectElement);
    });
});

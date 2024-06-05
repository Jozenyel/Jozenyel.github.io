let technology = document.querySelector('.technologies')
technology.style.display = 'none';
technology.style.cursor = 'pointer';

function showTechonologies() {
    if (technology.style.display === 'none') {
        technology.style.display = 'block';
    } else if (technology.style.display === 'block'){
        technology.style.display = 'none';
    }
};

document.querySelector('.technology-section').addEventListener('click', showTechonologies)


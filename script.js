// script.js

const dropdownContainers = document.querySelectorAll('.dropdown-container');

dropdownContainers.forEach((container) => {
    const dropdownToggle = container.querySelector('.dropdown-toggle');
    const dropdownMenu = container.querySelector('.dropdown-menu');
    const dropdownItems = container.querySelectorAll('.dropdown-menu li');

    dropdownToggle.addEventListener('click', () => {
        dropdownMenu.classList.toggle('active');
    });

    dropdownItems.forEach((item) => {
        item.addEventListener('click', () => {
            dropdownItems.forEach((i) => i.classList.remove('active'));
            item.classList.add('active');
            dropdownToggle.querySelector('.selected').textContent = item.textContent;
            dropdownMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', (event) => {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});

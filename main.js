"use strict";
const ToggleButton = document.getElementById("toggle-skills");
const Skills = document.getElementById('skills');
ToggleButton.addEventListener('click', () => {
    if (Skills.style.display === 'none') {
        Skills.style.display = 'block';
    }
    else {
        Skills.style.display = 'none';
    }
});
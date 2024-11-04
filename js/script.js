// Temporary Javascript to stop form submission

document.querySelector("button[type='submit']").addEventListener("click", (event) => {
    event.preventDefault();
    alert("Form Logic Not Yet Implemented!");
    return false;
});

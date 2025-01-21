document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! I will get back to you soon.");
    });
});

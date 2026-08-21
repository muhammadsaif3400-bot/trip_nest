const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach(button => {

    button.addEventListener("click", function () {

        const icon = this.querySelector("i");

        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");

        if (icon.classList.contains("fa-solid")) {
            icon.style.color = "#ff3b5c";
        } else {
            icon.style.color = "#222";
        }

    });

});




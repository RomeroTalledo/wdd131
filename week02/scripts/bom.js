document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("favchap");
    const addButton = document.querySelector("button");
    const list = document.getElementById("list");

    addButton.addEventListener("click", function () {
        const chapter = input.value.trim();
        
        if (chapter !== "") {
            const li = document.createElement("li");
            li.textContent = chapter;

            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = "❌";
            deleteButton.classList.add("delete");

            deleteButton.addEventListener("click", function () {
                list.removeChild(li);
                input.focus();
            });

            li.appendChild(deleteButton);
            list.appendChild(li);

            input.value = "";
            input.focus();
        } else {
            alert("Please enter a book and chapter.");
            input.focus();
        }
    });

    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});

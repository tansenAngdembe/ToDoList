window.addEventListener("load", () => {
    const form = document.querySelector(".myForm");
    const input = document.querySelector(".textArea");
    const list_element = document.querySelector("#task");
    // done with this code
    const displayMessage = document.querySelector(".message")
    const closeButton = document.querySelector(".close");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskValue = input.value;
        if (!taskValue) {
            displayMessage.classList.add("show");

            closeButton.addEventListener("click", () => {
                displayMessage.classList.remove("show");
                list_element.removeChild(task_el);
                list_element.removeChild(dateTime);
            });
        }
        const currentDateTime = new Date();
        const dateTime = document.createElement("div");
        dateTime.classList.add("displayDateTime");
        dateTime.innerText = currentDateTime;
        list_element.appendChild(dateTime);

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        const task_input_el = document.createElement("textarea");
        task_input_el.classList.add("text")
        task_input_el.type = "text";
        task_input_el.value = taskValue;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);
        task_el.appendChild(task_content_el);

        list_element.appendChild(task_el);


        const action_el = document.createElement("div");
        action_el.classList.add("action");

        const edit_el = document.createElement("button");
        edit_el.classList.add("edit");
        edit_el.innerText = "Edit";

        const delete_el = document.createElement("button");
        delete_el.classList.add("delete");
        delete_el.innerText = "Delete";

        action_el.appendChild(edit_el);
        action_el.appendChild(delete_el);

        task_el.appendChild(action_el)

        edit_el.addEventListener("click", () => {
            if (edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                edit_el.innerText = "Save";
            }
            else{
                task_input_el.setAttribute("readonly","readonly");
                edit_el.innerText="Edit";
            };
        });      
        delete_el.addEventListener("click", () => {
            list_element.removeChild(task_el);
            list_element.removeChild(dateTime);
        });
    });
});
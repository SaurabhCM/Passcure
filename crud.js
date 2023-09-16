var selectedRow = null

function showAlert(message, className) {
    const div = document.createElement("div")
    div.className = `alert alert-${className}`
    div.appendChild(document.createTextNode(message))
    const container = document.querySelector('.container')
    const main = document.querySelector('.main')
    container.insertBefore(div, main)

    setTimeout(() => document.querySelector('.alert').remove(), 1000)

}

//Add

document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();
    // Get Form Values
    const firstName = document.querySelector("#username").value;
    const pass = document.querySelector("#pass").value;
    const sname = document.querySelector("#sname").value;
    // validate
    if (firstName == "" || pass == "" || sname == "") {
        showAlert("Please fill in all fields", "danger");
    }
    else {
        if (selectedRow == null) {
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${firstName}</td>
            <td>${pass}</td>
            <td>${sname}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a> 
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Student Added", "success")
        }

        else {
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = pass;
            selectedRow.children[2].textContent = sname;
            selectedRow = null;
            showAlert("Student Info Edited", "info");
        }

        clearfields();

    }
});


//delete data
document.querySelector("#student-list").addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove()
        showAlert("Student Data Deleted", "danger");
    }
});


// Clear All Fields
function clearfields() {
    document.querySelector("#username").value = "";
    document.querySelector("#pass").value = "";
    document.querySelector("#sname").value = "";
}

//edit

document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("edit")) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#username").value = selectedRow.children[0].textContent;
        document.querySelector("#pass").value = selectedRow.children[1].textContent;
        document.querySelector("#sname").value = selectedRow.children[2].textContent;
    }
});


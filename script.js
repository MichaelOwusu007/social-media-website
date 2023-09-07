
let displaysettings = document.getElementById('displaysettings');
let icontoggle = document.getElementById('icontoggle');
let darkBtn = document.getElementById('dark-btn');
let cursor = document.getElementById('cursor');
let consearchInput = document.getElementById('consearch-input'); 

icontoggle.onclick = function displaysettingstoggle() {
    displaysettings.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
        cursor.style.color = "#fff";
    } else {
        localStorage.setItem("theme", "light");
        cursor.style.color = "#000";
    }
}

if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
    cursor.classList.remove("colorchange");
} else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
    cursor.classList.add("colorchange");
} else {
    localStorage.setItem("theme", "light");
}

consearchInput.addEventListener("input", function () {

    const searchText = consearchInput.value.toLowerCase();
    const onlineList = document.querySelectorAll(".online-list");

    onlineList.forEach((listItem) => {
        const username = listItem.querySelector("p").textContent.toLowerCase();
        if (username.includes(searchText)) {
            listItem.style.display = "flex";
        } else {
            listItem.style.display = "none"; 
        }
    });
});

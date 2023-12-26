const current_year_element = document.getElementById("current_year");
const current_year = new Date().getFullYear();
current_year_element.setAttribute("datetime", current_year);
current_year_element.textContent = current_year;
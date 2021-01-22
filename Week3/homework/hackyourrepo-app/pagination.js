import{ contributors, rightSide } from '/repo.js'
export let current_page=2;
export let rows=5;
export  function setPagePagination(response,contributors ,rowsPerPage) {
  let page_count = Math.ceil(response.length / rowsPerPage);
  for (let i = 1; i <= page_count; i++) {
      const btn =  paginationButton(i, response);
      contributors.appendChild(btn) }
}
export function paginationButton(page , response) {
const button = document.createElement("button");
button.className = "button";
button.innerText = page;

if (current_page === page) {
  button.classList.add("active");
}
button.addEventListener("click", function () {
  current_page = page;
  rightSide(response, rows, current_page);
});

return button;
} 

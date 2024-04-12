const modal = document.querySelector("#task-modal");
const modalBtn = document.querySelector("#add-task");
const closeBtn = document.getElementById("#close");

modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

export function updateTasksPanel(index) {
  const tasksHeader = document.querySelector(".task-name-h1");
  const projectName =
    document.querySelectorAll("#project-item")[index].textContent;
  tasksHeader.textContent = projectName;

  console.log(projectName);
}

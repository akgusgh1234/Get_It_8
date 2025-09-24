let tasks = [];

document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return; // 빈 값 방지
  tasks.push(input.value);
  input.value = "";
  render();
});

const render = () => {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    li.addEventListener("click", () => {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
      } else {
        li.style.textDecoration = "line-through";
      }
    });
   
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      render();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
};
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
  list.innerHTML = ""; // 초기화
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
  });
};
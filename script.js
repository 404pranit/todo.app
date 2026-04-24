const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');

addBtn.onclick = addTask;
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;

  span.onclick = () => span.classList.toggle('done');

  const del = document.createElement('button');
  del.textContent = 'X';
  del.className = 'small-btn';
  del.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(del);
  list.appendChild(li);

  input.value = '';
}

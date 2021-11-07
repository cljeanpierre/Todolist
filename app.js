const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;

  list.innerHTML += html;

};

addForm.addEventListener('submit', e => {
    //prevent page from reloading each time a todo is added
    e.preventDefault();
    //trim removes any spaces before or after the string when adding a todo
  const todo = addForm.add.value.trim();
  console.log(todo);

  if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  }

});


//delete todos

list.addEventListener('click', e => {

  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});

const filterTodos = () => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach(() => todo.classList.add('filtered'));
};

// keyup event
search.addEventListener('keyup', () => {
  const term = search.value.trim();
  filterTodos(term);
});

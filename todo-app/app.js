const input = document.getElementById("inputTodo");
const button = document.getElementById("addTodo");
const contianerTodo = document.getElementById("contianer-todo");
const faCircle = document.querySelector(".fa-times-circle");

button.addEventListener("click", function () {
  let val = document.createElement("p");
  val.classList.add("val-p");
  val.textContent = input.value;
  faCircle.style.display = "block";
  contianerTodo.appendChild(val);

  faCircle.addEventListener("click", function () {
    val.remove("val-p");
  });
});

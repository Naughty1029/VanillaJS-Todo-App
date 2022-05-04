const addText = document.getElementById("addText");
const addBtn = document.getElementById("addButton");
const incompleteList = document.getElementById("incompleteList");
const completeList = document.getElementById("completeList");

const onClickAdd = () => {
  const inputText = addText.value;
  addText.value = "";
  createIncompleteList(inputText);
};

const deleteFromInCompleteList = (target) => {
  incompleteList.removeChild(target);
};

const createIncompleteList = (text) => {
  const li = document.createElement("li");
  li.className = "list";

  const div = document.createElement("div");
  div.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromInCompleteList(completeButton.parentNode);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    const div = document.createElement("div");
    div.innerText = text;
    const rebackButton = document.createElement("button");
    rebackButton.innerText = "もとに戻す";
    rebackButton.addEventListener("click", () => {
      const deleteTarget = rebackButton.parentNode;
      completeList.removeChild(deleteTarget);

      const text = rebackButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(div);
    addTarget.appendChild(rebackButton);

    completeList.appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromInCompleteList(deleteButton.parentNode);
  });

  li.appendChild(div);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  incompleteList.appendChild(li);
};

addBtn.addEventListener("click", () => onClickAdd());

console.log('background is running');

chrome.browserAction.onClicked.addListener(() => {
    let newWindow = window.open("", null, "left=1000,top=300,height=300,width=500,status=yes,toolbar=no,menubar=no,location=yes");
    const box = newWindow.document.createElement('div');
    box.style.border = "thin solid black";
    box.style.height = "230px";
    box.style.width = "450px";
    box.style.marginLeft = "15px"
    newWindow.document.body.appendChild(box);
    // const checkBox = newWindow.document.createElement('input');
    // checkBox.setAttribute('type', 'checkBox');
    // box.appendChild(checkBox);
    // const header = newWindow.document.createElement('h1');
    // header.innerText = 'fasdfasdf';
    // newWindow.document.appendChild(header);

    let button = newWindow.document.createElement('button');
    button.setAttribute('id', 'button');
    button.setAttribute('type', 'button');
    button.style.height = "25px";
    button.style.marginLeft = "15px";
    button.innerText = "Add a task";
    newWindow.document.body.appendChild(button);




    button.addEventListener('click', addTask);

    function addTask() {
      let items = newWindow.document.getElementsByClassName('toDoItems')
      if (items.length >= 12) return;

      const checkBoxAndText = newWindow.document.createElement('div');
      checkBoxAndText.setAttribute('class', 'toDoItems')
      checkBoxAndText.style.display = 'flex';

      const checkBox = newWindow.document.createElement('input');
      checkBox.setAttribute('type', 'checkBox');
      checkBox.style.display = 'flex';

      const taskInput = newWindow.document.createElement('input');
      taskInput.setAttribute('type','text');
      taskInput.style.display = 'flex';
      taskInput.style.flexGrow = '1';
      taskInput.placeholder = "Add task";
      taskInput.style.border = "none";

      checkBoxAndText.appendChild(checkBox);
      checkBoxAndText.appendChild(taskInput);
      box.appendChild(checkBoxAndText);

      checkBox.addEventListener('change', () => {
        box.removeChild(checkBoxAndText);
      })

      //let items = newWindow.document.getElementsByClassName('toDoItems');
      //console.log(items);
      // .addEventListener('change', () => {
      //    let myDiv = newWindow.document.querySelector('#div3');
      //    box.removeChild(myDiv);
      // })

      // for(let i = 0; i < items.length; i++) {
      //   let oneCheckBox = items[i].querySelector('#test');
      //   oneCheckBox.addEventListener('change', () => {
      //     console.log('checking a box');
      //     box.removeChild(items[i]);
      //     delete items[i];
      //   });
      // }


    }

    // const myDiv1 = newWindow.document.querySelector('#div0');
    //   myDiv1.style.backgroundColor = "yellow";
    //   myDiv1.addEventListener('change', () => {
    //     myDiv1.style.backgroundColor = 'green';
    // })
});





// // within the popup window, we want isolated rows for each task on to do list
// // each row will begin with a checkbox, followed by a space for text to be inputted by the user describing the task
// // under designated space for tasks, add a button "add task" that adds new row w/ checkbox and space to describe task

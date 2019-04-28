// Target global variables

const listItem = document.querySelectorAll('.student-item');
const maxStudents = 10;

// A function to show what page should be displayed

  function showPage(list, page) {
    const min = (page * maxStudents) - maxStudents;
    const max = (page * maxStudents) - 1;
    for(let i = 0; i < list.length; i++) {
      if(max >= i && min <= i) {
        list[i].style.display = 'block';
      }
      else {
        list[i].style.display = 'none';
      }
    }
  }

// Function to append html nested witin eachother to make a ul that can be clicked to correctly
// Show the page that correspods with the correct li clicked

function appendPageLinks(list) {
  const divPage = document.querySelector('.page');
  const div = document.createElement('div');
  div.classList.add('pagination');
  divPage.appendChild(div);
  const ul = document.createElement('ul');
  div.appendChild(ul);

  // Creating Li and a element, that gets appended to the page via a for loop
  const pages = Math.ceil(list.length / maxStudents);
  for(let i = 1; i < pages; i++) {
    const li = document.createElement('li');
    const aRef = document.createElement('a');
    aRef.setAttribute('href', '#');
    aRef.textContent = i;
    li.appendChild(aRef);
    ul.appendChild(li);
  }

  // Iterating over all the A elements, adding the active class to the target clicked
  // and removing it from all the other a elements

  const aTag = document.querySelectorAll('a');
  aTag[0].classList.add('active');
    for(let j = 0; j < aTag.length; j++) {
      ul.addEventListener('click', (e) => {
        // Checking to see if the target clicked is the link inside a li element
        // if it isnt, nothing happens
        if(e.target.hasAttribute('href')){
          aTag[j].classList.remove('active');
          e.target.classList.add('active');
          showPage(listItem, e.target.textContent);
          }
        }),false;
      }
    }


// Invoking the functions

showPage(listItem, 1);
appendPageLinks(listItem);

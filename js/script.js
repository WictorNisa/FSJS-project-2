/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const listItem = document.querySelectorAll('li');
const maxItems = 9;

  function showPage(list, page) {
    const startIndex = (page * maxItems) - maxItems;
    const endIndex = page * maxItems;
    for(let i = 0; i < list.length; i++) {
      if(i >= startIndex && i <= endIndex) {
        list[i].style.display = 'block';
      }
      else {
        list[i].style.display = 'none';
      }
    }
  }
  showPage(listItem, 2);



/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/


function appendPageLinks(list) {
  let html = `
  <div class="pagination">
    <ul>
      <li>
        <a class="active" href="#">1</a>
      </li>
       <li>
        <a href="#">2</a>
      </li>
       <li>
        <a href="#">3</a>
      </li>
       <li>
        <a href="#">4</a>
      </li>
       <li>
        <a href="#">5</a>
      </li>
    </ul>
  </div>
  `;
}

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.

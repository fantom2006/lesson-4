//task-1
function getTextInsideFirstLi() {
    const li = document.querySelector('li');
    return li.textContent;
  }
  
  console.log(getTextInsideFirstLi()); 

  //task-2
  function getTextsInsideLiTags() {
    const liElements = document.querySelectorAll('li');
    const texts = Array.from(liElements).map(li => li.textContent);
    return texts;
  }
  
  console.log(getTextsInsideLiTags()); 

  //task-3
  function getTextsInsideListItems() {
    const listItems = document.querySelectorAll('.list-item');
    const texts = Array.from(listItems).map(item => item.textContent);
    return texts;
  }
  
  console.log(getTextsInsideListItems()); 

  //task-4
  function getClassValues() {
    const listItems = document.querySelectorAll('.list-item');
    const classes = Array.from(listItems).map(item => item.getAttribute('class'));
    return classes;
  }
  
  console.log(getClassValues()); 
 
  //task-5
  function getDataTestIdValues() {
    const listItems = document.querySelectorAll('.list-item');
    const dataTestIds = Array.from(listItems).map(item => item.getAttribute('data-test-id'));
    return dataTestIds;
  }
  
  console.log(getDataTestIdValues()); 

  //task-6
  function getBrokenDataTestIdAttributes() {
    const listItems = document.querySelectorAll('.list-item');
    const brokenItems = Array.from(listItems).filter(item => !item.classList.contains(item.textContent));
    const dataTestIds = brokenItems.map(item => item.getAttribute('data-test-id'));
    return dataTestIds;
  }
  
  console.log(getBrokenDataTestIdAttributes()); 

  //task-7
  function updateListItemsText() {
    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => {
      const dataTestId = item.getAttribute('data-test-id');
      item.textContent = `${dataTestId} ${item.textContent}`;
    });
  }
  
  updateListItemsText();


//task-8
function updateSecretLoginField() {
    const secretLoginInput = document.getElementById('secret-login');
    secretLoginInput.value = 'You were hacked';
  }
  
 updateSecretLoginField();
  
  
  
  
  



  
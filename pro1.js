// console.dir(Document);
// console.log(Document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all); 
// console.log(document.forms);
// console.log(document.links);
// console.log(document.image);
// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent ='hello';
// headerTitle.innerText = 'goodbye';
// console.log(headerTitle.textContent);
// headerTitle.innerHTML = '<h3>hello</h3>';

// headerTitle.style.borderBottom = 'solid 3px #000';
// var items = document.getElementById('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textcontent = 'hello2';
// items[1].style.fontweight = 'bold';
// items[1].style.backgroundcolor = 'yellow';

// // items.style.backgroundColor = '#f4f4f4';

// for( var i = 0; i < items.height; i++){
// items[i].style.backgroundColor = '#f4f4f4'
// }

// GET ELEMENTS BY TAGNAMES

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li);
// li[1].textcontent = 'hello2';
// li[1].style.fontweight = 'bold';
// li[1].style.backgroundcolor = 'yellow';

// // items.style.backgroundColor = '#f4f4f4';

// for( var i = 0; i <li.height; i++){
// li[i].style.backgroundColor = '#f4f4f4'
// }

// QUERYSELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderbottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'hello world';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color =' blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color =' coral';

// queryselectorall

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textcontent = 'hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++ ){
//     odd[i].style.backgroundcolor = '#f4f4f4';
//     even[i].style.backgroundcolor = '#ccc';
// }
 
// travasering  the dom 

//  var iteamlist = document.querySelector('#items');
//  parentelement 
// console.log(iteamlist.parentElement);
// iteamlist.parentElement.style.backgroundcolor ='#f4f4f4';
// console.log(iteamlist.parentElement.parentElement.parentElement);

//childnodes
// console.log(itemlist.childnodes);

// console.log(iteamlist.children);
// console.log(iteamlist.children[1]);
// iteamlist.children[1].style.backgroundcolor = 'yellow';
// //  firstchild
// console.log(iteamlist.firstChild);
// // first element
// console.log(iteamlist.firstElementChild);
// iteamlist.firstElementChild.textContent = 'hello';

// //  lastchild
// console.log(iteamlist.lastChild);
// // last element
// console.log(iteamlist.lastElementChild);
// iteamlist.lastElementChild.textContent = 'hello ';

// previoussliblings
// console.log(iteamlist.previousSibling);
// // previouselementsibling
// console.log(iteamlist.previousElementSibling);
// iteamlist.previousElementSibling.style.color = 'green'

// createElement
// create a div
// var newDiv = document.createElement('div');
// // create class
// newDiv.className = 'hello';
// // add id
// newDiv.id = 'hello ';
// // add attr
// newDiv.setAttribute('title','hello div');
// // create text node
// var newdivText = document.createTextNode('hello world');
// // Add text to div
// newDiv.appendChild(newdivText);
// var container = document.querySelector('header','container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);
// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv,h1);


// EVENTS

// var button = document.getElementById('button').addEventListener(
//     'click', buttonclick);

// function buttonclick(e){
//     console.log('button clicked');
// }
// document.getElementById('header-title').textContent = 'changed';
        // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// var output = document.getElementById('output');
// output.innerHTML = '<h1>'+e .target.id+'<h3>';
// console.log(e.type);

// console.log(e.clientx);
// console.log(e.clienty);

// console.log(e.offsetx);
// console.log(e.offsety);

// console.log(e.altKey);
// console.log(e.shiftKey);
// console.log(e.ctrKey);

// }

// var button = document.getElementById('button');
// var box = document.getElementById('box');

//button.addEventListener('click', runEvent);
// button.addEventListener('dbclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mousemove', runEvent);

// var iteamInput = document.querySelector('input[type ="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// iteamInput.addEventListener('keydown', runEvent);
// iteamInput.addEventListener('keyup', runEvent);
// iteamInput.addEventListener('keypress', runEvent);
// iteamInput.addEventListener('focus', runEvent);
// iteamInput.addEventListener('blur', runEvent);

// iteamInput.addEventListener('cut', runEvent);
// iteamInput.addEventListener('paste', runEvent);

// iteamInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);
// form.addEventListener('submit',runEvent); 

// function runEvent(e){
//     e.preventDefault();
//     console.log('EVENT TYPE: '+e.type);

    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
    // output = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';
    // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";

// }
// console.log(iteamInput);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Load items from local storage when the page loads
document.addEventListener('DOMContentLoaded', loadItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  // Save item to local storage
  saveItemToLocalStorage(newItem);

  // Clear input
  document.getElementById('item').value = '';
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);

      // Remove item from local storage
      removeItemFromLocalStorage(li.firstChild.textContent);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Save item to local storage
function saveItemToLocalStorage(item) {
  let items;
  if (localStorage.getItem('items') === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem('items'));
  }
  items.push(item);
  localStorage.setItem('items', JSON.stringify(items));
}

// Remove item from local storage
function removeItemFromLocalStorage(item) {
  let items;
  if (localStorage.getItem('items') === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem('items'));
  }
  items = items.filter(i => i !== item);
  localStorage.setItem('items', JSON.stringify(items));
}

// Load items from local storage
function loadItems() {
  let items;
  if (localStorage.getItem('items') === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem('items'));
  }
  items.forEach(function(item) {
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with item value
    li.appendChild(document.createTextNode(item));

    // Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
  });
}













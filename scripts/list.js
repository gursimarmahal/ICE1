
// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
let list =document.getElementsByTagName('ul')[0];
// ADD NEW ITEM TO END OF LIST
// Create element
let newLastItem =document.createElement('li');
let newTextLast=document.createTextNode('half and half cream');
// Create text node
newLastItem.appendChild(newTextLast);// Add text node to element
list.appendChild(newLastItem);// Add element end of list

// ADD NEW ITEM START OF LIST
let newFirstName=document.createElement('li');
let newFirstText=document.createTextNode('lettuce');
newFirstItem.appendChild(newFirstName);
list.insertBefore(newLastItem,list.firstChild);
// Create element
// Create text node
// Add text node to element
// Add element to list



// All <li> elements
let listItems=document.querySelectorAll('li');

// ADD A CLASS OF COOL TO ALL LIST ITEMS
let i;
for (i=0;i<list.lenght;i++){
    listItems[i].className='cool';
}
// Counter variable
// Loop through elements
// Change class to cool


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
// h2 text
// No. of <li> elements
// Content
// Update h2 using innerHTML (not textContent) because it contains markup
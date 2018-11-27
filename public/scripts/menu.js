var menuItemList = document.getElementById('menu-item-list');

var restaurantMenu = JSON.parse(localStorage.getItem('restaurantObject')).Menu;
var itemArray = JSON.parse(localStorage.getItem('itemArray'))

function searchKey(key, array) {
    console.log(key)
    console.log(array)
    var returnIndex = -1
    array.forEach(function(jsonObject, index) {
        if (jsonObject.Name == key) {
            returnIndex = index;
        }
    });
    
    return returnIndex;
}

restaurantMenu.forEach(function(item) {
    var containerDiv = document.createElement('div');
    var tableEntry = document.createElement('dt');
    var entryName = document.createElement('a');
    var itemDescription = document.createElement('dd')
    var itemContent = document.createElement('dd');

    var menuItemIndex = searchKey(item, itemArray);
    var menuItem = itemArray[menuItemIndex]


    containerDiv.className = 'list list-layout';
    entryName.innerHTML = item;
    entryName.setAttribute('href', 'menu_dish.html');
    localStorage.setItem('itemObject', JSON.stringify(menuItem));

    itemDescription.innerHTML = 'Description: ' + menuItem.Description;
    itemContent.innerHTML = 'Contains: ' + menuItem.Content;

    tableEntry.appendChild(entryName);
    containerDiv.appendChild(tableEntry)
    containerDiv.appendChild(itemDescription);
    containerDiv.appendChild(itemContent);
    
    menuItemList.appendChild(containerDiv);
});

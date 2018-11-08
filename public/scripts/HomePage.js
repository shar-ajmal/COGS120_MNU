var restaurantArray = [
    'Spicy City',
    'Spicy House',
    'Ming Palace',
    'Santa Clara Restaurant',
    'Vallartas',
    'Dominos',
    'Papa Johns',
    'Pizza Hut',
    'Assfuck',
];

var searchBar = document.getElementById('search-bar');
var dropDownList = document.getElementById('restaurant-dropdown-list');
var placeHolderDropdown = document.getElementById('placeholder-dropdown');

searchBar.addEventListener('keyup', displayDropDown);

function getSubstringItems(array, substring) {
    substringItemList = []

    array.forEach(function(name) {
        var lowerName = name.toLowerCase();
        if (lowerName.includes(substring)) {
            substringItemList.push(name);
        }
    });
    
    return substringItemList;
}

function createDropDownItem(name) {
    var dropdownItemContainer = document.createElement('div');
    dropdownItemContainer.classList.add('dropdown-item-container');
    dropdownItemContainer.addEventListener('click', function(e) {
        window.location.href = 'restaurant.html';
    })
    var dropdownInfoContainer = document.createElement('div')
    dropdownInfoContainer.classList.add('dropdown-info-container');

    var dropdownPic = document.createElement('div');
    dropdownPic.classList.add('dropdown-pic');

    var dropdownName = document.createElement('div')
    dropdownName.classList.add('dropdown-name');
    dropdownName.innerText = name
    dropdownInfoContainer.appendChild(dropdownPic);
    dropdownInfoContainer.appendChild(dropdownName);
    dropdownItemContainer.appendChild(dropdownInfoContainer);

    return dropdownItemContainer;
}

function displayDropDown(e) {
    inputText = searchBar.value;
    dropDownList.innerHTML = '';
    console.log(placeHolderDropdown)
    if (inputText == '') {
        dropDownList.innerHTML = placeHolderDropdown.innerHTML;
        return;
    }
    var prefixItems = getSubstringItems(restaurantArray, inputText)
    if (prefixItems.length == 0) {
        dropDownList.innerHTML = ('<h1>No Restaurants Found</h1>');
    }
    prefixItems.forEach(function(restaurant) {
        var dropdownItem = createDropDownItem(restaurant)
        dropDownList.append(dropdownItem);
    });
}
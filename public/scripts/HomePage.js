var restaurantArray = [
    'Spicy City',
    'Spicy House',
    'Ming Palace',
    'Santa Clara Restaurant',
    'Vallartas',
    'Dominos',
    'Papa Johns',
    'Pizza Hut',
    'Mamas Kitchen',
];

var itemArray = [
    'Spicy Garlic Eggplant',
    'Garlic Eggplant',
    'Great Food',
    'California Burrito',
    'Deep Dish Pizza',
    'OG Pasta',
    'Carne Asada Fries',
    'Bread Sticks',
    'Biryani',
];

var mainArray = restaurantArray;
var searchFilterValue = 'restaurants'
var searchBar = document.getElementById('search-bar');
var dropDownList = document.getElementById('restaurant-dropdown-list');
var placeHolderDropdown = document.getElementById('placeholder-dropdown');
var searchFilter = document.getElementById('restuarant-item-filter');

searchBar.addEventListener('keyup', displayDropDown);
searchFilter.addEventListener('click', toggleFilter);

function toggleFilter(e) {
    if (searchFilter.innerText === 'Search Menu Items') {
        searchFilter.innerText = 'Search Restaurants';
        mainArray = itemArray;
        searchFilterValue = 'items'
    }
    else {
        searchFilter.innerText = 'Search Menu Items'
        mainArray = restaurantArray;
        searchFilterValue = 'restaurants'
    }
    displayDropDown();
}

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
    var redirectLink = ''
    if (name.toLowerCase() === 'spicy sity'){
        redirectLink = 'restaurant.html'
    }
    else if (name.toLowerCase() === 'spicy garlic eggplant') {
        redirectLink = 'eggplant.html';
    }
    else if (searchFilterValue === 'restaurants'){
        redirectLink = 'restaurant.html'
    }  
    else {
        redirectLink = 'menu_dish.html'
    }

    var dropdownItemContainer = document.createElement('div');
    dropdownItemContainer.classList.add('dropdown-item-container');
    dropdownItemContainer.addEventListener('click', function(e) {
        window.location.href = redirectLink;
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
    var prefixItems = getSubstringItems(mainArray, inputText)
    if (prefixItems.length == 0) {
        dropDownList.innerHTML = ('<h1>No Restaurants Found</h1>');
    }
    prefixItems.forEach(function(restaurant) {
        var dropdownItem = createDropDownItem(restaurant)
        dropDownList.append(dropdownItem);
    });
}
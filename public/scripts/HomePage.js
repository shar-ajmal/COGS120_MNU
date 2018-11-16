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

var restaurantJSONArray = [
    {'Name': 'Spicy City', 'Address': 'Convoy St', 'Price': '$', 'Menu': ['Spicy Garlic Eggplant']},
    {'Name' : 'Vallartas', 'Address': 'Balboa Ave', 'Price': '$', 'Menu': ['Carne Asada Fries']},
    {'Name': 'Dominos', 'Address' : 'La Jolla Village Drive', 'Price': '$', 'Menu' : ['Pizza']},
    {'Name' : 'Biryani Palace', 'Address': 'Mira Mesa', 'Price': '$', 'Menu' : ['Goat Biryani']},
    {'Name' : 'Ming Palace', 'Address' : '12th Street', 'Price': '$', 'Menu' : ['Orange Chicken']}
]

var itemJSONArray = [
    {'Name': 'Spicy Garlic Eggplant', 'Description': 'This dish is sweet eggplant covered in Szechuan Sauce', 'Content': ['Nuts'], 'Rating': 5},
    {'Name': 'Carne Asada Fries', 'Description': 'Fries covered in Carne Asada, cheese, and guacamole.', 'Content': ['Meat', 'Dairy'], 'Rating': 4},
    {'Name': 'Pizza', 'Description': 'Flavorful Pizza covered in cheese and our secret sauce.', 'Content': ['Dairy'], 'Rating': 3},
    {'Name': 'Goat Biryani', 'Description': 'Spiced Indian Rice Dish with goat meat', 'Content': ['Meat'], 'Rating': 4},
    {'Name': 'Orange Chicken', 'Description': 'Flavorlful and sweet chicken glazed in our orange sauce.', 'Content': ['Meat'], 'Rating': 5},
]

var mainArray = restaurantJSONArray;
var searchFilterValue = 'restaurants'
var searchBar = document.getElementById('search-bar');
var dropDownList = document.getElementById('restaurant-dropdown-list');
var placeHolderDropdown = document.getElementById('placeholder-dropdown');
var searchFilter = document.getElementById('restuarant-item-filter');
var loginButton = document.getElementById('login-button');

var login = JSON.parse(localStorage.getItem('login'))

if (login) {
    loginButton.innerHTML = 'Sarah'
}
else {
    loginButton.innerHTML = 'LOGIN'
}

searchBar.addEventListener('keyup', displayDropDown);
//searchFilter.addEventListener('click', toggleFilter);

localStorage.setItem('itemArray', JSON.stringify(itemJSONArray))
localStorage.setItem('restaurantArray', JSON.stringify(restaurantJSONArray));

//console.log(JSON.parse(localStorage.getItem('itemArray')));

function toggleFilter(e) {
    if (searchFilter.innerText === 'Search Menu Items') {
        searchFilter.innerText = 'Search Restaurants';
        mainArray = itemJSONArray;
        searchFilterValue = 'items'
    }
    else {
        searchFilter.innerText = 'Search Menu Items'
        mainArray = restaurantJSONArray;
        searchFilterValue = 'restaurants'
    }
    displayDropDown();
}

function getSubstringItems(array, substring) {
    substringItemList = []

    array.forEach(function(jsonObject) {
        var lowerName = jsonObject.Name.toLowerCase();
        if (lowerName.includes(substring)) {
            substringItemList.push(jsonObject);
        }
    });
    
    return substringItemList;
}

function searchKey(key, array) {
    console.log(key)
    console.log(array)
    var returnIndex = -1
    array.forEach(function(jsonObject, index) {
        console.log(index)
        console.log(key)
        console.log(jsonObject.Name)
        if (jsonObject.Name == key) {
            returnIndex = index;
        }
    });
    
    return returnIndex;
}

function createDropDownItem(jsonObject) {
    var redirectLink = ''

    if (searchFilterValue === 'restaurants'){
        redirectLink = 'restaurant.html'

    }  
    else {
        redirectLink = 'menu_dish.html'
    }

    var dropdownItemContainer = document.createElement('div');
    dropdownItemContainer.classList.add('dropdown-item-container');
    dropdownItemContainer.addEventListener('click', function(e) {
        window.location.href = redirectLink;
        var arrayIndex = searchKey(jsonObject.Name, mainArray)
        console.log(arrayIndex);
        localStorage.setItem('objectToPass', JSON.stringify(mainArray[arrayIndex]))
    })
    var dropdownInfoContainer = document.createElement('div')
    dropdownInfoContainer.classList.add('dropdown-info-container');

    var dropdownPic = document.createElement('div');
    dropdownPic.classList.add('dropdown-pic');

    var dropdownName = document.createElement('div')
    dropdownName.classList.add('dropdown-name');
    dropdownName.innerText = jsonObject.Name;
    
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
    prefixItems.forEach(function(jsonObject) {
        var dropdownItem = createDropDownItem(jsonObject)
        dropDownList.append(dropdownItem);
    });
}
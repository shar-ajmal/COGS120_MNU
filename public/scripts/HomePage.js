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

var restaurantsNearYou = [
    {'Name' : 'Vallartas', 'Address': 'Balboa Ave', 'Price': '$', 'Menu': ['Carne Asada Fries']},
    {'Name': 'Dominos', 'Address' : 'La Jolla Village Drive', 'Price': '$', 'Menu' : ['Pizza']}
]

var itemsNearYou = [
    {'Name': 'Carne Asada Fries', 'Description': 'Fries covered in Carne Asada, cheese, and guacamole.', 'Content': ['Meat', 'Dairy'], 'Rating': 4},
    {'Name': 'Pizza', 'Description': 'Flavorful Pizza covered in cheese and our secret sauce.', 'Content': ['Dairy'], 'Rating': 3}
]

var restaurantJSONArray = [
    {'Name': 'Spicy City', 'Address': 'Convoy St', 'Price': '$', 'Menu': ['Spicy Eggplant']},
    {'Name' : 'Vallartas', 'Address': 'Balboa Ave', 'Price': '$', 'Menu': ['Carne Asada Fries']},
    {'Name': 'Dominos', 'Address' : 'La Jolla Village Drive', 'Price': '$', 'Menu' : ['Pizza']},
    {'Name' : 'Biryani Palace', 'Address': 'Mira Mesa', 'Price': '$', 'Menu' : ['Goat Biryani']},
    {'Name' : 'Ming Palace', 'Address' : '12th Street', 'Price': '$', 'Menu' : ['Orange Chicken']}
]

var itemJSONArray = [
    {'Name': 'Spicy Eggplant', 'Description': 'This dish is sweet eggplant covered in Szechuan Sauce', 'Content': ['Nuts'], 'Rating': 5, 'Comments': [], 'image':'spicy_eggplant.jpeg'},
    {'Name': 'Carne Asada Fries', 'Description': 'Fries covered in Carne Asada, cheese, and guacamole.', 'Content': ['Meat', 'Dairy'], 'Rating': 4, 'Comments': [], 'image': 'carne_asada.jpeg'},
    {'Name': 'Pizza', 'Description': 'Flavorful Pizza covered in cheese and our secret sauce.', 'Content': ['Dairy'], 'Rating': 3, 'Comments': [], 'image':'pizza.jpeg'},
    {'Name': 'Goat Biryani', 'Description': 'Spiced Indian Rice Dish with goat meat', 'Content': ['Meat'], 'Rating': 4, 'Comments': [], 'image':'goat_biryani.jpeg'},
    {'Name': 'Orange Chicken', 'Description': 'Flavorlful and sweet chicken glazed in our orange sauce.', 'Content': ['Meat'], 'Rating': 5, 'Comments': [], 'image':'spicy_eggplant.jpeg'},
]

var mainArray = restaurantJSONArray;
var searchFilterValue = 'restaurants'
var searchBar = document.getElementById('search-bar');
var dropDownList = document.getElementById('restaurant-dropdown-list');
var placeHolderDropdown = document.getElementById('placeholder-dropdown');
var searchFilter = document.getElementById('search-filter-button');
var searchFilterRestaurant = document.getElementById('search-filter-restaurant')
var searchFilterFood = document.getElementById('search-filter-food')
var searchHeaderMessage = document.getElementById('search-header-message');

var login = JSON.parse(localStorage.getItem('login'))

displayDropDown();

searchBar.addEventListener('keyup', displayDropDown);

searchFilterRestaurant.addEventListener('click', function() {toggleFilter('Search for Restaurants', restaurantJSONArray, 'restaurants')})
searchFilterFood.addEventListener('click', function() {toggleFilter('Search for Food Items', itemJSONArray, 'food')})

localStorage.setItem('itemArray', JSON.stringify(itemJSONArray))
localStorage.setItem('restaurantArray', JSON.stringify(restaurantJSONArray));


function toggleFilter(newText, newArray, newSearchFilterValue) {

    console.log("We're toggling" + newText);
    console.log(newArray)
    searchFilter.innerText = newText;
    mainArray = newArray;
    searchFilterValue = newSearchFilterValue;
    displayDropDown();
}
function updateDropDown(e) {
    if (searchFilterValue === 'restaurants') {
        mainArray = restaurantJSONArray;
    }
    else {
        mainArray = itemJSONArray;
    }
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
        if (searchFilterValue === 'restaurants') {
            localStorage.setItem('restaurantObject', JSON.stringify(mainArray[arrayIndex]))
        }
        else {
            localStorage.setItem('itemObject', JSON.stringify(mainArray[arrayIndex]))
        }
    })
    var dropdownInfoContainer = document.createElement('div')
    dropdownInfoContainer.classList.add('dropdown-info-container');

    //var dropdownPic = document.createElement('div');
    //dropdownPic.classList.add('dropdown-pic');

    var dropdownName = document.createElement('h5')
    dropdownName.classList.add('dropdown-name');
    dropdownName.innerText = jsonObject.Name;
    
    //dropdownInfoContainer.appendChild(dropdownPic);
    dropdownInfoContainer.appendChild(dropdownName);
    dropdownItemContainer.appendChild(dropdownInfoContainer);

    return dropdownItemContainer;
}

function displayDropDown(e) {
    inputText = searchBar.value;
    dropDownList.innerHTML = '';
    console.log(inputText);
    if (inputText == '') {
        if(searchFilterValue === 'restaurants') {
            mainArray = restaurantsNearYou;
        }
        else {
            mainArray = itemsNearYou;
        }
        searchHeaderMessage.innerHTML = searchFilterValue.toUpperCase() + ' Near You';
    }
    else {
        updateDropDown();
        searchHeaderMessage.innerHTML = 'Searching ' + searchFilterValue.toUpperCase();
    }
    console.log(mainArray)
    var prefixItems = getSubstringItems(mainArray, inputText);
    if (prefixItems.length == 0) {
        dropDownList.innerHTML = '';
        searchHeaderMessage.innerHTML = 'No ' + searchFilterValue.toUpperCase() + ' Found';
    }
    prefixItems.forEach(function(jsonObject) {
        var dropdownItem = createDropDownItem(jsonObject);
        dropDownList.append(dropdownItem);
    });
}
const itemSelectElement = document.getElementById('item');
const itemTypeSelectElement = document.getElementById('item-type');
const itemCardsElement = document.getElementById('item-cards');
const vehicleBtn = document.getElementById('vehicle-button');
const magicItemBtn = document.getElementById('magic-items-button');

// Global variable to store the current items
// This is used to avoid making another API call when the user selects an item
// from the dropdown

// could be a good idea to use a local storage to store the data and then use it to populate the dropdowns
let currentItems;
let currentType;

// This function is used to get the types of a class / deck from the API
const getClassTypes = async classType => {

    const lastSearch = JSON.parse(localStorage.getItem('last-type-fetch'));
    if (lastSearch[0] === classType) return lastSearch[1];

    const response = await fetch(`https://shropshire-dm-be.vercel.app/api/${classType}/types`)
    const types = await response.json();
    localStorage.setItem('last-type-fetch', JSON.stringify([classType, types]))
    return types;
};

const getItems = async (classType, type) => {

    const response = await fetch(`https://shropshire-dm-be.vercel.app/api/${classType}/type/${type}`)
    const items = await response.json();
    currentItems = items;
    return items;
}

const populateItems = async () => {
    itemSelectElement.innerHTML = "";

    const type = itemTypeSelectElement.value
    const selectedItems = await getItems(currentType, type)
    selectedItems.forEach(({ name }) => {

        const dropdownElement = document.createElement('option');
        dropdownElement.setAttribute('value', name);
        dropdownElement.textContent = name;
        itemSelectElement.appendChild(dropdownElement);
    })
}

const populateTypes = async (type = 'vehicles') => {
    currentType = type;
    const { types } = await getClassTypes(type);
    itemTypeSelectElement.innerHTML = "";
    types.forEach(curType => {
        const dropdownElement = document.createElement('option');
        dropdownElement.setAttribute('value', curType);
        dropdownElement.textContent = curType.charAt(0).toUpperCase() + curType.slice(1);
        itemTypeSelectElement.appendChild(dropdownElement);
    })
}

populateTypes()

const displayCard = name => {

    itemCardsElement.innerHTML = "";
    const vehicle = getVehicle(name);
    const cardContainer = document.createElement('div');
    cardContainer.setAttribute("class", "card");

    const cardTitle = document.createElement('h1');
    cardTitle.setAttribute("class", "card-title");
    cardTitle.textContent = vehicle.name
    cardContainer.append(cardTitle)

    const cardValue = document.createElement('h3');
    cardValue.setAttribute("class", "card-value");
    cardValue.textContent = `Value: ${vehicle.card}`
    cardContainer.append(cardValue)

    const cardDesc = document.createElement('div');
    cardDesc.setAttribute("class", "card-desc")
    vehicle.desc.forEach((descLine) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = descLine;
        cardDesc.appendChild(paragraph)

    })

    cardContainer.appendChild(cardDesc)

    itemCardsElement.appendChild(cardContainer)

}

const getVehicle = name => {

    const [item] = currentItems.filter(item => item.name === name);

    if (!item) return { name, desc: "Please search again", card: "N/A" };
    return item;
}

const handleItemSelection = event => {
    event.preventDefault()
    const item = itemSelectElement.value
    displayCard(item)


}

itemTypeSelectElement.addEventListener("change", populateItems)
itemSelectElement.addEventListener("change", handleItemSelection)
magicItemBtn.addEventListener("click", () => populateTypes('magic-items'))
vehicleBtn.addEventListener("click", () => populateTypes('vehicles'))


getClassTypes('vehicles')
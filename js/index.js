const vehicleSelectElement = document.getElementById('vehicles');
const vehicleTypeSelectElement = document.getElementById('vehicle-type');
const vehicleFormElement = document.getElementById('vehicles-selection');
const itemCardsElement = document.getElementById('item-cards');


let currentItems;

const getClassTypes = async classType => {
    const response = await fetch(`https://shropshire-dm-be.vercel.app/api/${classType}/types`)
    const types = await response.json();
    return types;
};

const getItems = async (type) => {

    const response = await fetch(`https://shropshire-dm-be.vercel.app/api/vehicles/type/${type.toLowerCase()}`)
    const items = await response.json();
    currentItems = items;
    return items;
}

const populateVehicle = async () => {
    vehicleSelectElement.innerHTML = "";

    const type = vehicleTypeSelectElement.value
    const selectedVehicles = await getItems(type)

    selectedVehicles.forEach(({ name }) => {

        const dropdownElement = document.createElement('option');
        dropdownElement.setAttribute('value', name);
        dropdownElement.textContent = name;
        vehicleSelectElement.appendChild(dropdownElement);
    })
}
const populateTypes = async (type = 'vehicles') => {
    const { types } = await getClassTypes(type);

    types.forEach(curType => {
        const dropdownElement = document.createElement('option');
        dropdownElement.setAttribute('value', curType);
        dropdownElement.textContent = curType.charAt(0).toUpperCase() + curType.slice(1);
        vehicleTypeSelectElement.appendChild(dropdownElement);
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
    const type = vehicleTypeSelectElement.value
    const [vehicle] = currentItems.filter(vehicle => vehicle.name === name);
    if (!vehicle) return { name, desc: "Please search again", card: "N/A" };
    return vehicle;
}

const handleVehicleFormSubmit = event => {
    event.preventDefault()
    const vehicle = vehicleSelectElement.value
    displayCard(vehicle)


}

vehicleTypeSelectElement.addEventListener("change", populateVehicle)
vehicleSelectElement.addEventListener("change", handleVehicleFormSubmit)


getClassTypes('vehicles')
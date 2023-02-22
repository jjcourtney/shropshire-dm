const vehicleSelectElement = document.getElementById('vehicles');
const vehicleTypeSelectElement = document.getElementById('vehicle-type');
const vehicleFormElement = document.getElementById('vehicles-selection');
const itemCardsElement = document.getElementById('item-cards');


const getClassTypes = async classType => {
    const response = await fetch(`https://shropshire-dm-be.vercel.app/api/${classType}/types`)
    const types = await response.json();
    console.log(types)

};

const populateVehicle = () => {
    vehicleSelectElement.innerHTML = "";

    const type = vehicleTypeSelectElement.value
    const selectedVehicles = vehiclesData[type];

    selectedVehicles.forEach(({ name }) => {

        const dropdownElement = document.createElement('option');
        dropdownElement.setAttribute('value', name);
        dropdownElement.textContent = name;
        vehicleSelectElement.appendChild(dropdownElement);
    })
}

const populateVehicleType = () => {
    for (const vehicle in vehiclesData) {
        const dropdownElement = document.createElement('option');
        dropdownElement.setAttribute('value', vehicle);
        dropdownElement.textContent = vehicle.charAt(0).toUpperCase() + vehicle.slice(1);
        vehicleTypeSelectElement.appendChild(dropdownElement);
    }
    populateVehicle()
}

populateVehicleType()

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
    const [vehicle] = vehiclesData[type].filter(vehicle => vehicle.name === name);
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
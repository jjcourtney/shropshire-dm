const vehicleSelectElement = document.getElementById('vehicles');
const vehicleTypeSelectElement = document.getElementById('vehicle-type');
const vehicleFormElement = document.getElementById('vehicles-selection');
const itemCardsElement = document.getElementById('item-cards');


const populateVehicleType = () => {
    for (const vehicle in vehicles) {
        const dropdownElement = document.createElement('option');
        dropdownElement.setAttribute('value', vehicle);
        dropdownElement.textContent = vehicle;
        vehicleTypeSelectElement.appendChild(dropdownElement);
    }

}

populateVehicleType()

const populateVehicle = () => {
    vehicleSelectElement.innerHTML = "";

    const type = vehicleTypeSelectElement.value
    const selectedVehicles = vehicles[type];


    selectedVehicles.forEach(({ name }) => {

        const dropdownElement = document.createElement('option');
        dropdownElement.setAttribute('value', name);
        dropdownElement.textContent = name;
        vehicleSelectElement.appendChild(dropdownElement);
    })
}


const displayCard = name => {
    const vehicle = getVehicle(name);
    const cardItem = `
<div class='card'>
<h1 class='card-title'>${vehicle.name}</h1>
<h3 class='card-type'>${vehicle.card}</h3>
<p class='card-desc'>${vehicle.desc}</p>
</div>
`
    itemCardsElement.innerHTML = cardItem

}

const getVehicle = name => {
    const type = vehicleTypeSelectElement.value
    const [vehicle] = vehicles[type].filter(vehicle => vehicle.name === name);
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

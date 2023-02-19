const vehicleSelectElement = document.getElementById('vehicles');
const vehicleTypeSelectElement = document.getElementById('vehicle-type');
const vehicleFormElement = document.getElementById('vehicles-selection');
const itemCardsElement = document.getElementById('item-cards');




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

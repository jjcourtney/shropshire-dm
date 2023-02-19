const vehicleSelectElement = document.getElementById('vehicles');
const vehicleFormElement = document.getElementById('vehicles-selection');
const itemCardsElement = document.getElementById('item-cards');
console.log(vehicleFormElement)


mounts.forEach(({ name }) => {
    console.log(name)
    const dropdownElement = document.createElement('option');
    dropdownElement.setAttribute('value', name);
    dropdownElement.textContent = name;
    vehicleSelectElement.appendChild(dropdownElement);
})

const displayCard = name => {
    const vehicle = getVehicle(name);
    const cardItem = `
<div class='card'>
<h1 class='card-title'>${vehicle.name}</h1>
<h3 class='card-title'>${vehicle.card}</h3>
<p class='card-title'>${vehicle.desc}</p>
</div>
`
    itemCardsElement.innerHTML = cardItem

}

const getVehicle = name => {
    const [vehicle] = mounts.filter(vehicle => vehicle.name === name);
    if (!vehicle) return { name, desc: "Please search again", card: "N/A" };
    return vehicle;
}

const handleVehicleFormSubmit = event => {
    event.preventDefault()
    const vehicle = vehicleSelectElement.value
    displayCard(vehicle)


}

vehicleFormElement.addEventListener("submit", handleVehicleFormSubmit)
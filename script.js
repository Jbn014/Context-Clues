var friends = ["Addi", "Lucia", "Rae", "Garrett", "Luke"]
var locations = ["Bedroom", "Hallway", "Theater", "Backyard", "Pool", "Game Room", "Patio", "Living Room", "Dining Room", "Kitchen"]
var weapons = ["Sword", "Knife", "Gun", "Bazooka", "String", "Bayonet", "Hot Sauce", "Rusty Spork", "Fork", "Mango", "Juul", "White Claw", "Chuck Norris", "Book", "Pillow", "Pencil", "Pen", "Popcorn", "Bare Hands", "Bird" ]



for (var i = 1; i < 101; i++) {
    var h3 = document.createElement("h3");
    h3.innerText = `Accusation ${i}`;
    h3.addEventListener("click", captureIndex(i));    
    document.body.appendChild(h3)
}


function captureIndex(index) {
    return function () {

    alert(`Accusation ${index}: I accuse ${friends[index % friends.length]}, with the ${weapons[index % weapons.length]} in the ${locations[index % locations.length]}!`)
}
}

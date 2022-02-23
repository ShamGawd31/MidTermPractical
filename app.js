var list = [
    {
        name: "Caution",
        sound: 1,
    },
    {
        name: "Dying Breed",
        sound: 3,
    },
    {
        name: "Human",
        sound: 8,
    },
    {
        name: "Spaceman",
        sound: 7,
    },
    {
        name: "Sam's Town",
        sound: 5,
    },
    {
        name: "Brightside",
        sound: 4,
    },
];

//
for (var listItmCountr = 0; listItmCountr < list.length; listItmCountr++) {

    var ulEl = document.createElement("ul");

    ulEl.id = "created";
    var liEl = document.createElement("li");

    if (list[listItmCountr].sound > 5) {

        liEl.style.color = "blue";
    }


    liEl.innerHTML = "<b>Name:</b> " + list[listItmCountr].name + ", <b>Sound:</b> " + list[listItmCountr].sound + "<br>";


    ulEl.appendChild(liEl);


    document.body.appendChild(ulEl);
}


var pElCounter = document.createElement("p");
pElCounter.id = "counterat10";

pElCounter.innerHTML = 10 + " ";


document.body.appendChild(pElCounter);


document.getElementById("counterat10").insertAdjacentHTML("afterend", '<p id="mesg"></p>');


document.getElementById("counterat10").insertAdjacentHTML("afterend", '<button id="counterat10Btn">Click To Increase Counter</button>');


document.getElementById("counterat10Btn").addEventListener("click", function () {

    if (document.getElementById("counterat10").textContent == 14) {

        document.getElementById("mesg").textContent = "cool we hit the number";
    }


    document.getElementById("counterat10").textContent = Number(document.getElementById("counterat10").textContent.trim()) + 1;
});
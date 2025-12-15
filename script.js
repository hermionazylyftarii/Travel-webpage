const form = document.getElementById("tripForm");
const tripList = document.getElementById("tripList");

function initializeTrips() {
    if (!localStorage.getItem("trips")) {
        const initialTrips = [
            { destination: "Madrid", date: "2025-11-24" },
            { destination: "Athens", date: "2025-08-10" }
        ];
        localStorage.setItem("trips", JSON.stringify(initialTrips));
    }
}

initializeTrips();

function getTrips() {
    return JSON.parse(localStorage.getItem("trips")) || [];
}


function saveTrips(trips) {
    localStorage.setItem("trips", JSON.stringify(trips));
}

function displayTrips() {
    if (!tripList) return;

    tripList.innerHTML = "";
    const trips = getTrips();

    trips.forEach(trip => {
        const li = document.createElement("li");
        li.textContent = `${trip.destination} - ${trip.date}`;
        tripList.appendChild(li);
    });
}

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const destination = document.getElementById("destination").value;
        const date = document.getElementById("date").value;

        const trips = getTrips();
        trips.push({ destination, date });

        saveTrips(trips);
        form.reset();
    });
}


displayTrips();

const today = new Date();
document.getElementById("currentYear").innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = "Last modification: " + document.lastModified;


const hamButton = document.querySelector("#menu");
const navItems = document.querySelector("nav ul");
const title = document.querySelector("h2");
const navContainer = document.querySelector(".nav-cont");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle('show');
    navItems.classList.toggle('show');
    title.classList.toggle('show');
    navContainer.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Four extra temples
    {
        templeName: "Oaxaca Mexico",
        location: "Oaxaca, Mexico",
        dedicated: "2000, March, 11",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oaxaca-mexico/400x250/oaxaca-mexico-temple-759270-wallpaper.jpg"
    },
    {
        templeName: "Idaho Falls Idaho",
        location: "Idaho Falls, Idaho, United States",
        dedicated: "1945, September, 23",
        area: 85624,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/400x250/5-Idaho-Falls-Temple-1869448.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
    },
    {
        templeName: "Monterrey Mexico",
        location: "Monterey, Nuevo León, Mexico",
        dedicated: "2002, April, 28",
        area: 16498,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/monterrey-mexico/400x250/monterrey-mexico-temple-lds-126690-wallpaper.jpg"
    },
    {
        templeName: "Rio de Janeiro Brazil",
        location: "Rio de Janeiro, Brazil",
        dedicated: "2022, May, 8",
        area: 29966,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rio-de-janeiro-brazil/400x250/4-5aa85fb6f20a17f629302687710142328a707d4d.jpeg"
    }

];

function createTempleCard(filteredTemples) {
    const container = document.querySelector(".temple-img");
    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".temple-img").appendChild(card);

    });
}

createTempleCard(temples);

const homePage = document.querySelector("#home")
const oldTemplespage = document.querySelector("#old")
const newTemplespage = document.querySelector("#new")
const largeTemplespage = document.querySelector("#large")
const smallTemplespage = document.querySelector("#small")


homePage.addEventListener("click", () => {
    document.querySelector("#main").textContent = "Home";
    createTempleCard(temples);
});

oldTemplespage.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
        const year = Number(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
    document.querySelector("#main").textContent = "Old Temples";
    createTempleCard(oldTemples);
});

newTemplespage.addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
        const year = Number(temple.dedicated.split(",")[0]);
        return year >= 2000;
    });
    document.querySelector("#main").textContent = "New Temples";
    createTempleCard(newTemples);
});

largeTemplespage.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    document.querySelector("#main").textContent = "Large Temples";
    createTempleCard(largeTemples);
});

smallTemplespage.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    document.querySelector("#main").textContent = "Small Temples";
    createTempleCard(smallTemples);
});



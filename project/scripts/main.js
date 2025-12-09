/* ——— APARTMENT DATA ——— */
const apartments = [

    {
        id: "loft",
        name: "Warm Loft Near the City Center",
        category: "loft",
        description: "A cozy and inviting loft, perfect for couples or solo travelers. Includes Wi-Fi, kitchenette, Netflix, and parking.",
        capacity: 2,
        price: 750,
        images: ["images/loft1.jpg", "images/loft2.jpg", "images/loft3.jpg", "images/loft4.jpg"]
    },

    {
        id: "twoBedroom",
        name: "Two-Bedroom Family Apartment",
        category: "two-bedroom",
        description: "A comfortable two-bedroom apartment ideal for families. Comes with Wi-Fi, kitchenette, Netflix, and parking.",
        capacity: 6,
        price: 1200,
        images: ["images/two1.jpg", "images/two2.jpg", "images/two3.jpg", "images/two4.jpg"]
    },

    {
        id: "largeFamily",
        name: "Large Family Apartment — Up to 10 Guests",
        category: "large",
        description: "Spacious apartment for large families or groups. Includes Wi-Fi, kitchenette, Netflix, and parking.",
        capacity: 10,
        price: 1800,
        images: ["images/large1.jpg", "images/large2.jpg", "images/large3.jpg", "images/large4.jpg"]
    }

];

/* FAVORITES */
const FAVORITES_KEY = "favorites";

function getFavorites() {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
}

function saveFavorites(list) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(list));
}

/* RENDER CARDS WITH SLIDERS */
function renderApartments(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = apartments
        .map(ap => createApartmentCard(ap))
        .join("");

    setupAllSliders();
    updateFavoriteCounter();
}

function createApartmentCard(ap) {
    const favoriteList = getFavorites();
    const isFav = favoriteList.includes(ap.id);

    const slides = ap.images.map(img => `
    <div class="slide">
      <img src="${img}" alt="${ap.name}">
    </div>
  `).join("");

    return `
    <article class="card">
      <div class="slider" data-slider="${ap.id}">
        <button class="slider-btn prev">&#10094;</button>
        <div class="slider-track">${slides}</div>
        <button class="slider-btn next">&#10095;</button>
      </div>

      <h3>${ap.name}</h3>
      <p>${ap.description}</p>

      <div class="card-meta">
        <span>Up to ${ap.capacity} guests</span>
        <span class="price-tag">$${ap.price} MXN / night</span>
      </div>

      <button class="fav-btn" data-fav="${ap.id}">
        ${isFav ? "Saved ✓" : "Save"}
      </button>
    </article>
  `;
}

/* SLIDER FUNCTIONALITY */
function setupAllSliders() {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(slider => {
        const track = slider.querySelector(".slider-track");
        const slides = slider.querySelectorAll(".slide");
        const prev = slider.querySelector(".prev");
        const next = slider.querySelector(".next");

        let index = 0;

        function update() {
            track.style.transform = `translateX(-${index * 100}%)`;
        }

        next.onclick = () => {
            index = (index + 1) % slides.length;
            update();
        };

        prev.onclick = () => {
            index = (index - 1 + slides.length) % slides.length;
            update();
        };

        /* Swipe for mobile */
        let startX = 0;
        track.addEventListener("touchstart", e => startX = e.touches[0].clientX);
        track.addEventListener("touchend", e => {
            let endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) next.click();
            if (endX - startX > 50) prev.click();
        });
    });
}

/* FAVORITES */
document.body.addEventListener("click", e => {
    const btn = e.target.closest("[data-fav]");
    if (!btn) return;

    const id = btn.dataset.fav;
    let favorites = getFavorites();

    if (favorites.includes(id)) {
        favorites = favorites.filter(f => f !== id);
        btn.textContent = "Save";
    } else {
        favorites.push(id);
        btn.textContent = "Saved ✓";
    }

    saveFavorites(favorites);
    updateFavoriteCounter();
});

function updateFavoriteCounter() {
    const count = getFavorites().length;
    const span1 = document.getElementById("favorite-count");
    const span2 = document.getElementById("favorite-count-rooms");
    if (span1) span1.textContent = count;
    if (span2) span2.textContent = count;
}

/* CONTACT FORM */
function setupContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", e => {
        e.preventDefault();

        const feedback = document.getElementById("form-feedback");
        feedback.textContent = "Thank you! We will contact you shortly.";
        feedback.style.color = "green";

        form.reset();
    });
}

/* FOOTER */
function setupFooter() {
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
}

/* INIT */
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("featured-apartments"))
        renderApartments("featured-apartments");

    if (document.getElementById("rooms-list"))
        renderApartments("rooms-list");

    setupContactForm();
    setupFooter();
});

/* ===== MOBILE NAV MENU — Based on your preferred style ===== */

const hamButton = document.querySelector("#menu-toggle");
const navItems = document.querySelector(".main-nav");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("show");
    navItems.classList.toggle("open");
});

/* Auto-close menu when resizing to desktop */
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        hamButton.classList.remove("show");
        navItems.classList.remove("open");
    }
});


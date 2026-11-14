// WEBSITE LOADER

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }
});


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
}


// WHATSAPP BUTTON

const whatsappBtn = document.createElement("a");

whatsappBtn.href = "https://wa.me/923XXXXXXXXX";
whatsappBtn.target = "_blank";
whatsappBtn.innerHTML = "💬";
whatsappBtn.className = "whatsapp-float";

document.body.appendChild(whatsappBtn);


// BOOKING FORM

const bookingModal = document.createElement("div");

bookingModal.className = "booking-modal";

bookingModal.innerHTML = `
    <div class="booking-box">

        <button class="close-booking">&times;</button>

        <h2>Book Your Event</h2>
        <p>Zamarod Wedding Hall</p>

        <form id="weddingForm">

            <input type="text" placeholder="Your Name" required>

            <input type="tel" placeholder="Phone Number" required>

            <input type="date" required>

            <select required>
                <option value="">Select Package</option>
                <option>Silver Package</option>
                <option>Gold Package</option>
                <option>Platinum Package</option>
            </select>

            <input type="number" placeholder="Number of Guests" required>

            <textarea placeholder="Additional Details"></textarea>

            <button type="submit">Submit Booking</button>

        </form>

    </div>
`;

document.body.appendChild(bookingModal);


// OPEN BOOKING FORM

document.querySelectorAll(".package-card button").forEach(button => {

    button.addEventListener("click", function () {

        bookingModal.classList.add("active");

    });

});


// CLOSE BOOKING FORM

document.querySelector(".close-booking").addEventListener("click", function () {

    bookingModal.classList.remove("active");

});


// SUBMIT BOOKING

document.getElementById("weddingForm").addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Booking form is working!");

});
// PROFESSIONAL BOOKING CONFIRMATION

document.getElementById("weddingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    alert("🎉 Thank You!\n\nYour booking request has been submitted successfully.\n\nThis is a demo website.");
});
// ===============================
// ENGLISH / URDU LANGUAGE SWITCH
// ===============================

const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "en";

if (languageBtn) {

    languageBtn.addEventListener("click", function () {

        const elements = document.querySelectorAll("[data-en][data-ur]");

        if (currentLanguage === "en") {

            currentLanguage = "ur";

            elements.forEach(function (element) {
                element.textContent = element.getAttribute("data-ur");
            });

            languageBtn.innerHTML = "🌐 English";

            document.documentElement.lang = "ur";
            document.documentElement.dir = "rtl";

        } else {

            currentLanguage = "en";

            elements.forEach(function (element) {
                element.textContent = element.getAttribute("data-en");
            });

            languageBtn.innerHTML = "🌐 اردو";

            document.documentElement.lang = "en";
            document.documentElement.dir = "ltr";
        }

    });

}


// ===============================
// DARK / LIGHT MODE
// ===============================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeBtn.innerHTML = "☀️ Light Mode";

        } else {

            themeBtn.innerHTML = "🌙 Dark Mode";

        }

    });

}
// ===============================
// GALLERY FULL SCREEN PREVIEW
// ===============================

const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.createElement("div");

lightbox.id = "galleryLightbox";

lightbox.innerHTML = `
    <button id="closeLightbox">&times;</button>
    <div id="lightboxImage"></div>
`;

document.body.appendChild(lightbox);

const lightboxImage = document.getElementById("lightboxImage");

galleryItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const image = getComputedStyle(item).backgroundImage;

        lightboxImage.style.backgroundImage = image;

        lightbox.classList.add("active");

    });

});

document.getElementById("closeLightbox").addEventListener("click", function () {

    lightbox.classList.remove("active");

});
// GALLERY NEXT AND PREVIOUS BUTTONS

let currentPhotoIndex = 0;

const allGalleryPhotos = document.querySelectorAll(".gallery-item");
const galleryBox = document.getElementById("galleryLightbox");

const previousBtn = document.createElement("button");
previousBtn.innerHTML = "❮";
previousBtn.id = "previousPhoto";

const nextBtn = document.createElement("button");
nextBtn.innerHTML = "❯";
nextBtn.id = "nextPhoto";

galleryBox.appendChild(previousBtn);
galleryBox.appendChild(nextBtn);

function showGalleryPhoto(index) {
    currentPhotoIndex = (index + allGalleryPhotos.length) % allGalleryPhotos.length;

    const image = getComputedStyle(allGalleryPhotos[currentPhotoIndex]).backgroundImage;

    document.getElementById("lightboxImage").style.backgroundImage = image;
}

allGalleryPhotos.forEach(function(photo, index) {
    photo.addEventListener("click", function() {
        showGalleryPhoto(index);
    });
});

previousBtn.addEventListener("click", function() {
    showGalleryPhoto(currentPhotoIndex - 1);
});

nextBtn.addEventListener("click", function() {
    showGalleryPhoto(currentPhotoIndex + 1);
});
// GALLERY KEYBOARD CONTROLS

document.addEventListener("keydown", function(event) {

    if (!galleryBox.classList.contains("active")) {
        return;
    }

    if (event.key === "ArrowRight") {
        showGalleryPhoto(currentPhotoIndex + 1);
    }

    if (event.key === "ArrowLeft") {
        showGalleryPhoto(currentPhotoIndex - 1);
    }

    if (event.key === "Escape") {
        galleryBox.classList.remove("active");
    }

});
// BACK TO TOP BUTTON

const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "backToTop";

document.body.appendChild(topButton);

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
});

topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".about, .facilities, .packages, .gallery, .testimonials, .contact"
);

const revealObserver = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(function(element) {
    element.classList.add("reveal");
    revealObserver.observe(element);
});
// GOLDEN CUSTOM CURSOR

const goldenCursor = document.createElement("div");

goldenCursor.id = "goldenCursor";

document.body.appendChild(goldenCursor);

document.addEventListener("mousemove", function(event) {
    goldenCursor.style.left = event.clientX + "px";
    goldenCursor.style.top = event.clientY + "px";
});
// ANIMATED STATISTICS COUNTER

const statsSection = document.createElement("section");

statsSection.id = "statistics";

statsSection.innerHTML = `
    <div class="stat-box">
        <h2 class="counter" data-target="500">0</h2>
        <p>Happy Customers</p>
    </div>

    <div class="stat-box">
        <h2 class="counter" data-target="200">0</h2>
        <p>Weddings</p>
    </div>

    <div class="stat-box">
        <h2 class="counter" data-target="10">0</h2>
        <p>Years Experience</p>
    </div>

    <div class="stat-box">
        <h2 class="counter" data-target="100">0</h2>
        <p>Customer Satisfaction</p>
    </div>
`;

const heroSection = document.querySelector(".hero");

if (heroSection) {
    heroSection.after(statsSection);
}

const counters = statsSection.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = Number(counter.dataset.target);
            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 100));

            const timer = setInterval(function() {

                current += increment;

                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }

                counter.textContent = current + "+";

            }, 25);

            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(function(counter) {
    counterObserver.observe(counter);
});
// FAQ ACCORDION SECTION

const faqSection = document.createElement("section");

faqSection.id = "faq";

faqSection.innerHTML = `
    <div class="section-title">
        <p>HAVE QUESTIONS?</p>
        <h2>Frequently Asked Questions</h2>
    </div>

    <div class="faq-container">

        <div class="faq-item">
            <button class="faq-question">
                What is the booking process? <span>+</span>
            </button>
            <div class="faq-answer">
                Contact us and share your event date and requirements.
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">
                What wedding packages are available? <span>+</span>
            </button>
            <div class="faq-answer">
                We offer Silver, Gold and Platinum packages.
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">
                Can we customize the decoration? <span>+</span>
            </button>
            <div class="faq-answer">
                Yes, decoration can be discussed according to your preferences.
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">
                Where is Zamarod Wedding Hall located? <span>+</span>
            </button>
            <div class="faq-answer">
                Shingerdar, Barikot, Swat.
            </div>
        </div>

    </div>
`;

const contactSection = document.querySelector(".contact");

if (contactSection) {
    contactSection.before(faqSection);
}

// FAQ OPEN AND CLOSE

document.querySelectorAll(".faq-question").forEach(function(button) {

    button.addEventListener("click", function() {

        const answer = button.nextElementSibling;
        const isOpen = answer.classList.contains("open");

        document.querySelectorAll(".faq-answer").forEach(function(item) {
            item.classList.remove("open");
        });

        document.querySelectorAll(".faq-question span").forEach(function(icon) {
            icon.textContent = "+";
        });

        if (!isOpen) {
            answer.classList.add("open");
            button.querySelector("span").textContent = "−";
        }

    });

});
// TESTIMONIALS SLIDER

const reviewCards = document.querySelectorAll(".testimonial-card");

let currentReview = 0;

const reviewContainer = document.querySelector(".testimonial-container");

const reviewControls = document.createElement("div");
reviewControls.id = "reviewControls";

reviewControls.innerHTML = `
    <button id="prevReview">❮</button>
    <button id="nextReview">❯</button>
`;

if (reviewContainer && reviewCards.length > 0) {

    reviewContainer.after(reviewControls);

    function showReview(index) {

        currentReview = (index + reviewCards.length) % reviewCards.length;

        reviewCards.forEach(function(card, i) {
            card.style.display = i === currentReview ? "block" : "none";
        });

    }

    document.getElementById("prevReview").addEventListener("click", function() {
        showReview(currentReview - 1);
    });

    document.getElementById("nextReview").addEventListener("click", function() {
        showReview(currentReview + 1);
    });

    showReview(0);

    setInterval(function() {
        showReview(currentReview + 1);
    }, 4000);

}
// TESTIMONIALS KEYBOARD CONTROLS

document.addEventListener("keydown", function(event) {

    if (galleryBox.classList.contains("active")) {
        return;
    }

    if (event.key === "ArrowRight") {
        showReview(currentReview + 1);
    }

    if (event.key === "ArrowLeft") {
        showReview(currentReview - 1);
    }

});
// PREMIUM GOLDEN PRELOADER

const premiumLoader = document.createElement("div");

premiumLoader.id = "premiumLoader";

premiumLoader.innerHTML = `
    <div class="loader-content">
        <div class="loader-ring"></div>
        <h1>ZAMAROD</h1>
        <p>WEDDING HALL</p>
        <span>Creating Beautiful Memories</span>
    </div>
`;

document.body.prepend(premiumLoader);

window.addEventListener("load", function() {
    setTimeout(function() {
        premiumLoader.classList.add("loader-hidden");

        setTimeout(function() {
            premiumLoader.remove();
        }, 800);

    }, 1800);
});
// LUXURY MUSIC PLAYER

const musicPlayer = document.createElement("div");

musicPlayer.id = "musicPlayer";

musicPlayer.innerHTML = `
    <audio id="weddingMusic" loop>
        <source src="music.mp3" type="audio/mpeg">
    </audio>

    <button id="musicToggle">🎵 Play Music</button>
`;

document.body.appendChild(musicPlayer);

const weddingMusic = document.getElementById("weddingMusic");
const musicToggle = document.getElementById("musicToggle");

musicToggle.addEventListener("click", function() {

    if (weddingMusic.paused) {
        weddingMusic.play()
            .then(function() {
                musicToggle.innerHTML = "⏸ Pause Music";
            })
            .catch(function() {
                alert("Please add a valid music.mp3 file first.");
            });
    } else {
        weddingMusic.pause();
        musicToggle.innerHTML = "🎵 Play Music";
    }

});
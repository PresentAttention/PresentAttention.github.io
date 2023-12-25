// Get the menu items and menu button elements
//Normal Version
var menuItems = document.querySelector(".menu-items");
var menuButton = document.querySelector(".menu-button");

// Add click event listener to the menu button
menuButton.addEventListener("click", toggleMenu);

// Function to toggle the menu
function toggleMenu() {
  menuItems.style.display =
    menuItems.style.display === "none" ? "block" : "none";
  menuButton.firstElementChild.style.display =
    menuItems.style.display === "none" ? "block" : "none";
  menuButton.lastElementChild.style.display =
    menuItems.style.display === "none" ? "none" : "block";
}

//Home Page Title
var leistungen = [
  "Webentwicklung",
  "Werbe-Erstellung",
  "Videoproduktion",
  "Social media",
  "Animation",
  "Design Thinking",
];
var index = 0;
var rotatorTitle = document.querySelector(".rotator-title");

function rotateText() {
  rotatorTitle.style.opacity = 0;
  setTimeout(function () {
    rotatorTitle.textContent = leistungen[index];
    rotatorTitle.style.opacity = 1;
    index = (index + 1) % leistungen.length;
  }, 500); // Wait for 0.5s (the same duration as the CSS transition)
}

rotateText();
setInterval(rotateText, 3000);

//form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const submitButton = document.querySelector("form button[type='submit']");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateForm() {
    const vornameInput = document.getElementById("vorname");
    const nachnameInput = document.getElementById("nachname");
    const emailInput = document.getElementById("email");
    const anredeRadios = document.querySelectorAll(
      ".anrede input[type='radio']"
    );
    const anfrageCheckboxes = document.querySelectorAll(
      ".anfrage input[type='checkbox']"
    );
    const beschreibungTextarea = document.getElementById("beschreibung");
    const datenschutzCheckbox = document.getElementById("datenschutz");
    const vornameError = document.getElementById("vorname-error");
    const nachnameError = document.getElementById("nach-error");
    const emailError = document.getElementById("email-error");
    const anredeError = document.getElementById("anrede-error");
    const anfrageError = document.getElementById("frageBogen");
    const beschreibungError = document.getElementById("frageBogenBeschreibung");
    const datenschutzError = document.getElementById("Datenschutz");

    const emailValue = emailInput.value.trim();

    // Clear error messages
    vornameError.style.visibility = "hidden";
    nachnameError.style.visibility = "hidden";
    emailError.style.visibility = "hidden";
    anredeError.style.visibility = "hidden";
    anfrageError.style.visibility = "hidden";
    beschreibungError.style.visibility = "hidden";
    datenschutzError.style.visibility = "hidden";

    let isValid = true;

    if (vornameInput.value.trim() === "") {
      vornameError.textContent = "Bitte geben Sie Ihren Vorname ein.";
      vornameError.style.visibility = "visible";
      isValid = false;
    }

    if (nachnameInput.value.trim() === "") {
      nachnameError.textContent = "Bitte geben Sie Ihren Nachname ein.";
      nachnameError.style.visibility = "visible";
      isValid = false;
    }

    if (emailValue === "") {
      emailError.textContent = "Bitte geben Sie Ihre Email ein.";
      emailError.style.visibility = "visible";
      isValid = false;
    } else if (!emailRegex.test(emailValue)) {
      emailError.textContent =
        "Bitte geben Sie eine gültige Email-Adresse ein.";
      emailError.style.visibility = "visible";
      isValid = false;
    }

    let isAnredeSelected = false;
    anredeRadios.forEach(function (radio) {
      if (radio.checked) {
        isAnredeSelected = true;
      }
    });
    if (!isAnredeSelected) {
      anredeError.textContent = "Bitte wählen Sie eine Anrede aus.";
      anredeError.style.visibility = "visible";
      isValid = false;
    }

    let isAnfrageSelected = false;
    anfrageCheckboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        isAnfrageSelected = true;
      }
    });
    if (!isAnfrageSelected) {
      anfrageError.textContent =
        "Bitte erwähnen Sie, warum Ihre Anfrage geht. Sie können mehrere Auswahl haben.";
      anfrageError.style.visibility = "visible";
      isValid = false;
    }

    if (beschreibungTextarea.value.trim() === "") {
      beschreibungError.textContent =
        "Bitte kürzen Sie Ihre Anfrage beschreiben.";
      beschreibungError.style.visibility = "visible";
      isValid = false;
    }

    if (!datenschutzCheckbox.checked) {
      datenschutzError.textContent =
        "Bitte bestimmen Sie die Datenschutzerklärung.";
      datenschutzError.style.visibility = "visible";
      isValid = false;
    }

    submitButton.disabled = !isValid;

    return isValid;
  }

  form.addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });

  // Enable/disable the submit button based on input changes
  form.addEventListener("input", function () {
    validateForm();
  });
});

//jump to form
document.addEventListener("DOMContentLoaded", function () {
  // Function to scroll to the form and select the corresponding checkbox
  function scrollToFormAndSelectCheckbox(checkboxId) {
    const form = document.querySelector("form");
    const checkbox = form.querySelector(`#${checkboxId}`);

    if (checkbox) {
      // Scroll to the form
      form.scrollIntoView({ behavior: "smooth" });

      // Select the checkbox
      checkbox.checked = true;
    }
  }

  // Add click event listeners to the buttons
  const webentwicklungBtn = document.getElementById("Webentwicklung-btn");
  const werbeErstellungBtn = document.getElementById("Werbe-Erstellung-btn");
  const videoproduktionBtn = document.getElementById("Videoproduktion-btn");
  const socialMediaBtn = document.getElementById("Social-media-btn");
  const animationBtn = document.getElementById("Animation-btn");
  const designThinkingBtn = document.getElementById("Design Thinking-btn");

  webentwicklungBtn.addEventListener("click", function () {
    scrollToFormAndSelectCheckbox("webentwicklung");
  });

  werbeErstellungBtn.addEventListener("click", function () {
    scrollToFormAndSelectCheckbox("werbe-erstellung");
  });

  videoproduktionBtn.addEventListener("click", function () {
    scrollToFormAndSelectCheckbox("videoproduktion");
  });

  socialMediaBtn.addEventListener("click", function () {
    scrollToFormAndSelectCheckbox("socialmedia");
  });

  animationBtn.addEventListener("click", function () {
    scrollToFormAndSelectCheckbox("animation");
  });

  designThinkingBtn.addEventListener("click", function () {
    scrollToFormAndSelectCheckbox("designThinking");
  });
});

//Menu to section
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the menu button and the menu items
  const menuButton = document.querySelector(".menu-button");
  const menuItems = document.querySelectorAll(".menu-items li a");

  // Loop through each menu item and add a click event listener
  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      // Simulate a click on the menu button
      menuButton.click();

      // Get the target section ID from the href attribute
      const targetSectionID = this.getAttribute("href");

      // Scroll to the target section
      const targetSection = document.querySelector(targetSectionID);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }

      // Prevent the default link behavior
      event.preventDefault();
    });
  });

  // Rest of your existing code here

  // Your existing code here
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show the "Scroll to Top" button when the user scrolls down
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Scroll to the top of the page when the button is clicked
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

/*Impressum--Datenschutz*/
const link = document.querySelector(".ds-link");
const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");
const panel = document.getElementById("panel");
const contentA = document.getElementById("contentA");
const contentB = document.getElementById("contentB");
const closeBtn = document.getElementById("closeBtn");

let isPanelOpen = false;

link.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the link from navigating

  // Open panel with content B
  openPanel(contentB);
});

btnA.addEventListener("click", function () {
  if (!isPanelOpen || contentB.style.display === "block") {
    openPanel(contentA);
  } else {
    closePanel();
  }
});

btnB.addEventListener("click", function () {
  if (!isPanelOpen || contentA.style.display === "block") {
    openPanel(contentB);
  } else {
    closePanel();
  }
});

closeBtn.addEventListener("click", function () {
  closePanel();
});

// Add a click event listener to the document
document.addEventListener("click", function (event) {
  const clickedElement = event.target;

  // Check if the clicked element is not within the panel, footer-wrapper, link, or button
  if (
    !panel.contains(clickedElement) &&
    !document.querySelector(".footer-wrapper").contains(clickedElement) &&
    clickedElement !== closeBtn &&
    clickedElement !== link
  ) {
    closePanel();
  }
});

function openPanel(content) {
  panel.style.display = "block";
  panel.classList.add("active");
  contentA.style.display = "none";
  contentB.style.display = "none";
  content.style.display = "block";
  closeBtn.style.display = "block";
  isPanelOpen = true;
}

function closePanel() {
  panel.classList.remove("active");
  setTimeout(() => {
    panel.style.display = "none";
    closeBtn.style.display = "none";
    contentA.style.display = "none";
    contentB.style.display = "none";
    isPanelOpen = false;
  }, 500); // Adding a delay for smoother transition
}
//reveal
const adSections = document.querySelectorAll(".ad-section");
const revealThreshold = 0.5; // Adjust as needed

const revealAdSection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    }
  });
};

const adSectionObserver = new IntersectionObserver(revealAdSection, {
  threshold: revealThreshold,
});

adSections.forEach((section) => {
  adSectionObserver.observe(section);
});

//revealForm
const formContainer = document.querySelector(".form-container");
const revealThresholdForm = 0.5; // Adjust as needed

const revealForm = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      formContainer.classList.add("revealed");
      observer.unobserve(formContainer);
    }
  });
};

const formObserver = new IntersectionObserver(revealForm, {
  threshold: revealThresholdForm,
});

formObserver.observe(formContainer);

//scrolling by opening and closing the panel
function openPanel(content) {
  panel.style.display = "block";
  setTimeout(() => {
    panel.classList.add("active");
    contentA.style.display = "none";
    contentB.style.display = "none";
    content.style.display = "block";
    closeBtn.style.display = "block";
    isPanelOpen = true;

    // Scroll the panel into view
    panel.scrollIntoView({
      behavior: "smooth", // Use smooth scrolling animation
      block: "start", // Scroll to the top of the panel
    });
  }, 10); // Adding a small delay for smoother transition
}
//Disabling right click
//document.addEventListener('contextmenu', function(e) {
//e.preventDefault(); //})

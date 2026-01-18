document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const title = document.getElementById("title");
    const nav = document.getElementById("nav");
    const buttons = document.querySelectorAll("nav button");
    const toggle = document.getElementById("themeToggle");
    const body = document.body;

    /* =========================
       Load Sequence
    ========================= */

    // Fade overlay
    setTimeout(() => {
        overlay.classList.add("fade-out");
    }, 500);

    // Show title large in center
    setTimeout(() => {
        title.style.opacity = "1";
    }, 2800);

    // Settle title and move upward
    setTimeout(() => {
        title.classList.add("settled");
    }, 4300);

    // Slash glow effect
    setTimeout(() => {
        title.classList.add("glow");
    }, 5600);

    // Reveal navigation
    setTimeout(() => {
        nav.style.opacity = "1";
        buttons.forEach((btn, i) => {
            setTimeout(() => {
                btn.classList.add("visible");
            }, i * 140);
        });
    }, 6400);

    /* =========================
       Button Navigation Placeholder
    ========================= */

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const link = btn.dataset.link;
            console.log(`Navigating to: ${btn.textContent}`);
            // window.location.href = link; // activate later
        });
    });

    /* =========================
       Info Panel Hover Info
    ========================= */

    // Hover Info Panel
const hoverPanel = document.getElementById("hoverInfoPanel");
const hoverText = document.getElementById("hoverInfoText");

// Map of button info
const buttonInfo = {
    "Archives": "Opens the Archives page. Explore old records and historical logs.",
    "Chronicles": "Go through the Chronicles. Detailed stories and events.",
    "Visions": "View Visions. Predictions and future insights.",
    "Codex": "Access the Codex. Ancient knowledge and manuals.",
    "Origins": "See the Origins. Learn about the beginnings.",
    "DrewMatica": "Visit DrewMatica website. AI Study Tutor (TESTINGs PHRASE).",
    "PromeTheus": "Visit PromeTheus. AI-powered PROMPT generator for various purposes.",
    "Drastica": "Explore Drastica. AI-powered chat interface.",
    "BOTs": "Older Bots ever made. Past insights reflected.",
    "Resona": "Witness Resona. Simple Free Spotify + Queue System."
};

// Add hover listeners
buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        const info = buttonInfo[btn.textContent] || "No info available.";
        hoverText.textContent = info;
        hoverPanel.classList.add("visible");
    });

    btn.addEventListener("mouseleave", () => {
        hoverPanel.classList.remove("visible");
    });
});

    /* =========================
       Theme Toggle
    ========================= */

    toggle.addEventListener("click", () => {
        body.classList.toggle("dark");
        body.classList.toggle("light");
        toggle.textContent = body.classList.contains("dark") ? "☽" : "☀";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const title = document.getElementById("title");
    const nav = document.getElementById("nav");
    const buttons = document.querySelectorAll("nav button");
    const footer = document.getElementById("footer");
    const infoPanel = document.getElementById("infoPanel");
    const typeText = document.getElementById("typeText");
    const toggle = document.getElementById("themeToggle");
    const body = document.body;

    /* =========================
       Load Sequence (Strict)
    ========================= */

    setTimeout(() => overlay.classList.add("fade-out"), 500);
    setTimeout(() => title.style.opacity = "1", 2800);
    setTimeout(() => title.classList.add("settled"), 4300);
    setTimeout(() => title.classList.add("glow"), 5600);

    // Nav + Footer
    setTimeout(() => {
        nav.style.opacity = "1";
        footer.classList.add("visible");

        buttons.forEach((btn, i) => {
            setTimeout(() => btn.classList.add("visible"), i * 140);
        });
    }, 6400);

    // Info panel reveal
    setTimeout(() => {
        infoPanel.classList.add("visible");
        startTypewriter();
    }, 7600);

    /* =========================
       Typewriter Effect
    ========================= */

    const text =
        "THE FORESAWN is a commons for students, AI assistants, and the public to learn, build, and contribute together.\n" +

        "\"THE FORESAWN\" — Learn smarter. Build with AI. Share openly.\n";

    let index = 0;
    function startTypewriter() {
        if (index < text.length) {
            typeText.textContent += text.charAt(index);
            index++;
            setTimeout(startTypewriter, 45);
        }
    }

    /* =========================
       Footer Actions
    ========================= */

    footer.addEventListener("click", (e) => {
        const action = e.target.dataset.action;
        if (!action) return;

        if (action === "contact") {
            window.location.href = "mailto:your@email.com";
        }

        if (action === "madeby") {
            window.location.href = "https://yourwebsite.com";
        }
    });

    /* =========================
       Theme Toggle
    ========================= */

    toggle.addEventListener("click", () => {
        body.classList.toggle("dark");
        body.classList.toggle("light");
        toggle.textContent = body.classList.contains("dark") ? "☽" : "☀";
    });
});

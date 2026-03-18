// Developer Easter Egg 🕵️‍♀️
console.log(
    "%cIf you're here, you're probably checking how this works. \n%cEverything is designed for people who don’t have time to figure these things out.\nThat constraint drives most decisions.\nmarlana.creed@gmail.com",
    "color: #FF99E5; font-size: 1.25rem; font-weight: bold; font-family: sans-serif; padding-top: 1rem;",
    "color: #8BA4C7; font-size: 0.9rem; font-family: monospace; line-height: 1.6;"
);

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Email obfuscation
    const emailSpan = document.getElementById('email-text');
    const emailLink = document.getElementById('email-link');

    if (emailSpan && emailLink) {
        const user = emailSpan.dataset.user;
        const domain = emailSpan.dataset.domain;
        const addr = `${user}@${domain}`;

        emailSpan.textContent = addr;
        emailLink.href = `mailto:${addr}`;
    }
});

// Screenshot modal (used by case study pages)
function openModal(imageSrc, imageAlt) {
    const modal = document.getElementById('screenshot-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    if (!modal || !modalImage) return;

    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;
    if (modalCaption) modalCaption.textContent = imageAlt;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscapeKey);
}

function closeModal() {
    const modal = document.getElementById('screenshot-modal');
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(event) {
    if (event.key === 'Escape') closeModal();
}

// Social media data
const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/andrewboerema',
        iconKey: 'github',
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/boerema',
        iconKey: 'linkedin',
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/andrewboerema',
        iconKey: 'instagram',
    }
];

// Function to generate social media buttons
function generateSocialLinks() {
    const socialLinksContainer = document.querySelector('.social-links');
    
    // Clear existing content
    socialLinksContainer.innerHTML = '';
    
    // Generate buttons for each social link
    socialLinks.forEach(link => {
        const button = document.createElement('a');
        button.href = link.url;
        button.className = `social-link ${link.name.toLowerCase()}`;
        button.target = '_blank';
        button.rel = 'noopener noreferrer';
        button.setAttribute('aria-label', `Visit my ${link.name} profile`);
        
        // Create icon container
        const iconContainer = document.createElement('span');
        iconContainer.className = 'icon-container';
        iconContainer.innerHTML = icons[link.iconKey];
        iconContainer.setAttribute('aria-hidden', 'true');
        
        // Create text span
        const text = document.createElement('span');
        text.textContent = link.name;
        
        // Add icon and text to button
        button.appendChild(iconContainer);
        button.appendChild(text);
        
        // Add to container
        socialLinksContainer.appendChild(button);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', generateSocialLinks); 
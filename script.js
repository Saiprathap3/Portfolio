// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Special handling for certifications section
      if (entry.target.id === 'certifications') {
        animateCertifications();
      }
      
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Animate certifications with left-to-right effect
function animateCertifications() {
  const certs = document.querySelectorAll('.cert');
  let delay = 0;
  
  certs.forEach((cert, index) => {
    setTimeout(() => {
      cert.style.opacity = '1';
      cert.style.transform = 'translateX(0)';
    }, delay);
    
    // Stagger the animation for each certification
    delay += 200;
    
    // Add hover effect for each certification
    cert.addEventListener('mouseenter', () => {
      cert.style.transform = 'translateX(10px) scale(1.02)';
      cert.style.boxShadow = '0 15px 35px rgba(67, 97, 238, 0.2)';
    });
    
    cert.addEventListener('mouseleave', () => {
      cert.style.transform = 'translateX(0) scale(1)';
      cert.style.boxShadow = '0 5px 25px rgba(0,0,0,0.05)';
    });
  });
}

// Initialize certifications with initial styles
function initCertifications() {
  const certs = document.querySelectorAll('.cert');
  certs.forEach(cert => {
    cert.style.opacity = '0';
    cert.style.transform = 'translateX(-50px)';
    cert.style.transition = 'all 0.5s ease-out';
  });
}

// Color change on tap/click
document.addEventListener('DOMContentLoaded', () => {
  // Initialize certifications
  initCertifications();
  
  // Add color change on tap for any element with 'color-change' class
  const colorChangeElements = document.querySelectorAll('.color-change');
  const colors = ['#4361ee', '#3f37c9', '#4cc9f0', '#4895ef', '#3a0ca3'];
  
  colorChangeElements.forEach(element => {
    element.addEventListener('click', () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      element.style.backgroundColor = randomColor;
      
      // Add pulse effect
      element.style.animation = 'pulse 0.5s';
      setTimeout(() => {
        element.style.animation = '';
      }, 500);
    });
  });
  
  // Add floating tech icons
  createFloatingTechIcons();
});

// Create additional floating tech icons
function createFloatingTechIcons() {
  const techIcons = [
    'fa-html5', 'fa-css3-alt', 'fa-js', 'fa-react', 'fa-node-js',
    'fa-python', 'fa-android', 'fa-git-alt', 'fa-github', 'fa-npm',
    'fa-aws', 'fa-docker', 'fa-linux', 'fa-windows', 'fa-apple'
  ];
  
  const container = document.querySelector('.floating-tech');
  
  // Add more floating icons
  for (let i = 0; i < 15; i++) {
    const icon = document.createElement('i');
    const randomIcon = techIcons[Math.floor(Math.random() * techIcons.length)];
    const size = Math.random() * 2 + 1; // Random size between 1rem and 3rem
    const duration = Math.random() * 15 + 10; // Random duration between 10s and 25s
    const delay = Math.random() * 15; // Random delay up to 15s
    const left = Math.random() * 100; // Random horizontal position
    
    icon.className = `fab ${randomIcon}`;
    icon.style.left = `${left}%`;
    icon.style.fontSize = `${size}rem`;
    icon.style.animationDuration = `${duration}s`;
    icon.style.animationDelay = `${delay}s`;
    
    container.appendChild(icon);
  }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Add scroll-based header effect
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    header.style.boxShadow = 'none';
    return;
  }
  
  if (currentScroll > lastScroll && currentScroll > header.offsetHeight) {
    // Scrolling down
    header.style.transform = `translateY(-${header.offsetHeight}px)`;
  } else {
    // Scrolling up
    header.style.transform = 'translateY(0)';
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
  
  lastScroll = currentScroll;
});

// Add pulse animation for color changes
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;
document.head.appendChild(style);

// Initialize any elements that need color change on tap
document.addEventListener('DOMContentLoaded', () => {
  // Add color-change class to all cards and certifications
  document.querySelectorAll('.card, .cert').forEach(el => {
    el.classList.add('color-change');
  });
  
  // Add initial animation to tech stack items
  const techStackItems = document.querySelectorAll('.tech-stack span');
  techStackItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
  });
});

// Add hover effect to project cards
document.querySelectorAll('.card, .cert').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Animate header elements with staggered delays
  const headerElements = document.querySelectorAll('header h1, header p, header a');
  headerElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
  });
});

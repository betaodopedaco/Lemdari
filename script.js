// Menu Mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    navToggle.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animação ao scroll
const animateElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

animateElements.forEach(element => {
    observer.observe(element);
});

// Efeito de partículas
const particlesContainer = document.getElementById('particles');
const particleCount = 30;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Tamanho aleatório entre 2px e 5px
    const size = Math.random() * 3 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Posição aleatória
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Cor aleatória entre os tons do tema
    const colors = ['var(--primary)', 'var(--secondary)', 'var(--accent)'];
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Duração da animação aleatória
    const duration = Math.random() * 20 + 10;
    particle.style.animationDuration = `${duration}s`;
    
    // Atraso aleatório
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particlesContainer.appendChild(particle);
}

// Modal de confirmação
const appointmentForm = document.getElementById('appointmentForm');
const confirmationModal = document.getElementById('confirmationModal');
const modalClose = document.getElementById('modalClose');
const modalButton = document.getElementById('modalButton');
const modalMessage = document.getElementById('modalMessage');

appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simular envio do formulário
    setTimeout(() => {
        const name = document.getElementById('name').value;
        modalMessage.textContent = `Obrigado, ${name}! Seu horário foi agendado com sucesso. Aguardamos você na Barbearia Futura!`;
        confirmationModal.classList.add('active');
        appointmentForm.reset();
    }, 1000);
});

modalClose.addEventListener('click', () => {
    confirmationModal.classList.remove('active');
});

modalButton.addEventListener('click', () => {
    confirmationModal.classList.remove('active');
});

// Fechar modal ao clicar fora
confirmationModal.addEventListener('click', (e) => {
    if (e.target === confirmationModal) {
        confirmationModal.classList.remove('active');
    }
});

// Atualizar ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Validação do formulário
document.getElementById('phone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.substring(0, 11);
    
    // Formatar como (XX) XXXXX-XXXX
    if (value.length > 2) {
        value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
    }
    if (value.length > 10) {
        value = `${value.substring(0, 10)}-${value.substring(10)}`;
    }
    
    e.target.value = value;
});

// Suavizar scroll para links internos
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

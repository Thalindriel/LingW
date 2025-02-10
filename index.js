document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";

        setTimeout(() => {
            el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 150);
    });

    document.querySelector('.login-button').addEventListener('click', function () {
        alert('Функция входа временно недоступна. Пожалуйста, попробуйте позже.');
    });

    document.querySelector('.signup').addEventListener('click', function () {
        alert('Вы успешно записаны на пробный урок!');
    });

    document.querySelector('.telegram-contact').addEventListener('click', function () {
        window.open('https://t.me/thalindriel', '_blank');
    });

    document.querySelector('.contact-1f').addEventListener('click', function () {
        alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    });

    document.querySelectorAll('.navigation span').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.dataset.section;
            const targetSection = document.querySelector(`.${targetId}`);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }
        });
    });

    document.querySelector('.rectangle-b').addEventListener('click', function () {
        const name = document.querySelector('.name-input').value.trim();
        const phone = document.querySelector('.phone-input').value.trim();
        const email = document.querySelector('.email-input').value.trim();

        if (name === '' || phone === '' || email === '') {
            alert('Пожалуйста, заполните все поля формы.');
        } else {
            alert('Спасибо за регистрацию! Мы свяжемся с вами в ближайшее время.');
        }
    });

    const scrollElements = document.querySelectorAll("span:not(.register-button):not(.login-button):not(.signup):not(.telegram-contact):not(.contact-1f):not(.rectangle-c):not(.rectangle-f):not(.rectangle-13):not(.rectangle-15), div:not(.register-button):not(.login-button):not(.signup):not(.telegram-contact):not(.contact-1f):not(.rectangle-c):not(.rectangle-f):not(.rectangle-13):not(.rectangle-15), p:not(.register-button):not(.login-button):not(.signup):not(.telegram-contact):not(.contact-1f):not(.rectangle-c):not(.rectangle-f):not(.rectangle-13):not(.rectangle-15), h1:not(.register-button):not(.login-button):not(.signup):not(.telegram-contact):not(.contact-1f):not(.rectangle-c):not(.rectangle-f):not(.rectangle-13):not(.rectangle-15), h2:not(.register-button):not(.login-button):not(.signup):not(.telegram-contact):not(.contact-1f):not(.rectangle-c):not(.rectangle-f):not(.rectangle-13):not(.rectangle-15), h3:not(.register-button):not(.login-button):not(.signup):not(.telegram-contact):not(.contact-1f):not(.rectangle-c):not(.rectangle-f):not(.rectangle-13):not(.rectangle-15)");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.transition = "opacity 0.8s ease, transform 0.8s ease";
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    scrollElements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        observer.observe(el);
    });

    const cards = document.querySelectorAll('.rectangle-c, .rectangle-f, .rectangle-13, .rectangle-15');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const learnMoreButton = this.querySelector('.learn-more-button');
            if (learnMoreButton) {
                learnMoreButton.style.opacity = '1';
                learnMoreButton.style.transform = 'translateX(-50%) translateY(-10px)';
            }
        });

        card.addEventListener('mouseleave', function () {
            const learnMoreButton = this.querySelector('.learn-more-button');
            if (learnMoreButton) {
                learnMoreButton.style.opacity = '0';
                learnMoreButton.style.transform = 'translateX(-50%) translateY(0)';
            }
        });
    });

    const learnMoreButtons = document.querySelectorAll('.learn-more-button');

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Вы выбрали курс! Мы свяжемся с вами для уточнения деталей.');
        });
    });

    const inputs = document.querySelectorAll('.name-input, .phone-input, .email-input');
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            if (this.value === '') {
                this.placeholder = '';
            }
        });

        input.addEventListener('blur', function () {
            if (this.value === '') {
                this.placeholder = this.getAttribute('data-placeholder');
            }
        });
    });

    document.querySelector('.register-button').addEventListener('click', function () {
        document.getElementById('registration-page').classList.remove('reg-hidden');
    });
      
      document.querySelector('.login-link').addEventListener('click', function () {
        document.getElementById('registration-page').classList.add('hidden');
      });
      
      document.querySelector('.rectangle-3').addEventListener('click', function () {
        const email = document.querySelector('.input-button').value.trim();
        const password = document.querySelector('.input-button-2').value.trim();
      
        if (email === '' || password === '') {
          alert('Пожалуйста, заполните все поля формы.');
        } else {
          alert('Регистрация прошла успешно!');
          document.getElementById('registration-page').classList.add('hidden');
        }
      });

    function () {
    document.querySelector('.register-button')?.addEventListener('click', function () {
        document.getElementById('registration-page').classList.remove('reg-hidden');
    });

    document.querySelector('.login-link')?.addEventListener('click', function () {
        document.getElementById('registration-page').classList.add('hidden');
    });

    document.querySelector('.rectangle-3')?.addEventListener('click', function () {
        const email = document.querySelector('.reg-rectangle:nth-of-type(1) input')?.value.trim();
        const password = document.querySelector('.reg-rectangle:nth-of-type(2) input')?.value.trim();
        if (!email || !password) {
            alert('Пожалуйста, заполните все поля формы.');
        } else {
            alert('Регистрация прошла успешно!');
            document.getElementById('registration-page').classList.add('hidden');
        }
    });

    // Убедимся, что элементы существуют
    const emailInput = document.querySelector('.reg-rectangle:nth-of-type(1) input');
    const passwordInput = document.querySelector('.reg-rectangle:nth-of-type(2) input');

    if (emailInput && passwordInput) {
        function updateButtonState() {
            const createAccountButton = document.querySelector('.reg-submit');
            if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
                createAccountButton.style.opacity = '1';
            } else {
                createAccountButton.style.opacity = '0.7';
            }
        }

        emailInput.addEventListener('input', updateButtonState);
        passwordInput.addEventListener('input', updateButtonState);
    }
});

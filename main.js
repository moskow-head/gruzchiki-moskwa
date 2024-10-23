document.addEventListener('DOMContentLoaded',function () {
    let burger = document.getElementById('burger')

    let header_burger = document.getElementById('header-burger')

    let close = document.getElementById('close')

    burger.onclick = function () {
        header_burger.style.display = 'block'
    }
    close.onclick = function () {
        header_burger.style.display = 'none'
    }

    let onas = document.getElementById('onas')
    onas.onclick = function () {
        header_burger.style.display = 'none'
    }
    let onas1 = document.getElementById('onas1')
    let onas2 = document.getElementById('onas2')
    let onas3 = document.getElementById('onas3')
    let onas4 = document.getElementById('onas4')
    onas1.onclick = function () {
        header_burger.style.display = 'none'
    }
    onas2.onclick = function () {
        header_burger.style.display = 'none'
    }
    onas3.onclick = function () {
        header_burger.style.display = 'none'
    }
    onas4.onclick = function () {
        header_burger.style.display = 'none'
    }
})
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            setTimeout(() => {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }, 500);
        } else {
            console.error(`Элемент с ID ${targetId} не найден.`);
        }
    });
});






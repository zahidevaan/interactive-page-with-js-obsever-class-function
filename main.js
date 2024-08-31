    const sections = document.querySelectorAll('.section');
    const menuItems = document.querySelectorAll('.menu-item');

    const observerOptions = {
        root: null, // It uses the viewport as the container
        rootMargin: '0px', //makeing initial margin 0
        threshold: 0.5 // Trigger when 50% of the section is in view
    };


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // adding visbile class to the visbile section
                entry.target.classList.add('visible');

                // Making Menu Item active based on visible section
                menuItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href').substring(1) === entry.target.id) {
                        item.classList.add('active');
                    }
                });
                // remove visible class form inactive sections
            }else{
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
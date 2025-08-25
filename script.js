document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Anime data - in a real app, this would come from an API
    const animeData = [
         {
            title: "Dragon Ball Super",
            image: "./images/dbs.jpeg",
            episodes: 131,
            rating: 4.8,
            year: 2015
        },
        {
            title: "Demon Slayer",
            image: "./images/demon slayer.jpeg",
            episodes: 26,
            rating: 4.9,
            year: 2019
        },
        {
            title: "Attack on Titan",
            image: "./images/aot.jpeg",
            episodes: 75,
            rating: 4.8,
            year: 2013
        },
        {
            title: "Jujutsu Kaisen",
            image: "./images/jjk.jpeg",
            episodes: 24,
            rating: 4.7,
            year: 2020
        },
        {
            title: "My Hero Academia",
            image: "./images/mha.jpeg",
            episodes: 113,
            rating: 4.6,
            year: 2016
        },
        {
            title: "One Piece",
            image: "./images/one piece.jpeg",
            episodes: 1000,
            rating: 4.9,
            year: 1999
        },
        {
            title: "Naruto Shippuden",
            image: "./images/naruto s.jpeg",
            episodes: 500,
            rating: 4.7,
            year: 2007
        },
        {
            title: "Death Note",
            image: "./images/death note.jpeg",
            episodes: 37,
            rating: 4.8,
            year: 2006
        },
        {
            title: "Tokyo Revengers",
            image: "./images/tokyo revengers.jpeg",
            episodes: 24,
            rating: 4.5,
            year: 2021
        }
    ];
    
    // Populate anime grid
    const animeGrid = document.querySelector('.anime-grid');
    
    animeData.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.className = 'anime-card';
        
        animeCard.innerHTML = `
            <div class="anime-image">
                <img src="${anime.image}" alt="${anime.title}">
            </div>
            <div class="anime-info">
                <h3>${anime.title}</h3>
                <div class="anime-meta">
                    <span>${anime.episodes} ${typeof anime.episodes === 'number' ? 'eps' : ''}</span>
                    <span class="anime-rating">${'★'.repeat(Math.floor(anime.rating))}${'☆'.repeat(5 - Math.floor(anime.rating))}</span>
                </div>
            </div>
        `;
        
        animeGrid.appendChild(animeCard);
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        
        // Simple validation
        if (emailInput.value && emailInput.value.includes('@')) {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
    
    // Anime card click event (could be used to show more details)
    document.querySelectorAll('.anime-card').forEach(card => {
        card.addEventListener('click', function() {
            // In a real app, this would navigate to the anime details page
            const title = this.querySelector('h3').textContent;
            alert(`You clicked on ${title}. This would navigate to the details page in a real app.`);
        });
    });
    
    // Genre card click event
    document.querySelectorAll('.genre-card').forEach(card => {
        card.addEventListener('click', function() {
            const genre = this.querySelector('h3').textContent;
            alert(`You selected the ${genre} genre. This would filter anime by genre in a real app.`);
        });
    });
});
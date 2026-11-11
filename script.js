document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const heavyMetalContainer = document.getElementById('heavyMetalCategory');
    const alternativeRockContainer = document.getElementById('alternativeRockCategory');

    const heavyMetalTitle = heavyMetalContainer ? heavyMetalContainer.previousElementSibling : null;
    const alternativeRockTitle = alternativeRockContainer ? alternativeRockContainer.previousElementSibling : null;

    const heavyMetalCards = [
        { title: 'Metallica - Black Album', price: '17.99', img: 'assets/img/music-covers/heavy-metal/metallica-black-album.jpg' },
        { title: 'Metallica - Master of Puppets', price: '<s>17.99$</s> 1.99', img: 'assets/img/music-covers/heavy-metal/metallica-master-of-puppets.jpg' },
        { title: 'Motorhead - Ace of Spades', price: '11.99', img: 'assets/img/music-covers/heavy-metal/motorhead-ace-of-spades.jpg' },
        { title: 'Black Sabbath - Paranoid', price: '12.19', img: 'assets/img/music-covers/heavy-metal/black-sabbath-paranoid.jpg' },
        { title: 'Rob Zombie - The Sinister Urge', price: '<s>9.99$</s> 0.99', img: 'assets/img/music-covers/heavy-metal/rob-zombie-the-sinister-urge.jpg' },
        { title: 'Metallica - Kill Em All', price: '11.99', img: 'assets/img/music-covers/heavy-metal/metallica-kill-em-all.jpg' },
        { title: 'Rob Zombie - HellBilly Deluxe', price: '10.99', img: 'assets/img/music-covers/heavy-metal/rob-zombie-hellbilly-deluxe.jpg' }
    ];

    const alternativeRockCards = [
        { title: 'Nirvana - Bleach', price: '<s>9.99$</s> 0.99', img: 'assets/img/music-covers/alternative-rock/nirvana-bleach.jpg' },
        { title: 'Down and Outlaws - Above Snakes', price: '9.99', img: 'assets/img/music-covers/alternative-rock/down-and-outlaws-above-snakes.jpg' },
        { title: 'Linkin Park - Meteora', price: '<s>11.99$</s> 1.20', img: 'assets/img/music-covers/alternative-rock/linkin-park-meteora.jpg' },
        { title: 'Down and Outlaws - Gas Money', price: '<s>9.99$</s> 0.99', img: 'assets/img/music-covers/alternative-rock/down-and-outlaws-gas-money.jpg' },
        { title: 'Nirvana - In Utero', price: '11.99', img: 'assets/img/music-covers/alternative-rock/nirvana-in-utero.jpg' },
        { title: 'Spiderbait - Tonight Allright', price: '9.99', img: 'assets/img/music-covers/alternative-rock/spiderbait-tonight-allright.jpg' },
        { title: 'Radiohead - A Moon Shaped Pool', price: '9.99', img: 'assets/img/music-covers/alternative-rock/radiohead-a-moon-shaped-pool.jpg' }
    ];

    function createCardHTML(item) {
        return `
        <div class="shop-card">
            <img class="shop-card_img" src="${item.img}" alt="${item.title}">
            <h2 class="shop-card_title">${item.title}</h2>
            <p class="shop-card_price">${item.price} $</p>
            <a class="shop-card_btn" href="checkout.html">BUY</a>
        </div>
        `;
    }

    heavyMetalContainer.innerHTML = heavyMetalCards.map(createCardHTML).join('');
    alternativeRockContainer.innerHTML = alternativeRockCards.map(createCardHTML).join('');

    searchInput.addEventListener('input', () => {
        const text = searchInput.value.toLowerCase();

        const heavyFiltered = heavyMetalCards.filter(item => 
            item.title.toLowerCase().includes(text));
        const altFiltered = alternativeRockCards.filter(item => 
            item.title.toLowerCase().includes(text));

        heavyMetalContainer.innerHTML = heavyFiltered.map(createCardHTML).join('');
        alternativeRockContainer.innerHTML = altFiltered.map(createCardHTML).join('');

        if (heavyMetalTitle) {
            heavyMetalTitle.style.display = heavyFiltered.length === 0 ? 'none' : '';
        }
        if (alternativeRockTitle) {
            alternativeRockTitle.style.display = altFiltered.length === 0 ? 'none' : '';
        }
    });
});

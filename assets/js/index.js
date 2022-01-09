var splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    perPage: 1,
});

var splidePromo = new Splide('#splidePromo', {
    type: 'loop',
    drag: 'free',
    perPage: 2,
    breakpoints: {
		640: {
			perPage: 1,
		},
    }
});

splide.mount();
splidePromo.mount()
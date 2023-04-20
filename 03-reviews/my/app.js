// local reviews data
const reviews = [
	{
		id: 1,
		name: 'susan smith',
		job: 'web developer',
		img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
		text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		name: 'anna johnson',
		job: 'web designer',
		img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
		text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
	},
	{
		id: 3,
		name: 'peter jones',
		job: 'intern',
		img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
		text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
	},
	{
		id: 4,
		name: 'bill anderson',
		job: 'the boss',
		img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
		text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
	},
];

document.addEventListener("DOMContentLoaded", function () {
	let index = 0;

	let article = document.querySelector("main section article");
	/** @type {HTMLImageElement} */
	let image = article.querySelector(".image img")
	let name = article.querySelector(".name")
	let job = article.querySelector(".job")
	let text = article.querySelector(".text")

	let changeArticle = function (review) {
		image.onload = () => {
			name.textContent = review.name;
			job.textContent = review.job;
			text.textContent = review.text;
		};
		image.src = review.img;
		name.textContent = "loading ...";
		job.textContent = null;
		text.textContent = null;
	};

	changeArticle(reviews[index]);

	let arrowBox = article.querySelector(".arrow-box");
	let leftButton = arrowBox.querySelector(".left");
	leftButton.addEventListener("click", function () {
		index = --index > 0 ? index : reviews.length - 1;
		changeArticle(reviews[index]);
	});
	let rightButton = arrowBox.querySelector(".right");
	rightButton.addEventListener("click", function () {
		index = ++index < reviews.length ? index : 0;
		changeArticle(reviews[index]);
	});

	let randomButton = article.querySelector(".random-button button");
	randomButton.addEventListener("click", function () {
		index = (() => {
			let tempIndex = Math.floor(Math.random() * reviews.length);
			while (index === tempIndex) {
				tempIndex = Math.floor(Math.random() * reviews.length);
			}
			return tempIndex;
		})();
		changeArticle(reviews[index]);
	});
});
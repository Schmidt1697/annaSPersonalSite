const myProjects = [
	{
		id: 1,
		name: 'Sum Trip Travel Journal',
		image: './images/sumTrip.webp',
		description:
			'Document your travels with Sum Trip! Organize adventure details and photos in an easy-access space. With the option to make a trip public, you can share your epic adventures and activities. Explore trips shared by other users and get more ideas for your next outing! This application was created using a React.js frontend and Ruby on Rails API backend. This app utilizes Active Storage for image uploads and is connected to an AWS s3 account for managing image file storage.',
		gitHub: 'https://github.com/Schmidt1697/travel-journal',
		demo_url: 'https://www.youtube.com/embed/N-9SKENigds',
	},
	{
		id: 2,
		name: 'Plantastic',
		image: './images/plantasticLogin.jpeg',
		description:
			'Plantastic allows a user to login/signup, create posts to log favorite plants, and view and comment on post by other users. This full stack application utilizes a React JS frontend and Ruby on Rails backend. This Rails API was designed following MVC architecture.',
		gitHub: 'https://github.com/Schmidt1697/plant-project-phase-4',
		demo_url: 'https://www.youtube.com/embed/o2qXypoHIn0',
	},
	{
		id: 3,
		name: 'Bandit SVC',
		image: './images/BanditHomePage.webp',
		description:
			'This website was created for startup company, Bandit SVC. I collaborated with Michael Schmidt to design, build, and maintain this site. This website was built with React.js, Javascript, CSS, and HTML. The email/contact functionality was created with Twilio SendGrid API.',
		gitHub: 'https://github.com/Schmidt217/Bandit',
		deom_url: '',
	},
	{
		id: 4,
		name: 'Brewery Tomfoolery',
		image: './images/breweryAppHome.webp',
		description:
			'Keep track of your favorite brews and breweries, and also favorite brews posted by other users! This application consists of a React.js frontend and Ruby API built with Sinatra framework for the backend. It is deployed using Netlify and Heroku.',
		gitHub: [
			'https://github.com/Schmidt1697/brewery-tomfoolery-frontend',
			'https://github.com/Schmidt1697/phase-3-sinatra-react-project',
		],
		demo_url: 'https://www.youtube.com/embed/UH6xLloNuGI',
	},
	{
		id: 5,
		name: 'Endless Eats',
		image: './images/EndlessEats.webp',
		description:
			'This applicaton allows a user to search a large external recipe API and save favorite recipes. Favorite recipes are saved and accessed with the deployed site on heroku. In production, the favorited recipes were saved to a db.json file.  This app was made using React.js.',
		gitHub: 'https://github.com/Schmidt1697/recipe-finder',
		demo_url: 'https://www.youtube.com/embed/3KbM6QiL8uw',
	},
	{
		id: 6,
		name: "Who's That Pokemon?!",
		image: './images/Pokemon.webp',
		description:
			"Who's That Pokemon is a game where users can guess what pokemon is displayed to see if they're right or wrong! This game is built using vanilla Javascript, CSS, and HTML. We access a free external API and also use json server to save correctly guessed pokemon to a db.json file.",
		gitHub: 'https://github.com/Schmidt1697/whos-that-pokemon',
		demo_url: 'https://www.youtube.com/embed/if5X75bDoRc',
	},
];

export default myProjects;

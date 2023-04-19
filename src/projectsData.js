// import RickAndMortyThumb from "./assets/img/rick-and-morty-thumb.png";
// import LoginSignupThumb from "./assets/img/login-signup-thumb.gif";
// import MyDefiThumb from "./assets/img/my-defi-thumb.gif";
// import MyPortfolioThumb from "./assets/img/my-portfolio-thumb.gif"

// // const cookieValue = document.cookie
// //   .split("; ").find((row) => row.startsWith("i18next=")).split("=")[1];
const projects = []
// // const projectsEN = [
// //   {
// //     title: 'Rick and Morty App',
// //     description: `This app has been built without exeternal libraries.`,
// //     features: [
// //       `It queries the external API and displays the content on clickable cards.`,
// //       `Each card clicked opens a modal with information coming from the API.`,
// //       `Each card can be set to be a favourite and they will be visibile in its relative page.`,
// //       `The search bar functionality is made in vanilla React.`,
// //       `the pagination functionality is made in vanilla React`
// //     ],
// //     tags: ['React'],
// //     imgUrl: RickAndMortyThumb,
// //     sourceCodeUrl: 'https://github.com/Andrea-Dispe/Rick_and_Morty',
// //     projectShowUrl: 'https://rick-and-morty-app.andreadispe.dev',
// //     weight: 6
// //   },
// //   {
// //     title: 'My DeFi App',
// //     description: `This is a cryptocurrency app that emulates the Alpaca Fince DeFi Protocol in lending, staking and yield farming.`,
// //     features: [
// //       `It connects to the lending currently available in pancake swap.`,
// //       `It connects to the staking currently available in pancake swap.`,
// //       `It connects to the farming pool currently available in pancake swap.`,
// //       `It connects the Metamask wallet to the Bsc (Binance Smart Chain)`
// //     ],
// //     tags: ['React', 'Web3.js'],
// //     imgUrl: MyDefiThumb,
// //     sourceCodeUrl: 'https://github.com/Andrea-Dispe/My_DeFi',
// //     projectShowUrl: 'https://my-defi-app.andreadispe.dev',
// //     weight: 9
// //   },
// //   {
// //     title: 'Login Sign-up App',
// //     description: `This is a full-fledged login and sign-up app that has everything it needs to.`,
// //     features: [
// //       `Sign-up form with inputs validation and sanitation.`,
// //       `Login form with inputs validation and sanitation.`,
// //       `Account email verification.`,
// //       `Password forgot and retrieve process through email.`,
// //       `Notifications available and data saved into Mongo Atlas`
// //     ],
// //     tags: ['React', 'Node'],
// //     imgUrl: LoginSignupThumb,
// //     sourceCodeUrl: 'https://github.com/Andrea-Dispe/Login-Signup-App',
// //     projectShowUrl: 'https://login-signup-app.andreadispe.dev',
// //     weight: 10
// //   },
// //   {
// //     title: 'My Portfolio App',
// //     description: `The portfolio app that you are browsing now.`,
// //     features: [
// //       `Displays my personal projects filtered by tags (tech stack).`,
// //       `It is hosted on a VPS on OVH that I fully configured with Nginx.`,
// //       `All the fronted apps are hosted on Firebase and they point to subdomains of my main domain.`,
// //       `All the backends are hosted in this VPS in subdomains.`,
// //     ],
// //     tags: ['React'],
// //     imgUrl: MyPortfolioThumb,
// //     sourceCodeUrl: 'https://github.com/Andrea-Dispe/My-Portfolio',
// //     projectShowUrl: 'https://andreadispe.dev',
// //     weight: 8
// //   },
// // ]

// // const projectsIT = [
// //   {
// //     title: 'Rick and Morty App',
// //     description: `Tpsdijposdjopfjopsdjopj`,
// //     features: [
// //       `It queries the external API and displays the content on clickable cards.`,
// //       `Each card clicked opens a modal with information coming from the API.`,
// //       `Each card can be set to be a favourite and they will be visibile in its relative page.`,
// //       `The search bar functionality is made in vanilla React.`,
// //       `the pagination functionality is made in vanilla React`
// //     ],
// //     tags: ['React'],
// //     imgUrl: RickAndMortyThumb,
// //     sourceCodeUrl: 'https://github.com/Andrea-Dispe/Rick_and_Morty',
// //     projectShowUrl: 'https://rick-and-morty-app.andreadispe.dev',
// //     weight: 6
// //   },
// //   {
// //     title: 'My DeFi App',
// //     description: `This is a cryptocurrency app that emulates the Alpaca Fince DeFi Protocol in lending, staking and yield farming.`,
// //     features: [
// //       `It connects to the lending currently available in pancake swap.`,
// //       `It connects to the staking currently available in pancake swap.`,
// //       `It connects to the farming pool currently available in pancake swap.`,
// //       `It connects the Metamask wallet to the Bsc (Binance Smart Chain)`
// //     ],
// //     tags: ['React', 'Web3.js'],
// //     imgUrl: MyDefiThumb,
// //     sourceCodeUrl: 'https://github.com/Andrea-Dispe/My_DeFi',
// //     projectShowUrl: 'https://my-defi-app.andreadispe.dev',
// //     weight: 9
// //   },
// //   {
// //     title: 'Login Sign-up App',
// //     description: `Tsdfsdfsdfsdfsdfsdfsdft needs to.`,
// //     features: [
// //       `Sign-up form with inputs validation and sanitation.`,
// //       `Login form with inputs validation and sanitation.`,
// //       `Account email verification.`,
// //       `Password forgot and retrieve process through email.`,
// //       `Notifications available and data saved into Mongo Atlas`
// //     ],
// //     tags: ['React', 'Node'],
// //     imgUrl: LoginSignupThumb,
// //     sourceCodeUrl: 'https://github.com/Andrea-Dispe/Login-Signup-App',
// //     projectShowUrl: 'https://login-signup-app.andreadispe.dev',
// //     weight: 10
// //   },
// //   {
// //     title: 'My Portfolio App',
// //     description: `The portfolio app that you are browsing now.`,
// //     features: [
// //       `Displays my personal projects filtered by tags (tech stack).`,
// //       `It is hosted on a VPS on OVH that I fully configured with Nginx.`,
// //       `All the fronted apps are hosted on Firebase and they point to subdomains of my main domain.`,
// //       `All the backends are hosted in this VPS in subdomains.`,
// //     ],
// //     tags: ['React'],
// //     imgUrl: MyPortfolioThumb,
// //     sourceCodeUrl: 'https://github.com/Andrea-Dispe/My-Portfolio',
// //     projectShowUrl: 'https://andreadispe.dev',
// //     weight: 8
// //   },
// // ]

// // let projects;
// // if(cookieValue === 'en') {
// //   projects = projectsEN
// // } else if (cookieValue === 'it') {
// //   projects = projectsIT
// // }


export default projects;
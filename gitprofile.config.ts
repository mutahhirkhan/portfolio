// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mutahhirkhan', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      // automatic: {
      //   sortBy: 'stars', // Sort projects by 'stars' or 'updated'
      //   limit: 8, // How many projects to display.
      //   exclude: {
      //     forks: false, // Forked projects will not be displayed if set to true.
      //     projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
      //   },
      // },
      manual: {
        sortBy: 'updated',
        // Properties for manually specifying projects
        projects: [
          'mutahhirkhan/sg-templating',
          'mutahhirkhan/thirdweb-x-ipfs',
          'mutahhirkhan/airport-queue-simulation',
          'mutahhirkhan/decare',
          'mutahhirkhan/T200',
          'mutahhirkhan/xord-challenges',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Video Sales Letter',
          description:
            'A web app to create persuasive compelling video marketing content to engage and convert viewers.',
          imageUrl: 'https://i.ibb.co/px2x32C/1697731186728.jpg',
          link: 'https://vsl.vercel.app/',
        },
        {
          title: 'Nas Hacker News',
          description:
            'Digital news application for latest and old news, jobs, stories, etc.',
          imageUrl: 'https://i.ibb.co/VV3WwRL/1697732365177.jpg',
          link: 'https://nas-hackernews.netlify.app/',
        },
        {
          title: 'QUEUEING SIMULATOR AIRPORT SECURITY BOARDING QUEUE',
          description:
            'Airport security boarding queue simulator! QueueVoyage offers a comprehensive simulation platform designed to monitor the efficiency and performance of the boarding queue at airport security checkpoints. ',
          imageUrl: 'https://i.ibb.co/vPbwmzM/image.png',
          link: 'https://simulator.saqlain1020.com/',
        },
        {
          title: 'thirdwebxipfs.netlify.app',
          description:
            'IPFS_NFT-Minter - housing a basic NFT minting website utilizing IPFS via ThirdWeb service. Simple and user-friendly for creating and minting unique NFTs.',
          imageUrl:
            'https://camo.githubusercontent.com/e6a838e3e3fcc7322b8d2488736170805c13e6c3798ee7d8e5e25d55891bbabc/68747470733a2f2f692e6962622e636f2f4e4e57315642332f697066732d74686972647765622e6a7067',
          link: 'https://thirdwebxipfs.netlify.app/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Mutahhir Khan',
    description:
      'Full Stack Engineer | Blockchain Engineer | Hackathon Winner Twice | Performace Optimser',
    imageURL: 'https://i.ibb.co/LpBHLxN/63418479.jpg',
  },
  social: {
    linkedin: 'mutahhirkhan',
    twitter: 'mutahhirEth',
    mastodon: '',
    facebook: 'mutahhiirkhan',
    instagram: 'mutahhiirkhan',
    youtube: 'mutahhirkhan', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'mutahhirkhan',
    dev: '',
    stackoverflow: '12216123/mutahhir-khan', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'mutahhirkhan',
    website: '',
    phone: '',
    email: 'mutahhir199@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1Nt3bA73-D44Icc1SVisrQtZ64c4GQk2o/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'TypeScript',
    'React.js',
    'Next.js',
    'Redux',
    'Firebase',
    'Node.js',
    'Nest.js',
    'Express.js',
    'Rest API',
    'GraphQL',
    'GitHub Actions',
    'MongoDB',
    'Git',
    'Docker',
    'CSS',
    'Antd',
    'Mui',
    'Smart Contract',
    'Solidity',
    'Hardhat Foundry',
    'TheGraph',
    'IPFS Filecoin',
    'DeFi Dev',
    'Jest',
    'Redux Toolkit',
    'Custom Hooks',
    'Firestore & CF',
    'Firebase Auth',
    'MANAGEMENT & Ops',
    'Heroku',
    'Railway',
    'Surge',
    'Dockerization',
    'Netlify',
    'Vite & Vercel',
    'AWS EC2',
    'S3',
    'AWS TTS',
    'Polly',
    'G - Cloud Speech',
    'unit-testing',
  ],
  experiences: [
    {
      company: 'DECHAINS',
      position: 'FullStack Web3 Engineer',
      from: 'Jan 2025',
      to: 'Present',
      companyLink: 'https://www.dechains.com/',
    },{
      company: 'WONDERLAMB LABS',
      position: 'SENIOR SOFTWARE ENGINEER',
      from: 'July 2023',
      to: 'December 2023',
      companyLink: '',
    },
    {
      company: 'Xord',
      position: 'SOFTWARE ENGINEER, BLOCKCHAIN',
      from: 'November 2021',
      to: 'March 2023',
      companyLink: 'https://xord.com/',
    },
    {
      company: 'Al TAFSEER SOLUTIONS',
      position: 'JUNIOR SOFTWARE ENGINEER',
      from: 'June 2021',
      to: 'November 2021',
      comapnyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Solana Blokchain Developer',
      body: 'In collaboration with Solana Foundation, Nas Academy, Wormhole, buildspace, backpack, Pyth and superteam',
      year: 'August 2023',
      link: 'https://drive.google.com/file/d/13sU6SIm-1aWvlo0KlbdBTNmJ9ScEQJry/view?usp=sharing',
    },
    {
      name: 'Scrum Foundation Professional Certificate SFPC',
      body: '',
      year: 'November 2022',
      link: 'https://www.credly.com/badges/57929a90-90d4-4196-9dcb-c3020b78935a/public_url',
    },
  ],
  educations: [
    {
      institution: 'UBIT - Umaer Basha Institute of Information Technology',
      degree: 'BS - Software Engineer',
      from: '2019',
      to: '2022',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'mutahhirkhan', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'luxury',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

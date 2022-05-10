// GitHub

const repo = {
  name: "LaunchX",
  author: "DevLeon00",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
};

console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

const issue = {
  title: "First Issue",
  repositoryNameAssociated: "DevLeon00",
  stats: "On going",
  numberOfComments: 12,
  labels: 3,
  author: "DevLeon",
  dateCreated: "05/09/2022",
  lastUpdated: "05/09/2022 15:43",

  getTitleAndAuthor: function () {
    return `${this.title} by ${this.author}`;
  },

  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
};

const pullRequest = {
  title: "Add more features",
  branchName: "Main",
  dateCreated: "05/09/2022",
  status: "Accepted",
  repositoryNameAssociated: "Node",

  getStatus: function () {
    return `Status: ${this.status}`;
  },

  getTitleAndAuthor: function () {
    return `${this.title} by ${this.author}`;
  },
};

// Twitter
const user = {
  name: "Juan Pablo",
  userName: "DevLe0n",
  description: "Un amigo",
  dateCreated: "05/09/2022",
  followers: ["mau", "pepito"],
  following: ["mau", "pepito"],
  photoUrl: "www.photo.com",
  topics: ["Sports", "Games"],
  numberOfTweets: 0,
};

const trendingTopic = {
  name: "Guerra",
  relatedPersons: "dev",
  numberOfTweets: 0,
};

const hashtag = {
  name: "#Guerra",
  relatedPersons: "dev",
  numberOfTweets: 0,
};

// Facebook
const userFacebook = {
  name: "Juan Pablo",
  userName: "DevLe0n",
  description: "Un amigo",
  dateCreated: "05/09/2022",
  friends: ["mau", "pepito"],
  photoUrl: "www.photo.com",
  topics: ["Sports", "Games"],
  numberOfTweets: 0,
};

const post = {
  name: "Pepito playing",
  comments: [
    {
      name: "Pedro",
      comment: "Hi pepito",
      likes: 0,
    },
  ],
  likes: 14,
};

const biography = {
    text: "Im a blogger",
    gender: "Male",
    bitrthday: "10/29/1914"
};

// Uber

const profile = {
    name: "Juan",
    picture: "www.photo.com",
    stars: 4.3,
    type: "Client",
    currentDirections: "Miami",
}
const travel = {
    endPoint: "Miami",
    startPoint: "Florida",
    driver: "Juan Perez",
    car: "Mazda",
    expectedTime: 8,
    currentTime: 4,
    cost: 12,
}

import React from "react";

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Paul",
  middleName: "",
  lastName: "Nguyen",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/paul-nguyen96",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/paul-nguyen-177339134/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/paul.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"), 

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/paul.jpg"),
  imageSize: 400,
  message:
    "Howdy! My name is Paul Nguyen and I am a graduate from Texas A&M University. I am a self-taught full stack developer with a deep interest in creative problem solving, building ambitious websites & apps, and food. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering! ",
  resume: "https://docs.google.com/document/d/1jmGH1DF-JZfHAo4kgZf1t5VwDm_5mewpqEztwB9lWH4/view",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "paul-nguyen96", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/paul.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/paul.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: <i class="fab fa-js fa-2x"></i> },
    { name: <i class="fab fa-html5 fa-2x"></i>},
    { name: <i class="fab fa-node fa-2x"></i>},
    { name: <i class="fab fa-react fa-2x"></i>},
    { name: <i class="fas fa-leaf fa-2x"></i>},
    { name: <i class="fab fa-git fa-2x"></i>},
    { name: <i class="fab fa-github fa-2x"></i>},
  ],
  softSkills: [
    { name: "Goal-Oriented"},
    { name: "Collaboration"},
    { name: "Positivity"},
    { name: "Adaptability"},
    { name: "Problem Solving"},
    { name: "Empathy"},
    { name: "Organization"},
    { name: "Creativity"},
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Full Stack Developer roles or any opportunities to learn! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "paul121596@icloud.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../'),
      date: '',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../'),
      date: '',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };

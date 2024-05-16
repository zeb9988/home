// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#2c3e50, #34495e, #7f8c8d, #2c3e50, #34495e, #7f8c8d",
  firstName: "Zohaib",
  middleName: "",
  lastName: "Mustafa",
  message: "Transforming ideas to life with seamless mobile app experience",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/zeb9988",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/profile.php?id=100046662125740&mibextid=ZbWKwL",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/zk._.147/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/zeb-khan-6228a1200/",
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
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/pic.png"),
  imageSize: 375,
  message:
    "Hello! I'm Zohaib Mustafa, a passionate Flutter app developer and freelancer with a strong foundation in Computer Science. I graduated from COMSTS with a degree in Computer Science in 2024. My expertise includes working with Flutter to build cross-platform mobile applications and utilizing Node.js and Firebase for backend development.",

  resume: "https://drive.google.com/file/d/1tI22AfA-eztZofSxPpAsUPFEdLrTHVKp/view?usp=drive_link",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "zeb9988", //i.e."johnDoe12Gh"
  reposLength: 8,
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
      img: require("../editable-stuff/pic.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/pic.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Flutter/Dart", value: 90 },
    { name: "Nodejs", value: 60 },
    { name: "Data Structures", value: 60 },
    { name: "C/C++", value: 50 },
    { name: "JavaScript", value: 50 },
    { name: "Java", value: 50 },
    { name: "HTML/CSS", value: 40 },
    { name: "FIREBASE", value: 40 }
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering/Backend Developer  or Flutter developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "Kzeb6788@gmail.com",
};
const experiences = {
  show: true,
  heading: "Professional Experiences",
  data: [
    {
      role: 'Flutter Developer / Software Tester Level 2 Seller',
      companylogo: require('../assets/img/fi.png'),
      date: 'June 2020 – Present',
    },
    {
      role: 'Full Stack Flutter Developer',
      companylogo: require('../assets/img/fi2.png'), // Add the path to the logo for the second company
      date: '2022 – January 2023',
    },
    {
      role: 'Software Engineer Intern',
      companylogo: require('../assets/img/fi3.png'), // Add the path to the logo for the third company
      date: 'May 2021 – August 2021',
    },
  ]
};


export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };

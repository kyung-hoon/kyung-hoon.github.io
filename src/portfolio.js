/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "hooni.min",
  title: "Hi all, I'm hooni!",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web and delivering service based on kubernetes "
  ),
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kyung-hoon",
  linkedin: "https://www.linkedin.com/in/hooni-min/",
  gmail: "kyunghoon451@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BACKEND DEVELOPER WHO WANTS TO EXPLORE VARIOUS TECHNOLOGY STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive service based on spring-boot for your web and mobile applications"
    ),
    emoji("⚡ Also working on progressive deliveries of application services"),
    emoji(
      "⚡ currently working on developing kakao-work engine  "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Konkuk universitry",
      logo: require("./assets/images/UI_Mark.jpg"),
      subHeader: "Bachelor of engineering in Computer Science",
      duration: "March 2012 - February 2019",
      desc: "Participated in the research of implementing Chatbot based on seq-2-seq ",
    },
    {
      schoolName: "Konkuk universitry",
      logo: require("./assets/images/UI_Mark.jpg"),
      subHeader: "Bachelor of engineering in industrial egineering",
      duration: "March 2012 - February 2019",
      desc: "Participated in the research of O.R and business intelligence papers",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend React.js/Angular.js", //Insert stack or technology you have experience in
      progressPercentage: "30%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development based on JAVA/KOTLIN Springboot",
      progressPercentage: "40%"
    },
    {
      Stack: "Backend Development based on JS/TS Node.js",
      progressPercentage: "60%"
    },
    {
      Stack: "Docker/Kubernetes",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer",
      company: "Kakao Enterprise",
      companylogo: require("./assets/images/kakao-ent.png"),
      date: "2021.07 – present",
      desc: "backend service developer, currently working on kakao-work engine services as well as progressive deliveries based on k8s"
    },
    {
      role: "Researcher",
      company: "TmaxSoft",
      companylogo: require("./assets/images/tmaxsoft.jpeg"),
      date: "2019.01 – 2021.07",
      desc: "worked on developing web ide backend services based on node.js, also worked on developing open source pass based on k8s ",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Kubernetes Certified Administrator",
      subtitle:
        "Acquired CKA certificates From Linux Foundation",
      image: require("./assets/images/CKA.png"),
      footerLink: [
        {
          name: "View Certified Kubernetes Administrator",
          url: "https://www.cncf.io/certification/cka/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",

  email_address: "kyunghoon451@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};

/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vaishnavi NR",
  title: "Hi all, I'm Vaishnavi",
  subTitle: emoji(
    "A passionate Flutter Developer 🚀 with experience in building dynamic web and mobile applications using Flutter, Dart, and other modern frameworks and tools."
  ),
  // resumeLink:
  //   "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Vaishnavi-veni",
  linkedin: "https://www.linkedin.com/in/vaishnavi-n-r-874112253?/",
  gmail: "vaishnavinr06@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FLUTTER DEVELOPER EXPLORING INNOVATIVE TECH STACKS",
  skills: [
    emoji(
      "⚡ Develop highly interactive and responsive mobile and web applications using Flutter"
    ),
    emoji(
      "⚡ Build dynamic UI/UX designs with Flutter's rich widget ecosystem"
    ),
    emoji(
      "⚡ Integration of third-party services such as Firebase, AWS, and REST APIs"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "REST APIs",
      fontAwesomeClassname: "fas fa-plug"
    },
    // {
    //   skillName: "SQLite",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "Hive",
    //   fontAwesomeClassname: "fas fa-box"
    // },
    {
      skillName: "GetX",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Provider",
      fontAwesomeClassname: "fas fa-stream"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Firebase Cloud Messaging",
      fontAwesomeClassname: "fas fa-bell"
    }
    // {
    //   skillName: "AWS",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "Docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    // {
    //   schoolName: "Maharshi Dayanand University",
    //   logo: require("./assets/images/Maharshi_Dayanand_University_logo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2020 - April 2024",
    //   desc: "Participated in the research of XXX and published 3 papers.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    {
      schoolName: "Maharshi Dayanand University",
      logo: require("./assets/images/Maharshi_Dayanand_University_logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2020 - April 2024"
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Flutter Development", // Expertise in Flutter app development
      progressPercentage: "90%"
    },
    {
      Stack: "UI/UX Design", // Focus on building interactive and engaging interfaces
      progressPercentage: "85%"
    },
    {
      Stack: "Backend Integration", // Connecting Flutter apps to backends using APIs, Firebase, etc.
      progressPercentage: "75%"
    },
    {
      Stack: "Programming (Dart)", // Core programming knowledge
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Flutter Developer",
      company: "FXCareers",
      companylogo: require("./assets/images/fxcareers_global_logo.jpeg"),
      date: "Jan 2024 – Present",
      desc: "Contributed to building robust and scalable mobile applications using Flutter, ensuring seamless user experiences and efficient performance.",
      descBullets: [
        "Developed and maintained cross-platform mobile applications with Flutter and Dart",
        "Collaborated with designers and backend developers to deliver dynamic UI/UX features",
        "Integrated Firebase services for real-time database management, authentication, and push notifications",
        "Implemented RESTful APIs for efficient data communication between client and server"
      ]
    },
    {
      role: "Flutter Developer Intern",
      company: "NXG Tech & Consulting Pvt. Ltd.",
      companylogo: require("./assets/images/nxg.jpeg"),
      date: "Aug 2023 – Jan 2024",
      desc: "Worked as a Flutter Developer, building and enhancing mobile applications with a focus on performance, scalability, and intuitive user interfaces. Collaborated with cross-functional teams to deliver impactful solutions for client projects."
    },

    {
      role: "Frontend Developer Intern",
      company: "JitTec",
      companylogo: require("./assets/images/jittec1.jpeg"),
      date: "June 2023 – Aug 2023",
      desc: "Worked as a Frontend Developer Intern, developing responsive web interfaces using modern frameworks. Collaborated with senior developers to enhance UI/UX designs and improve application performance."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "APPLICATIONS I HAVE DEVELOPED AND CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/yamarkets_app.webp"),
      projectName: "Yamarkets Academy",
      projectDesc:
        "An education hub for traders and investors to learn and grow in the financial markets.",
      footerLink: [
        {
          name: "Visit App",
          url: "https://play.google.com/store/apps/details?id=com.yamarkets.academy&hl=en_IN&pli=1"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logo-dark.png"),
      projectName: "FxCareers App",
      projectDesc:
        "FXCareers provides a versatile learning environment that caters to the diverse needs of aspiring traders.",
      footerLink: [
        {
          name: "Visit App",
          url: "https://play.google.com/store/apps/details?id=com.futurefinacademy&hl=en_IN"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  // title: emoji("Achievements And Certifications 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  // achievementsCards: [
  //   {
  //     title: "Google Code-In Finalist",
  //     subtitle:
  //       "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
  //     image: require("./assets/images/codeInLogo.webp"),
  //     imageAlt: "Google Code-In Logo",
  //     footerLink: [
  //       {
  //         name: "Certification",
  //         url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
  //       },
  //       {
  //         name: "Award Letter",
  //         url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
  //       },
  //       {
  //         name: "Google Code-in Blog",
  //         url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
  //       }
  //     ]
  //   },
  //   {
  //     title: "Google Assistant Action",
  //     subtitle:
  //       "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
  //     image: require("./assets/images/googleAssistantLogo.webp"),
  //     imageAlt: "Google Assistant Action Logo",
  //     footerLink: [
  //       {
  //         name: "View Google Assistant Action",
  //         url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
  //       }
  //     ]
  //   },
  //   {
  //     title: "PWA Web App Developer",
  //     subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
  //     image: require("./assets/images/pwaLogo.webp"),
  //     imageAlt: "PWA Logo",
  //     footerLink: [
  //       { name: "Certification", url: "" },
  //       {
  //         name: "Final Project",
  //         url: "https://pakistan-olx-1.firebaseapp.com/"
  //       }
  //     ]
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  // title: "Blogs",
  // subtitle:
  //   "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  // displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),
  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/saadpasta-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/"
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8448137425",
  email_address: "vaishnavinr06@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable,
  resumeSection
};

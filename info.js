let info = {
  name: "Shamim Shahcheraghi",
  logo_name: "Shamim Shahcheraghi",
  flat_picture: require("./src/assets/profile.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I have recently completed a master’s in computer engineering from Sharif University of Technology. I am carrying out research on Deep- learning approaches in molecular property prediction and drug discovery.I have worked on graph neural networks and meta - learning. I am interested in Machine - learning and Deep - learning.I like to improve my skills in these ﬁelds.",
  links: {
    linkedin: "https://www.linkedin.com/in/shamim-shahcheraghi-b1b364103/",
    github: "https://github.com/shamimshahcheraghi/",
    email: "shamimshahcheraghi@gmail.com",
    resume:
      "https://github.com/hrishikeshpaul/portfolio-template/blob/master/src/assets/pdfs/Resume.pdf"
  },
  education: [
    {
      name: "Sharif University of Technology",
      place: "Tehran,Iran",
      date: "2019 - 2022",
      degree: "M.Sc. in Computer Engineering, Bioinformatics",
      gpa: "3.9/4(17/20)",
      description:
        "thesis: molecular property prediction using graph neural networks and few- shot learning.",
      skills: [
      ]
    },
    {
      name: "Amirkabir University of Technology",
      place: "Tehran,Iran",
      date: "2014 - 2019",
      degree: "B.S. in Computer Engineering",
      gpa: "3.5/4(16.53/20)",
      description:
        "thesis: FPGA based face recognition.",
      skills: [
      ]
    },
    {
      name: "National Organization for Development of Exceptional Talents(NODET)",
      place: "Shiraz,Iran",
      date: "2010 - 2014",
      degree: "Diploma, Mathematics and Physics",
      gpa: "19.32/20",
    }
  ],
  research_experience: [
    {
      name: "Reasearch Assistant",
      place: "Sharif University of Technology",
      date: "2020 - 2021",
      position: "Supervised by Dr. Mahdieh Soleymani & Dr. Babak Khalaj",
      description:
        "I have been working on Deep-learning approaches in molecular property prediction and drug discovery.<br/> I have been working on implementing a graph based method for molecular property prediction using graph neural networks and fewshot learning",
    },
    {
      name: "Reasearch Assistant",
      place: "Sharif University of Technology",
      date: "2022 - 2023",
      position: "Supervised by Dr. Babak Khalaj & Dr. Amir Shamloo",
      description: "I have been working on predicting protein-aptamer interactions and aptamer generator for a protein",
    },
    {
      name: "Reasearch Assistant",
      place: "Amirkabir University of Technology",
      date: "2019",
      position: "Supervised by Dr. Mohammad Rahmati",
      description: "I developed a FPGA based embedded platform to implement PCA algorithm for real time face recognition.",
    }
  ],
  teaching_experience: [
    {
      name: "Teaching Assistant",
      place: "Sharif University of Technology",
      date: "Sep 2021 - Jan 2022",
      position: "Deep Learning by Dr. Hamid beigy",
    },
    {
      name: "Teaching Assistant",
      place: "Sharif University of Technology",
      date: "Sep 2021 - Jan 2022",
      position: "Machine Learning by Dr. Hamid beigy",
    },
    {
      name: "Teaching Assistant",
      place: "Sharif University of Technology",
      date: "Sep 2021 - Jan 2022",
      position: "Artificial Intelligence by Dr. Arash Abdi",
    },
    {
      name: "Teaching Assistant",
      place: "Amirkabir University of Technology",
      date: "Sep 2017 - Dec 2017",
      position: "Signals and systems by Dr. Mehdi Rasti",
    },
  ],
  work_experience: [
    {
      name: "React-Native & Swift developer",
      place: "Tehran, Iran",
      date: "2018 - 2019",
      position: "Faranegar Pars System",
      description: `
        <ul>
          <li>
              <i>Carpet Management</i>: is an AR application is
              used to help you decide whether the carpet
              goes with the room design.
          </li>

          <li>
              <i>Faranegar Channel</i>: is a leading professional
              social media for informing aviation industry cir-
              culars and is declared as a valid circulars source
              by ATA, KishAir, ...
          </li>

          <li>
              <i>AndisheCar</i>: is programmed to provide taxi ser-
              vice for all companies and institutes.  
          </li>

          <li>
              <i>FDCS</i>: is a comprehensive software that cov-
              ering all aspects of passengers, luggages and
              aircraft handling to simplify the procedures for
              airlines, airports, travel agencies ..
          </li>
        
        </ul>
      `,
    }
  ],

  interests: [
    'Molecular Presentation Learning',
    'Machine learning in drug discovery',
    'Machine-Learning',
    'Deep-Learning'
  ],
  skills: [
    {
      title: "Languages",
      info: [
        "Python",
        "Java",
        "C",
        "C++",
        "SQL",
      ],
      icon: "fa fa-code"
    },
    {
      title: "Data frameworks",
      info: [
        "Pytorch",
        "Numpy",
        "Pandas",
        "OpenCV",
        "SciPy",
        "Scikit-learn",
      ],
      icon: "fa fa-cubes"
    }
  ],
};

export default info;

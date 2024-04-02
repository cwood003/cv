import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  PepsicoLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Cole Wood",
  initials: "CW",
  location: "Salt Lake City, UT, MT",
  locationLink: "https://www.google.com/maps/place/Salt+Lake+City",
  about:
    "Data Strategy | Analytics | Data Products | Media Data ROI",
  summary:
    "In my career I have developed a passion for data and analytics which originated from a gamut of business problems in the CPG industry. My experience includes translating business issues into practical data solutions, strategically developing the data solution archictecture, implementing that solution from a hands-on perspective, perfoming analysis on the resulting data, and communicating those insights back to the business. I have been deeply involved in each step of the full analytics/data solutions/strategy lifecycle specifically relating to the CPG industry and media data business umbrellas. I believe these experiences have given me a unique perspective on how to approach data problems and how to communicate the results back to the business in a way that is actionable and impactful.",
  avatarUrl: "https://avatars.githubusercontent.com/u/54416716?v=4",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "cole.wood@pepsico.com",
    tel: "903-738-3430",
    social: [
      // {
      //   name: "GitHub",
      //   url: "https://github.com/BartoszJarocki",
      //   icon: GitHubIcon,
      // },
      {
        name: "LinkedIn",
        url: "www.linkedin.com/in/cole-wood-6a8416149",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "University of Arkansas",
      degree: "Bachelor's Degree in Computer Science",
      start: "2016",
      end: "2019",
    },
  ],
  work: [
    {
      company: "PepsiCo",
      // link: "https://parabol.co",
      badges: ["Remote"],
      title: "Sr Data Analyst → Associate Manager",
      logo: PepsicoLogo,
      start: "2021",
      end: "2024",
      description:[
        "Fetch Data Analysis",
        "Mdeia Data Hub",
        "Sales Based Outcomes",
        "Harmonya",
        "Adhoc analytics and data expertise"
      ]
    },
    {
      company: "The Hershey Company",
      link: "https://clevertech.biz",
      badges: ["Bentonville, Ar", "Cincinnati, OH","Remote"],
      title: "Category Analyst Walmart, Take Home → Category Analyst Kroger, Seasons → Data Product Manager",
      logo: ClevertechLogo,
      start: "2019",
      end: "2021",
      description:[
        "Implemented a one-stop-shop data platform for all commercial point of sale data sources (Walmart, Target, Kroger, etc.) built on top of Azure, Databricks, and Tableau. My responsibilites included data ingestion/transformation/vizualization as well as client management. Additionaly, I assisted from a product management perspective in the development of the platform and formulated strategies to drive the change from legacy systems and ideas to the new process.",
        "Responsible for the Kroger seasonal candy sales strategy and execution. Including supply chain optimization, pricing strategy, promotional strategy, and sales forecasting.",
        "Augmented Walmart's Take Home candy modular strategy. This role was particularly focused on space planning and assortment optimization."
      ]
    },
  ],
  skills: [
    "Python",
    "Apache Spark: PySpark, Spark SQL",
    "SQL",
    "Cloud Data Architecture: Azure",
    "Data Vizualization: Tableau, Streamlit, Plotly, Matplotlib, Seaborn",
    "Azure Data Factory",
    "Databricks",
    "Snowflake",
    "Project Management using implementing Agile DevOps",
  ],
  references: [
    {
      people: "Kara Pellegrino",
      info: "Director of Something, Pepsico | Email:Testemail@pepsico.com | Phone: 555-555-5555",
    },
    {
      people: "Chad Doremus",
      info: "Director of Something, The Hershey Company | Email: test@email.com | Phone: 555-555-5555",
    }
  ],
  projects: [
    {
      title: "Datonomy",
      techStack: [
        "Custom Product Taxonomy",
        "ML",
        "Data Modeling",
        "3rd Party Partner Integration",
      ],
      description: "A process to automatically classify products into a custom taxonomy using machine learning models.",
      logo: PepsicoLogo,
      // link: {
      //   label: "consultly.com",
      //   href: "https://consultly.com/",
      // },
    },
    {
      title: "Media Data Hub",
      techStack: ["One-stop-shop", "Vendor replacement", "Data Engineering", "Architecture + Strategy + Governance"],
      description:
        "Data Warehouse containing all of the media performance reporting data for PepsiCo... built as a vendor replacement to save money and improve data quality and user experience.",
      logo: PepsicoLogo,
      // link: {
      //   label: "monito.dev",
      //   href: "https://monito.dev/",
      // },
    },
    {
      title: "Sales Based Outcomes",
      techStack: ["Industry leading", "Cleanroom", "ML", "Data Engineering"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
  ],
} as const;

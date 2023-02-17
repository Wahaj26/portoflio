//contact icons
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

// skills icons
import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiSass,
    DiMysql,
  } from 'react-icons/di';
  import {
    SiTypescript,
    SiAmazonaws,
    SiVuedotjs,
    SiAngular,
    SiNestjs,
    SiGraphql,
    SiTensorflow,
    SiCsharp,
    SiMicrosoftazure,
    SiMocha,
    SiChai
  } from 'react-icons/si';
  
const data = {
    fName: 'Qazi',
    lName:'Wahaj',
    name: "Qazi Wahaj",
    logoName: "Qazi",
    animationSkills:[
        'Full-stack Developer',
        'React',
        'Vue',
        'Angular'
    ],
    miniIntro: `Hello I’m Qazi Wahaj, I have 6+ years of experience working as a full-stack developer. Throughout my career, I have worked on various projects in different industries,
    including technology healthcare, hospitality and retail. I have a strong track record of collaborating with cross-functional teams to deliver high-quality results within deadline-driven environments.
    In addition, I possess excellent communication and problem-solving skills, which have enabled me to effectively navigate and overcome challenging situations in the workplace.`,

    detailedIntro: `As a technical lead for many startups in the US, UK, and Middle East, I have a proven track record of delivering high-quality work while following industry standards and best practices. I have a strong understanding of project management and communication skills, which have helped me develop great relationships with clients, fellow developers, and senior managers.
    What sets me apart from other developers is my passion for the industry and my goal-oriented mindset. I take on challenges with enthusiasm and find solutions that exceed expectations. Whether it’s working on a new project or collaborating with a team, I am committed to delivering outstanding results.
    Thank you for visiting my portfolio website.`,
    contacts: [
        {
            title: 'github',
            href: 'https://github.com/Wahaj26',
            icon:<AiFillGithub/>
        },
        {
            title: 'email',
            href: 'mailto:qwahaj26@gmail.com',
            icon:<AiOutlineMail/>,
        },
        {
            title: 'linkedin',
            href: 'https://linkedin.com/in/qw-wahaj/',
            icon:<FaLinkedinIn/>,
        },
        {
            title: 'phone',
            href: 'tel:+49 1590 4698006', 
            icon:<AiFillPhone/>
        }
    ],
    skills: [
        DiHtml5,
        DiCss3,
        DiJavascript1,
        SiTypescript,
        DiReact,
        SiVuedotjs,
        SiAngular,
        DiNodejs,
        SiCsharp,
        SiNestjs,
        SiGraphql,
        DiMongodb,
        DiGit,
        DiSass,
        DiMysql,
        SiTensorflow,
        SiAmazonaws,
        SiMicrosoftazure,
        SiMocha,
        SiChai
    ]
}
export default data
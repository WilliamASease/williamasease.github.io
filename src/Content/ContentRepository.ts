import { contentType } from "../Main/Main";

export type contentObject = {
    title:string,
    body:{
    sup: string;
    sub: string[];
}[]}

 export const getContent = (which:contentType) => {
    switch(which) {
        case 'skills':
            return skills;
        case 'education':
            return education;
        case 'accomplishments':
            return accomplishments;
        case 'projects':
            return projects;
        case 'workexperience':
            return workExperience;
        default:
            return null;
    }
}

 const skills : contentObject = 
{
    title:"Skills", 
    body:
        [
            {
                sup: "Enthusiasm for Craft",
                sub:
                [
                    "Experience across several successful web-based projects",
                    "Emphasis on accessability, usability, and UI design",
                    "Passion for performant solutions"
                ]
            },
            {
                sup: "Professionalism & Interpersonal Communication",
                sub:
                [
                    "Loves collaboration and working in teams",
                    "Works well with developers, project management, and quality assurance",
                    "'Brings presentation skills to these meetings' -- anon"
                ]
            }
        ]
}

 const education : contentObject = 
{
    title:"Education", 
    body:
        [
            {
                sup: "Appalachian State University, Boone, NC",
                sub:
                [
                    "Bachelor of Science in Computer Science, May 2021",
                    "GPA: 3.75",
                ]
            },
            {
                sup: "I'm from around here",
                sub:
                [
                    "Leesville Road High School, Raleigh, NC",
                ]
            }
        ]
}

 const accomplishments : contentObject = 
{
    title:"Accomplishments", 
    body:
        [
            {
                sup: "Assistant to IT Professional",
                sub:
                [
                    "RaleighITGuy (https://raleighitguy.com/) ",
                    "Jan 2017 – April 2017",
                ]
            },
            {
                sup: "Apphack X",
                sub:
                [
                    "First Prize, April 2019",
                    "Tetris Galaxy, a spin on the classic puzzle game, complete with real-time graphics",
                ]
            },
            {
                sup: "A-Team, Appalachian State Competitive Programming",
                sub:
                [
                    "Sep 2018 - May 2021",
                    "2019 ICPC Mid-Atlantic regional: 22nd of 154 teams",
                    "2020 ICPC Mid-Atlantic regional: 17th of 84 teams",
                    "https://mausa19.kattis.com/standings",
                    "https://mausa20.kattis.com/standings"
                ]
            },
        ]
}

 const projects : contentObject = 
{
    title:"Projects", 
    body:
        [
            {
                sup: "Beans Java-- Sole Developer",
                sub:
                [
                    "Simple Java Game",
                    "https://github.com/WilliamASease/BeansJava",
                ]
            },
            {
                sup: "Tetris Galaxy-- Graphics Programmer",
                sub:
                [
                    "Apphack X 1st Prize",
                    "Wrote the Java-Swing frontend for a game created in a strict timeframe",
                    "https://github.com/swansonmp/tetrisGalaxy"
                ]
            },
            {
                sup: "Rogolf -- Developer",
                sub:
                [
                    "Play it in browser at student2.cs.appstate.edu/seasewa/rogolf",
                    "Unity with C#",
                ]
            },
            {
                sup: "Java Mode7 Demo",
                sub:
                [
                    "Simple tech demo featuring 3D rendering on low spec machines!",
                    "https://www.youtube.com/watch?v=7a97zlXLQ7Q",
                    "https://github.com/WilliamASease/Mode7Game"
                ]
            },
            {
                sup: "Other Code Samples and Projects",
                sub:
                [
                    "https://github.com/WilliamASease"
                ]
            }
        ]
}

 const workExperience : contentObject = 
{
    title:'You could say I have "industry cred"', 
    body:
        [
            {
                sup: "Epic Systems Corporation",
                sub:
                [
                    "Full Stack Software Developer",
                    "MyChart “Clinicals” Division",
                    "June 2021 - June 2022"
                ]
            },
            {
                sup: "SAS institute",
                sub:
                [
                    "Senior Associate Software Developer",
                    "Health & Life Sciences",
                    "July 2022 - Present"
                ]
            }
        ]
}
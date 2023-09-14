import React, { useState } from 'react';
import "./Projects.css";
import image24 from '../24_image.png';
import stud1 from '../Student_database_1.png';
import stud2 from '../Student_database_2.png';
import stud3 from '../Student_database_3.png';
import Weaverimg from '../Weaver_image.png';

export const SchoolProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = {
        StudentDatabase: {
            description: "The Student Database is a C application that analyzes comprehensive student data. Sourcing information from Tab-Separated Values files, it systematically organizes data concerning students and their credit hours, GPA, and Ids. From there, the program categorizes the students into different sections such as freshman, sophomore, honor roll etc. This was made possible by utilizing a dictionary or a plethora of linked lists. This was a practice in organizing data and retrieving desired answers based on user input. The terminal based program  is a practice of data structures in C as well as analyzing data.",
            images: [stud1, stud2, stud3]
        },
        weaver: {
            description: "Weaver is a word transformation game developed in C. It is meant to provide an interactive way for users to move from a starting word to a target word, changing one letter at a time and ensuring every intermediary step is a valid dictionary word. I utilized linked lists to manage the database of words, pulling from a words.txt file. This design choice ensures memory efficiency and allows easy adaptability for a varying word database. For added complexity and flexibility, players can either choose the word length for their game or go with a random challenge where the system selects the words. To ensure smooth gameplay, I incorporated functions for validity checks, providing feedback to users when inputs deviate from game rules. This game is an exercise in efficient data structure use and user interface considerations.", 
            images: [Weaverimg]
        },
        Math: {
            description: "The 24-Game offers an arithmetic challenge where players craft expressions using basic mathematical operations to achieve a target of 24. Players can select from multiple difficulty levels, ranging from Easy to Hard, altering the challenge to their expertise. At its core, the project uses custom stack data structures for efficient parsing and real-time evaluation of player inputs, ensuring both mathematical and syntactical accuracy. The provides immediate feedback, guiding players through their mistakes and achievements. Built using C for core game logic and data structures, this interactive program serves as a fun brain exercise.", 
            images: [image24]
        }
    };

    return (
        <div>
            <h1>School Projects</h1>
            <div className="description2">
            Note: There are many more projects I have completed in school but I have chosen to highlight these due to their communacative clarity regarding my skills
            </div>
        
            <div className="boox">
                {Object.keys(projects).map((projectKey) => (
                    <h1 key={projectKey} className="second" onClick={() => setSelectedProject(projectKey)}>
                        {projectKey}
                    </h1>
                ))}
            </div>
            
            <div className="description2">Please select project to view description and more</div>
            
            {selectedProject && (
                <div className="description">
                    <h2>Description</h2>
                    <p>{projects[selectedProject].description}</p>
                    <div>
                        {projects[selectedProject].images.map((imgSrc, index) => (
                            <img 
                                key={index} 
                                src={imgSrc} 
                                alt={`${selectedProject}`} 
                                className={selectedProject === 'StudentDatabase' ? 'vertical' : ''}
                        />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

import './Education.css'
import React from 'react'
import { useState } from 'react';


export default function Education(){

    function ClassItem({title,description,color}){
        const [open,setopen] = useState(false);
        return(
            <li>
                {color === "og" && <div className = "classes-list" onClick = {()=>setopen(prevOpen => !prevOpen)}>{title}</div>}
                {color === "ne" && <div className = "classes-list2" onClick = {()=>setopen(prevOpen => !prevOpen)}>{title}</div>}
                {open && color === "og" && <div className= "class-description">{description}</div>}
                {open && color === "ne" && <div className= "class-description2">{description}</div>}

            </li>
        );
    }

    const classes = [
        {
            title:"CS 113: Program Design I in the Context of Law and Public Policy",
            description:"introduction to programming using law and public policy as the context for programming; control structures, variables, simple and aggregate data types; problem-solving techniques; legal topics: security, privacy, encryption, and predictive policing."
        },
        {
            title:"CS 141:Program Design II",
            description:"Data abstraction and modular design; recursion; lists and stacks; dynamic memory allocation; file manipulation; programming exercises."

        },
        {
            title:"CS 151:Mathematical Foundations of Computing",
            description:"Discrete mathematics concepts fundamental to computing: propositional logic, predicates and quantifiers; proofs; sets; recursive definitions and induction; functions, relations and graphs; combinatorics and discrete probability; applications."
        },
        {
            title:"CS 251:Data Structures",
            description:"Design, usage and analysis of data structures: review of lists, stacks and queues; hash tables, priority queues, search trees, introduction to graphs; searching and sorting; runtime analysis; programming projects and lab exercises."

        },
        {
            title:"CS 211: Programming Practicum",
            description:"Software development tools and practices; debugging and testing; advanced language features; standard libraries; code management."

        },
        {
            title:"CS 401:Computer Algorithms I",
            description:"Design and analysis of computer algorithms. Divide-and-conquer, dynamic programming, greedy method, backtracking. Algorithms for sorting, searching, graph computations, pattern matching, NP-complete problems."

        },

    ]

    const classes2 = [
        {
            title:"CS 261:Machine Organization",
            description:"Data representation and computer arithmetic; machine language; addressing; memory hierarchy; subroutines; data structures; processor architecture: hardware components, pipelining."

        },
        {
            title:"CS 301:Languages and Automata",
            description:"Regular sets and finite automata. Context-free languages and push-down automata. Parsing. Computability theory including Turing machines and decidability."
        },

        {
            title:"CS 342:Software Design",
            description: "Software design principles and practices: Object-oriented design; design patterns; software reuse; testing; event driven programming and concurrency; graphical user interface design and development; Team development."

        },
        {
            title:"CS 412: Introduction to Machine Learning",
            description:"Mechanism, implementation, and application of systems that improve automatically based on past experience, including classification, density estimation, clustering, and online learning tasks and solutions."

        }
    ]



    return(
        <div>
        <h1>Education</h1>
        <h2 className = "categories">Completed Classes</h2>
        <div className = "color-box"></div>
        <h2 className = "categories">Classes in Progress</h2>
        <div className = "color-box2"></div>
        <h4 className = "descriptions">Click to view description</h4>
        <ul className = "classes-list">
        {classes.map((classItem, index) => (
                <ClassItem key={index} title= {classItem.title} description={classItem.description} color = "og"/>
            ))}
        </ul>
        <ul className = "classes-list2">
        {classes2.map((classItem, index) => (
                <ClassItem key={index} title= {classItem.title} description={classItem.description} color = "ne" />
            ))}
        </ul>
        
        </div>
    );
}
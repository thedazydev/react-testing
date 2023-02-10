import { useState, useEffect } from "react";
import { SkillsProps } from "./skills.types";

export const Skills = (props: SkillsProps) => {
    const { skills } = props;
    const { names } = props;
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true)
        }, 500);
    }, []);


    return (
        <>
            <ul>
                {skills.map((skill) => {
                    return <li key={skill}>{skill}</li>;
                })}
            </ul>
            <ul>
                {names.map((name) => {
                    return <li key={name}>{name}</li>;
                })}
            </ul>
            {
                isLoggedIn? (
                    <>
                        <h3>You are logged in!</h3>
                        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                    </>
                ) : (
                    <>
                        <h3>You are not logged in!</h3>
                        <button onClick={() => setIsLoggedIn(true)}>Login</button>
                    </>
                )
            }
        </>
    )
}
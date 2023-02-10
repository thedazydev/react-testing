import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "./skills";

const skills = ["HTML", "CSS", "JavaScript", "React"];
const names = ["John", "Jane", "Mary", "Sarah", "Mike"];
it('should render skills list', () => {
    render(<Skills skills={skills} names={names}/>);
    const [skillTest] = screen.getAllByRole("listitem");
    expect(skillTest).toBeInTheDocument();
})

it('should render skills', () => {
    render(<Skills skills={skills} names={names}/>);
    const [skillTest] = screen.getAllByRole("list");
    expect(skillTest).toBeInTheDocument();
})

it('should h3 and render login button', () => {
    render(<Skills skills={skills} names={names}/>);
    const loginButton = screen.getByRole("button", {
        name: "Login"
    });
    const headingText = screen.queryByRole("heading", {
        level: 3,
        name: "You are not logged in!"
    });
    expect(loginButton && headingText).toBeInTheDocument();
})

it('should not render h3 start learning button', () => {
    render(<Skills skills={skills} names={names}/>);
    const loginButton = screen.queryByRole("button", {
        name: "Start Learning"
    });
    const headingText = screen.queryByRole("heading", {
        level: 3,
        name: "You are logged in!"
    });
    expect(loginButton && headingText).not.toBeInTheDocument();
})

it('Start logout button is eventually displayed', async () => {
    const view = render(<Skills skills={skills} names={names}/>);
    logRoles(view.container)
    // screen.debug()
    const logoutButton = await screen.findByRole("button", {
        name: "Logout"
    })
    expect(logoutButton).toBeInTheDocument();
})
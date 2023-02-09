export default function Application() {
    return (
        <>
            <h1>Job Application Form</h1>
            <h2>Section 1</h2>
            <p>All fields are mandatory</p>
            <span title="close">X</span>
            <div data-testid="custom-element">Custom HTML element</div>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Name" id="name" value="start" onChange={() => {}}/>
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <input name="bio" placeholder="bio" id="bio"/>
                </div>
                <img src="https://www.whydoguys.com/wp-content/uploads/2019/10/Approach-Guy-Working-How.jpg" alt="guy working"/>
                <div>
                    <label htmlFor="job-location">Job Location</label>
                    <select id="job-location">
                        <option value="">Select a location</option>
                        <option value="New York">New York</option>
                        <option value="San Francisco">San Francisco</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Chicago">Chicago</option>
                        <option value="Houston">Houston</option>
                        <option value="Philadelphia">Philadelphia</option>
                        <option value="Dallas">Dallas</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="terms"/>
                        I agree to the terms and conditions
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
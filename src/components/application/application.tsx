export default function Application() {
    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" />
            </div>
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
    )
}
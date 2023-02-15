import { useState } from "react";

function TeamName(){
    const [name, setName] = useState ('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label> Enter first Team Name:
                <input type='text'
                value={name}
                onChange ={(e) => setName (e.target.value)} 
                />
            </label>
             <input type = 'submit' />
        </form>
    );
}

export default TeamName;
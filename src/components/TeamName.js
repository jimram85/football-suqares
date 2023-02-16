import { useState } from "react";

function TeamName(){
    const [name, setName] = useState ('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label className="text-violet-500"> Enter first Team Name:
                <input className="text-orange-500 mx-5 rounded-full border-2 border-black" type='text '
                value={name}
                onChange ={(e) => setName (e.target.value)} 
                />
            </label>
             <input className="text-orange-500 rounded-full bg-black p-3 " type = 'submit' />
        </form>
    );
}

export default TeamName;
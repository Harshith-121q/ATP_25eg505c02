import { useState } from "react";

function TestRefTypes() {
    const [user, setUser] = useState({ Username: "Sachin", age: 21, city: "hyd" });

    const updateUser = () => {
        setUser({ ...user, Username: "harsha" });
    };

    return (
        <div className="text-center">
            <p className="text-3xl">UserName:{user.Username}</p>
            <p className="text-3xl">Age:{user.age}</p>
            <p className="text-3xl">city:{user.city}</p>
            <button className="p-1" onClick={updateUser}>Update User</button>
        </div>
    );
}

export default TestRefTypes;

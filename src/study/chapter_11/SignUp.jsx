import { useState } from "react";

function SignUp(props) {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('man');

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeGender = (e) => {
        setGender(e.target.value);
    }

    const handleSubmit = (e) => {
        alert(`name: ${name}, gender: ${gender}`);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                name:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                gender:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="man">man</option>
                    <option value="woman">woman</option>
                </select>
            </label>
            <button type="submit">submit</button>
        </form>
    )
}

export default SignUp;
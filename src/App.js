import React, {Fragment, useEffect} from "react";
import "./HelloWorld.css";
import Input from "./Input";

function BasicApp(props){

    const [isTrue, setIsTrue] = React.useState(false);
    const [crowd, setCrowd] = React.useState([]);
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [dob, setDob] = React.useState("");

    // refs

    const firstNameRef = React.useRef();
    const lastNameRef = React.useRef(null);
    const dobRef = React.useRef(null);



    const toggleTrue = () => {
        if (isTrue){
            setIsTrue(false);
            return;
        }
        setIsTrue(true);
    };

    useEffect(() => {
        console.log("useEffect called");

        let people = [
            {id: 1, FirstName: "John", LastName: "Smith", dob: "2004-10-08"},
            {id: 2, FirstName: "Jane", LastName: "Doe", dob: "2011-05-20"},
        ];
        setCrowd(people)

    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        console.log("First Name: " + firstName);
        console.log("Last Name: " + lastName);
        console.log("Date of Birth: " + dob);

        if ( lastName !== "" ){
            addPerson(firstName, lastName, dob);
        }

    };

    const addPerson = (newFirstName, newLastName, newDob) => {
        let newPerson = {id: crowd.length + 1, FirstName: newFirstName, LastName: newLastName, dob: newDob};
        const newList = crowd.concat(newPerson);

        const sortedList = newList.sort((a, b) => {
            return a.LastName > b.LastName ? 1 : -1;
        });

        setCrowd(sortedList);

        setFirstName("");
        setLastName("");
        setDob("");

        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        dobRef.current.value = "";

    }

    return (
        <Fragment>
        <hr/>
        <h1 className='h1-green'>{props.msg}</h1>
            <hr/>
            {isTrue &&
                 <Fragment>
                     <p> The current value of isTrue is true</p>
                     <hr/>
                 </Fragment>
            }
            <hr/>
            {isTrue ?
                <p> The current value of isTrue is true</p>: <p> The current value of isTrue is false</p>

            }
            < hr/>

            <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>Toggle isTrue</a>

            <hr/>

            <hr/>

            <form autoComplete="off" onSubmit={handleSubmit}>

                <Input
                    title="First Name"
                    type="text"
                    name="first-name"
                    autoComplete="first-name-new"
                    className="form-control"
                    ref={firstNameRef}
                    onChange={(event) => setFirstName(event.target.value)}
                ></Input>

                <Input
                    title="Last Name"
                    type="text"
                    name="last-name"
                    autoComplete="last-name-new"
                    ref={lastNameRef}
                    className="form-control"
                    onChange={(event) => setLastName(event.target.value)}
                ></Input>

                <Input
                    title="Date of Birth"
                    type="date"
                    name="dob"
                    autoComplete="dob-new"
                    ref={dobRef}
                    className="form-control"
                    onChange={(event) => setDob(event.target.value)}
                ></Input>

                <input type="submit" value="Submit" className="btn btn-primary" />

            </form>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName} </p>
                <p>Date of Birth: {dob}</p>
            </div>

            <h3>People</h3>
            <ul className="list-group">
                {crowd.map((person) => (
                    <li key={person.id} className="list-group-item">{person.FirstName}  {person.LastName}</li>
                ))}

            </ul>


        </Fragment>
    )
}

export default BasicApp;

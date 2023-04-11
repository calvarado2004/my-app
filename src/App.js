import React, {Fragment, useEffect} from "react";
import "./HelloWorld.css";

function HelloWorld(props){

    const [isTrue, setIsTrue] = React.useState(false);
    const [crowd, setCrowd] = React.useState([]);

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
            <h3>People</h3>
            <ul className="list-group">
                {crowd.map((person) => (
                    <li key={person.id} className="list-group-item">{person.FirstName}  {person.LastName}</li>
                ))}

            </ul>


        </Fragment>
    )
}

export default HelloWorld;

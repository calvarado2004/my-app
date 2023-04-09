import React, { Fragment } from "react";
import "./HelloWorld.css";

function HelloWorld(props){

    const [isTrue, setIsTrue] = React.useState(false);

    const toggleTrue = () => {
        if (isTrue){
            setIsTrue(false);
            return;
        }
        setIsTrue(true);
    };

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


        </Fragment>
    )
}

export default HelloWorld;

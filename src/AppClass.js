import React, {Component, Fragment} from 'react';
import './AppClass.css';
import Input from "./Input";

export default class AppClass extends Component {

  constructor(props) {
    super(props);

    this.lastNameRef = React.createRef(null);
    this.firstNameRef = React.createRef(null);
    this.dobRef = React.createRef(null);

    this.state = {
      isTrue: false,
        crowd: [],
    };
  }

  setFirstName(value) {

      this.setState({firstName: value});
  }

  handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        console.log("First Name: " + this.state.firstName);
        console.log("Last Name: " + this.state.lastName);
        console.log("Date of Birth: " + this.state.dob);

        if ( this.state.lastName !== "" ){
            this.addPerson(this.state.firstName, this.state.lastName, this.state.dob);
        }

  }

  addPerson = (newFirstName, newLastName, newDob) => {
        let newPerson = {id: this.state.crowd.length + 1, FirstName: newFirstName, LastName: newLastName, dob: newDob};
        const newList = this.state.crowd.concat(newPerson);

        const sortedList = newList.sort((a, b) => {
            return a.LastName > b.LastName ? 1 : -1;
        });

        this.setState({crowd: sortedList});
        this.setState({firstName: "", lastName: "", dob: ""});
  }

  componentDidMount() {
      this.setState({
          firstName: "",
          lastName: "",
          dob: "",
          crowd: [
              {id: 1, FirstName: "John", LastName: "Smith", dob: "2004-10-08"},
              {id: 2, FirstName: "Jane", LastName: "Doe", dob: "2011-05-20"},
          ],
      });
  }


  toggleTrue = () => {
    if (this.state.isTrue) {
      this.setState({isTrue: false,});
      return;
    }
    this.setState({isTrue: true});
  };

  render() {
    return (
        <Fragment>
          <hr/>
          <h1 className='h1-green'>{this.props.msg}</h1>
          <hr/>
          {this.isTrue &&
              <Fragment>
                <p> The current value of isTrue is true</p>
                <hr/>
              </Fragment>
          }
          <hr/>
          {this.isTrue ?
              <p> The current value of isTrue is true</p>: <p> The current value of isTrue is false</p>

          }
          < hr/>

          <a href="#!" className="btn btn-outline-secondary" onClick={this.toggleTrue}>Toggle isTrue</a>

            <hr/>

            <form autoComplete="off" onSubmit={this.handleSubmit}>

                <Input
                    title="First Name"
                    type="text"
                    name="first-name"
                    autoComplete="first-name-new"
                    className="form-control"
                    ref={this.firstNameRef}
                    onChange={(event) => this.setFirstName(event.target.value)}
                ></Input>

                <Input
                    title="Last Name"
                    type="text"
                    name="last-name"
                    autoComplete="last-name-new"
                    ref={this.lastNameRef}
                    className="form-control"
                    onChange={(event) => this.setState({lastName: event.target.value})}
                ></Input>

                <Input
                    title="Date of Birth"
                    type="date"
                    name="dob"
                    autoComplete="dob-new"
                    ref={this.dobRef}
                    className="form-control"
                    onChange={(event) => this.setState({dob: event.target.value})}
                ></Input>

                <input type="submit" value="Submit" className="btn btn-primary" />

            </form>
            <div>
                <p>First Name: {this.state.firstName}</p>
                <p>Last Name: {this.state.lastName} </p>
                <p>Date of Birth: {this.state.dob}</p>
            </div>

            <h3>People</h3>
            <ul className="list-group">
                {this.crowd.map((person) => (
                    <li key={person.id} className="list-group-item">{person.FirstName}  {person.LastName}</li>
                ))}

            </ul>


        </Fragment>
    );
  }
}
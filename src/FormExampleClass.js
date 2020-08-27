import React from 'react';

class FormExample extends React.Component {
  state = {
    name: '',
    age: '',
    location: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  };

  render() {
    return (
      <>
        <form onSubmit={this.submit}>
          <label>Name</label>
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            value={this.state.name}
          />
          <label>Age</label>
          <input
            onChange={this.handleChange}
            name="age"
            type="text"
            value={this.state.age}
          />
          <label>Location</label>
          <input
            onChange={this.handleChange}
            name="location"
            type="text"
            value={this.state.location}
          />
          <button>Add</button>
        </form>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <p>{this.state.location}</p>
      </>
    );
  }
}

export default FormExample;

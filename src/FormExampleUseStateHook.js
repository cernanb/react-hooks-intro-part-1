import React, { useState } from 'react';

const FormExample = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');

  const submit = (e) => {
    e.preventDefault();
    console.log('submitting');
  };

  return (
    <>
      <form onSubmit={submit}>
        <label>Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
          value={name}
        />
        <label>Age</label>
        <input
          onChange={(e) => setAge(e.target.value)}
          name="age"
          type="text"
          value={age}
        />
        <label>Location</label>
        <input
          onChange={(e) => setLocation(e.target.value)}
          name="location"
          type="text"
          value={location}
        />
        <button>Add</button>
      </form>
      <p>{name}</p>
      <p>{age}</p>
      <p>{location}</p>
    </>
  );
};

export default FormExample;

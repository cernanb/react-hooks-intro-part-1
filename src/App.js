import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import FormExampleClass from './FormExampleClass';
import FormExampleUseStateHook from './FormExampleUseStateHook';
import GithubUseEffectHook from './GithubUseEffectHook';
import './App.css';

function App() {
  return (
    <>
      <FormExampleUseStateHook />
      {/* <GithubUseEffectHook /> */}
      {/* <FormExampleUseStateHook /> */}
    </>
  );
}

export default App;

// What are hooks?
// A way to add state to functional components in react

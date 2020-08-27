import React, { useState, useEffect } from 'react';

const GithubUseEffectHook = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState('cernanb');
  const [page, setPage] = useState(1);

  const [githubUserData, setGithubUserData] = useState({});
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGithubUserData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <button onClick={() => setUser(userName)}>Get User Info</button>
      <h1>{githubUserData.login}</h1>
      <p>{githubUserData.bio}</p>
    </>
  );
};

export default GithubUseEffectHook;

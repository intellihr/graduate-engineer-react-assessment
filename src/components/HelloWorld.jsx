import React from 'react';

const HelloWorld = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <h1>intelliHR</h1>
      </div>
      <div className="col text-right">
        <h1>Movie watchlist assessment</h1>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="alert alert-success" role='alert'>
          Replace this area with your watchlist solution to the problem described in README.md.
          <br />
          Remember:
          <ul>
            <li>Think carefully about the structure of your data and how you want to calculate your statistics.</li>
            <li>Don't focus too much on styling. Keep your UI clean and intuitive to use - think about how you personally would like the UI to work.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default HelloWorld;

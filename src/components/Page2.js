import React from 'react';
import { Link } from 'react-router';

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="not-found">
        <h1>Dummy Page</h1>
        <p>
          <Link to="/">Go back to the main page</Link>
        </p>
      </div>
    );
  }
}
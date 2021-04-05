import { Link } from 'react-router-dom';
import React from 'react';

function OtherPage() {
  return (
    <div>
      Some other page
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default OtherPage;

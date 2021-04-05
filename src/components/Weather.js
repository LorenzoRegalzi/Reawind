import React from 'react';

import Temperature from './Temperature';

const Weather = ({ loading, data, error }) => {
  if (error) {
    return <div >
      <h1 >{error}</h1>
    </div>;
  }

  if (!loading && !data) {
    return null;
  }

  return (
    <div >
      { loading ? <h1 color="#00d1b2">wao</h1> : <Temperature data={data} /> }
    </div>
  );
};


export default Weather;
import React from 'react';

function Documentation() {
  return (
    <div className='documentation' id='docs'>
      <div className='paragraph'>
        <h2>Areas</h2>
        <p>
          Each polygon in the map denotes to a specific area in bangalore. The
          areas are identified using unique area_id.
        </p>
      </div>

      <div className='paragraph'>
        <h2>Color Code</h2>
        <p>
          Areas are color coded with respect to the number of users in each. The
          legend can be seen at the top right side of the map.
        </p>
      </div>
      <div className='paragraph'>
        <h2>Data</h2>
        <p>
          On hovering over each area, a tooltip appears which has the data on
          the number of users, female users, male users and pro users present in
          the area.
        </p>
      </div>
    </div>
  );
}

export default Documentation;

import React from 'react';

function Legend() {
  return (
    <div className='card'>
      <div className='card-content'>
        <div className='content'>
          <div className='columns'>
            <div className='column is-one-quarter'>
              <div
                className='color-box'
                style={{ backgroundColor: '#00ff00' }}
              ></div>
            </div>
            <div className='column'>
              <p className='color-text'>Users &gt; 500</p>
            </div>
          </div>
          <div className='columns'>
            <div className='column is-one-quarter'>
              <div
                className='color-box'
                style={{ backgroundColor: '#32cd32' }}
              ></div>
            </div>
            <div className='column'>
              <p className='color-text'>Users &gt; 400</p>
            </div>
          </div>
          <div className='columns'>
            <div className='column is-one-quarter'>
              <div
                className='color-box'
                style={{ backgroundColor: '#d0f0c0' }}
              ></div>
            </div>
            <div className='column'>
              <p className='color-text'>Users &gt; 300</p>
            </div>
          </div>
          <div className='columns'>
            <div className='column is-one-quarter'>
              <div
                className='color-box'
                style={{ backgroundColor: '#e9ffdb' }}
              ></div>
            </div>
            <div className='column'>
              <p className='color-text'>Users &gt; 200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legend;

import React from 'react';

export default () => {
  return (
    <div style={{marginTop: '50px'}}>
      <hr />
      <h3>
        Site built by <a className="text-info" href="https://github.com/contrecc">Colin Contreary</a>
      </h3>
      <p>It uses React, Reactstrap, and Express</p>
      <p>
        All card data from <a className="text-info" href="https://scryfall.com">Scryfall</a>
      </p>
      <p>
        MTG Battle is unofficial Fan Content permitted under the Fan Content
        Policy. Not approved/endorsed by Wizards. Portions of the materials used
        are property of Wizards of the Coast. &copy;Wizards of the Coast LLC
      </p>
    </div>
  );
};

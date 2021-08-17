import React from 'react';

function DemoOutput({show}) {
    console.log('Demo Rendered!');
    return (
        <p>{show ? 'This is Showing' : null}</p>
    );
};

export default React.memo(DemoOutput);

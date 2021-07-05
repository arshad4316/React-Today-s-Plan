import React from 'react';

import renderer from 'react-test-renderer';
import  Plan  from './Plan';

test('snapshot', () =>{
    const component = renderer.create(<Plan/>);

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
})
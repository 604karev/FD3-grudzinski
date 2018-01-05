import React from 'react';
import ProductRow from '../components/ProductRow';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<ProductRow workMode={''} delete={''} edit={''} select={''} item={''} selectedState={''}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
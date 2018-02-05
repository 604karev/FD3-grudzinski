import React from 'react';
import ProductRow from '../components/ProductRow';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<ProductRow id={''} name="" delete={''} edit={''} select={''}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
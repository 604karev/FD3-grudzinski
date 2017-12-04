import React, {Component} from 'react';
import CreatorElement from './CreatorElement';
import './CreatorTable.css'


class CreatorTable extends Component {


    render() {
        const elements = (<div className='elements'>
            {
                this.props.items.map(
                    (item) => {
                        return (
                            <CreatorElement key={item.id} item={item} />

                        )
                    }
                )}

        </div>);

        // const elementForEach = this.props.items.forEach(
        //     (item) => {
        //         return (
        //             <CreatorElement key={item.id} item={item}/>
        //         );
        //     }
        // );


        return (
            elements
            /* {elementForEach}*/

        )
    }

}

export default CreatorTable
var CreatorTable = React.createClass({

    propTypes: {
        items: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                    id: React.PropTypes.number.isRequired,
                    name: React.PropTypes.string.isRequired,
                    price: React.PropTypes.string.isRequired,
                    img: React.PropTypes.string.isRequired,
                    quantity: React.PropTypes.number.isRequired,

                }
            )
        )
    },
    getInitialState: function () {
        return {
            itemsState: this.props.getShopItems,


        };
    },

    changeElementState: function (e) {
        this.setState({
            itemsState: this.state.itemsState.forEach(
                (data) => {
                    console.log(data.isOpened);
                    /*return data.id === e.currentTarget.id ? !data.isOpened : data.isOpened*/
                    if (data.id === e.currentTarget.id) {
                        data.isOpened = true;

                    }
                    return data


                }
            )
        });
        console.log(e.currentTarget.id)

    },


    render: function () {

        console.log(this.state.itemsState);


        var elements = [];


        this.props.items.forEach(
            (el) => {
                return elements.push(
                    React.DOM.div({
                            key: el.id,
                            className: 'elementRow',
                            id: el.id,
                            onClick: (e) => {
                                return this.changeElementState(e);
                            }
                        }, el.name,
                    )
                )

            }
        );

        var elementCard = this.props.items.map(
            (element) => {
                React.createElement(CreatorElement, {
                        key: element.id,
                        id: element.id,
                        name: element.name,
                        price: element.price,
                        img: element.img,
                        quantity: element.quantity,

                    }
                )
            }
        );


        return React.DOM.div({className: 'table'},

            React.DOM.div({className: 'elements'}, elements),
            /*this.state.isOpened ? React.createElement(CreatorElement, {item: el, key: el.id, id: el.id}) : null*/);
    },

});
var CreatorTable = React.createClass({

    propTypes: {
        items: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                    id: React.PropTypes.number.isRequired,
                    name: React.PropTypes.string.isRequired,
                    price: React.PropTypes.string.isRequired,
                    img: React.PropTypes.string.isRequired,
                    quantity: React.PropTypes.number.isRequired
                }
            )
        )
    },

    render: function () {


        var elements = [];

        this.props.items.forEach(
            function (el) {
                return (
                    elements.push(
                        React.DOM.div({key: el.id, className: 'element'},
                            React.DOM.img({src: el.img, alt: el.name}),
                            React.DOM.div({className: 'elementName'},
                                React.DOM.b({className: 'bold'}, el.name)),
                            React.DOM.div({className: 'quantity'}, 'Колличество: ' + el.quantity),
                            React.DOM.div({className: 'price'}, 'Цена: ' + el.price)
                        )
                    )
                )
            }
        );

        return React.DOM.div({className: 'table'},
            React.DOM.div({className: 'elements'}, elements));
    },

});
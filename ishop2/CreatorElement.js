const CreatorElement = React.createClass({

    propTypes: {
        item: React.PropTypes.shape({
                id: React.PropTypes.number,
                name: React.PropTypes.string.isRequired,
                price: React.PropTypes.string.isRequired,
                img: React.PropTypes.string.isRequired,
                quantity: React.PropTypes.number.isRequired
            }
        )

    },


    render:

        function () {
            return (
                React.DOM.div({className: 'element'},
                    React.DOM.img({src: this.props.item.img, alt: this.props.item.name}),
                    React.DOM.div({className: 'elementName'},
                        React.DOM.b({className: 'bold'}, this.props.item.name)),
                    React.DOM.div({className: 'quantity'}, 'Колличество: ' + this.props.item.quantity),
                    React.DOM.div({className: 'price'}, 'Цена: ' + this.props.item.price)
                )
            )
        }

});
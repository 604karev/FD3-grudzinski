const CreatorEditedForm = React.createClass({

    propTypes: {
        itemsState: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                    id: React.PropTypes.number.isRequired,
                    name: React.PropTypes.string.isRequired,
                    price: React.PropTypes.string.isRequired,
                    img: React.PropTypes.string.isRequired,
                    quantity: React.PropTypes.number.isRequired,
                }
            )
        ),
        pushingObject: React.PropTypes.func,
    },


    render: function () {
        return (
            React.DOM.div({className: 'formEdit'},
                React.DOM.div({className: 'fromWrapper'},
                    React.DOM.label(null, 'Введите название продукта',
                        React.DOM.input({
                            className: 'formEditName',
                            type: 'text'
                        })),
                    React.DOM.label(null, 'Выберите изображение',
                        React.DOM.input({
                            className: 'formEditFile',
                            type: 'file'
                        }),),
                    React.DOM.label(null, 'Введите колличество',
                        React.DOM.input({
                            className: 'formEditQuantity',
                            type: 'number'
                        })
                    ),
                    React.DOM.label(null, 'Введите цену',
                        React.DOM.input({
                            className: 'formEditPrice',
                            type: 'text'
                        },))
                ),
                React.DOM.button({className: 'formEditConfirm', onClick: (e) => this.props.pushingObject(e)}, 'Добавить'),
                React.DOM.button({className: 'formEditCancel'}, 'Отмена'),
            ))


    }


});
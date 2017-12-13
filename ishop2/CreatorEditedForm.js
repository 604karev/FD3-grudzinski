const CreatorEditedForm = React.createClass({

    propTypes: {},


    render: function () {
        return (
            React.DOM.div({className: 'formEdit'},
                React.DOM.div({className: 'fromWrapper'},
                    React.DOM.label(null, 'Введите название продукта',
                        React.DOM.input({
                            className: 'formEditName',
                            type: 'text'
                        })),
                    React.DOM.label(null,'Выберите изображение',
                        React.DOM.input({
                            className: 'formEditFile',
                            type: 'file'
                        }), ),
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
                React.DOM.button({className: 'formEditConfirm'}, 'Добавить'),
                React.DOM.button({className: 'formEditCancel'}, 'Отмена'),
            ))


    }


});
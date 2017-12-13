const CreatorTable = React.createClass({

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
            itemsState: this.props.items,
            editMode: false,
            addingMode: false,
        };
    },

    changeElementState: function (e) {
        this.setState({
            itemsState: this.state.itemsState.map(
                (data) => {
                    console.log(data);
                    (data.id).toString() === e.currentTarget.parentNode.id ? data.isOpened = !data.isOpened : null;
                    return data
                }
            )
        });
        this.state.editMode ? this.setState({editMode: false}) : null;

    },
    editElement: function (e) {
        this.setState({editMode: !this.state.editMode});
        this.state.editMode ? this.changeElementState(e) : this.changeElementState(e);
    },
    addElement: function (e) {
        this.setState({addingMode: !this.state.addingMode});
    },

    deleteElement: function (e) {
        this.setState({
            itemsState: this.state.itemsState.filter(
                (data) => {
                    if (data.id.toString() !== e.currentTarget.parentNode.id) {
                        return data
                    }
                }
            )
        })
    },


    render: function () {

        // console.log(this.state.itemsState);

        let elements = this.state.itemsState.map(
            (el) => {
                if (el.isOpened) {
                    return (
                        React.DOM.div({className: 'elementRow opened', key: el.id, id: el.id,},
                            React.DOM.div({

                                    className: 'elementWrapper',
                                    onClick: (e) => {
                                        return this.changeElementState(e);
                                    }
                                }, el.name,


                                React.createElement(CreatorElement, {
                                        item: el
                                    }
                                )
                            ), React.DOM.button({
                                className: 'remove', onClick: (e) => {
                                    return this.deleteElement(e)
                                }
                            }, 'Удалить'),
                            React.DOM.button({
                                className: 'edit', onClick: (e) => {
                                    return this.editElement(e)
                                }
                            }, 'Редактировать'),
                        )
                    )

                } else {
                    return (
                        React.DOM.div({className: 'elementRow', key: el.id, id: el.id,},
                            React.DOM.div({
                                    className: 'elementWrapper',

                                    onClick: (e) => {
                                        return this.changeElementState(e);
                                    }
                                }, el.name,
                            ), React.DOM.button({
                                className: 'remove', onClick: (e) => {
                                    return this.deleteElement(e)
                                }
                            }, 'Удалить'),
                            React.DOM.button({
                                className: 'edit', onClick: (e) => {
                                    return this.editElement(e)
                                }
                            }, 'Редактировать'),
                        ))
                }
            }
        );

        return React.DOM.div({className: 'table'},
            React.DOM.div({className: 'elements'}, elements),
            this.state.editMode
                ? React.createElement(CreatorEditedForm, {edited: this.state.editMode})
                : null,
            this.state.addingMode ?
                React.createElement(CreatorEditedForm, null) : null,
            React.DOM.button({
                className: 'newElement', onClick: (e) => {
                    this.addElement(e)
                }
            }, 'Добавить')
        )
    },

});
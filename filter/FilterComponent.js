const FilterComponent = React.createClass({

    getInitialState: function () {
        return {
            dataState: this.props.data,
            sortedState: false,
            inputState: '',
        };
    },

    searchNSort: function () {
        if (this.state.inputState !== '') {
            this.setState({
                dataState: this.props.data.filter(
                    (data) => {
                        return (data).toLowerCase().indexOf(this.state.inputState) > -1
                    }
                )
            })

        } else {
            this.setState({
                dataState: this.props.data.map(
                    (data) => {
                        return data
                    }
                )
            })
        }
        if (this.state.sortedState) {
            this.setState({
                dataState: this.state.dataState.map(
                    (data) => {
                        return data
                    }
                ).sort()
            })
        }
    },


    render: function () {
        let table = [];

        this.state.dataState.forEach((item, index) => {
            table.push(React.DOM.div({
                    className: 'elemnt',
                    key: index,
                }, item)
            )
        });

        console.log(this.state.dataState);


        return (
            React.DOM.div({
                    className: 'table'
                },
                React.DOM.label({className: 'sort'}, 'Сортировка',
                    React.DOM.input({
                        className: 'sort',
                        type: 'checkbox',
                        onChange: (e) => {
                            this.setState({sortedState: !this.state.sortedState}, this.searchNSort)

                        }
                    })
                ),
                React.DOM.label({className: 'search'}, 'Поиск',
                    React.DOM.input({
                        className: 'search',
                        type: 'search',
                        onChange: (e) => {
                            this.setState({inputState: e.target.value}, this.searchNSort)
                        }

                    })
                ),
                table)
        )

    }
});
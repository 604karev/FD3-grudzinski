const FilterComponent = React.createClass({

    getInitialState: function () {
        return {
            dataState: this.props.data,
            sortedState: this.props.data,
            filteredState: this.props.data,
        };
    },

    search: function (e) {
        this.setState({
            dataState: this.props.data.filter(
                (data) => {

                    return (data).toLowerCase().indexOf(e.target.value.toLowerCase()) > -1

                }
            )
        });
    },

    sort: function () {

        _.isEqual(this.state.dataState, this.props.data) ?
            this.setState({
                dataState: this.props.data.map(
                    (data) => {
                        return data
                    }
                ).sort()
            }) :
            this.setState({
                dataState: this.props.data
            })


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


        return (


            React.DOM.div({
                    className: 'table'
                },
                React.DOM.label({className: 'sort'}, 'Сортировка',
                    React.DOM.input({
                        className: 'sort',
                        type: 'checkbox',
                        onChange: () => {
                            this.sort()
                        }
                    })
                ),
                React.DOM.label({className: 'search'}, 'Поиск',
                    React.DOM.input({
                        className: 'search',
                        type: 'search',
                        onChange: (e) => {
                            this.search(e)
                        }

                    })
                ),
                table)
        )

    }
});
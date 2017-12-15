const FilterComponent = React.createClass({

    getInitialState: function () {
        return {
            dataState: this.props.data
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
        var self = this;


        _.isEqual(self.state.dataState, self.props.data) ?
            self.setState({
                dataState: self.state.dataState.sort()
            }) :
            self.setState({
                dataState: self.props.data
            })


    },


    render: function () {
        var table = [];

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
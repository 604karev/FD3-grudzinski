const FilterComponent = React.createClass({

    getInitialState: function () {
        return {
            dataState: this.props.data,
            sortedState: false,
            inputState: '',
        };
    },

    searchNSort: function () {

        let resultArray = [];

        if (this.state.inputState !== '') {
            resultArray = this.props.data.filter(
                (data) => {
                    return (data).toLowerCase().indexOf(this.state.inputState) > -1
                }
            )

        } else resultArray = this.props.data;


        if (this.state.sortedState) {
            resultArray = resultArray.map(
                (data)=>{
                    return data
                }
            ).sort()
        }

        this.setState({
            dataState: resultArray.map(
                (data) => {
                    return data
                }
            )
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
                            this.setState({sortedState: e.target.checked}, this.searchNSort)

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
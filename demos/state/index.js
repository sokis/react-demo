/**
 * SunEee Js
 * @data Create. 2015/7/9
 * @author Ryan(鸿飞)<zengyi.zal@gmail.com>
 **/

var CountryDropdown = React.createClass({

    getInitialState() {
        return {
            showOptions: false
        }
    },
    handleClick() {
        this.setState({
            showOptions: true
        });
    },
    render() {

        var options;

        if (this.state.showOptions) {
            options = (
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            );
        }

        return (
            <div className="dropdown" onClick={this.handleClick}>
                <lebal>Choose a country</lebal>
                {options}
            </div>
        );
    }
});
React.render(
    <CountryDropdown />,
    document.getElementById('example')
);
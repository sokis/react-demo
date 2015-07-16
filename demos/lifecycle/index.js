/**
 * SunEee Js
 * @data Create. 2015/7/9
 * @author Ryan(鸿飞)<zengyi.zal@gmail.com>
 **/

var HelloWorld = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    /** 实例化 **/
    getDefaultProps() {
        console.log("getDefaultProps -- 1");
        return {name: "111!"}
    },
    getInitialState: function () {
        console.log("getInitialState -- 2");
        return {message: "111!"}
    },
    componentWillMount() {
        console.log("componentWillMount -- 3");
    },
    componentDidMount() {
        console.log('componentDidMount -- 5');
    },
    handleChange(e) {
        this.setState({message: e.target.value.trim()})
    },
    render: function () {
        var message = this.state.message;
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                {message}
            </div>
        );
    }
    /** end **/,
    componentWillUpdate() {
        console.log(arguments);
    }

});
var prop = {
    name:'zhangsan',
    message:'sadfasf'
};
React.render(
    <HelloWorld {...prop}/>,
    document.getElementById('example')
);
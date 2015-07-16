/**
 * SunEee Js
 * @data Create. 2015/7/9
 * @author Ryan(鸿飞)<zengyi.zal@gmail.com>
 **/

var lis = [
    {title: "zhangsan"},
    {title: 'lisi'}
];

var HelloWorld = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function () {
        return {message: "word!"}
    },
    add: function () {
        console.log(this.refs.rul.getDOMNode());
    },
    render: function () {
        var list = this.props.data.map(function (li) {
            return (
                <li>{li.title}</li>
            );
        });
        return (
            <div>
                <ul ref="rul">
                {list}
                </ul>
                <button onClick={this.add}>Click me .</button>
            </div>
        );
    }
});
React.render(
    <HelloWorld data={lis} />,
    document.getElementById('example')
);
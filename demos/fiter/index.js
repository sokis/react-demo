/**
 * SunEee Js
 * @data Create. 2015/7/10
 * @author Ryan(鸿飞)<zengyi.zal@gmail.com>
 **/

var ProductCategoryRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td colSpan="2">{this.props.category}</td>
            </tr>
        );
    }
});


var ProductRow = React.createClass({
    render: function () {

        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
                {this.props.product.name}
            </span>;

        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
});

var data = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

var ProductTable = React.createClass({
    render: function () {
        var rows = [];
        var lastCategory = null;

        this.props.products.forEach(function (product) {
            if (product.category != lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        }.bind(this));

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var FilterbleProductTable = React.createClass({
    render: function () {
        return (
            <div>
                <ProductTable
                    products={this.props.products}
                />
            </div>
        );
    }
});


React.render(
    <FilterbleProductTable products={data} />,
    document.getElementById('example')
);
/**
 * SunEee Js
 * @data Create. 2015/7/16
 * @author Ryan(鸿飞)<zengyi.zal@gmail.com>
 **/

var SurverEditor = React.createClass({

    render() {
        return (
            <div className="surver-editor">
                <div className="row">
                    <aside className="sidebar col-md-3">
                        <h2>Modules</h2>
                        <DraggableQuestions />
                    </aside>
                </div>
            </div>
        );
    }
});
React.render(
    <SurverEditor />,
    document.getElementById('example')
);
module.exports = function (options) {
    var displayName = options.displayName;
    var LifecycleDebugMixin = ['componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'].reduce(function (acc, funcName) {
        acc[funcName] = function () {
            console.log("DebugMixin. Component: " + displayName + ", method: " + funcName);
            if ('shouldComponentUpdate' === funcName) {
                console.log("DebugMixin. Component: " + displayName + ", returning true");
                return true;
            }
        }.bind(acc);
        return acc;
    }, {});
    LifecycleDebugMixin.setDefaultLoader = function (loader) {
        LifecycleDebugMixin._defaultLoader = loader;
    };
    return LifecycleDebugMixin;
};

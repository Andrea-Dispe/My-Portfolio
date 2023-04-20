const {override, addBabelPlugins} = require('customize-cra')

module.exports = override(
  addBabelPlugins(
    "@babel/plugin-transform-react-jsx", {
      "throwIfNamespace": false
    }
  ),
)
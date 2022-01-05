const _ = require('lodash');
const a = require('@babel/types');
module.exports = () => {
  return {
    visitor: {
      JSXOpeningElement(path) {
        // console.log(path, '---')
        if (path.node.name.name === 'Input') {
          path.node.name.name = 'input'
          // console.log(path.node.attributes)
          path.node.attributes.push(geOnChange())
          path.node.attributes.push(geValue())
          const vBind = _.find(path.node.attributes, v => v.name.name === 'v-bind');
          if (vBind) {
            console.log(vBind.value)
            vBind.value.value += '20'
          }
          console.log(path.node.attributes)
          // process.exit()
        }
      }
    }
  }
}

function geOnChange() {
  var params = a.MemberExpression(a.MemberExpression(a.identifier('v'), a.identifier('target')), a.identifier('value'))
  var setState = a.identifier('setName')
  var setStateCall = a.CallExpression(setState, [params])
  var arrayFunc = a.ArrowFunctionExpression([a.identifier('v')], setStateCall)
  var jsxFunc = a.JSXExpressionContainer(arrayFunc)
  const onChange = a.JSXIdentifier('onChange')
  const attribute = a.JSXAttribute(onChange, jsxFunc)
  return attribute
}

function geValue() {
  const value = a.JSXIdentifier('value')
  const name = a.JSXExpressionContainer(a.identifier('name'))
  const attribute = a.JSXAttribute(value, name)
  return attribute
}
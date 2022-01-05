const glob = require('glob');
const path = require('path');
const { transformSync } = require('@babel/core');
const files = glob.sync('**/*/', {
  matchBase: true,
  cwd: path.resolve(__dirname, '../pages/')
})

// 把所有目录拼接成对象
const dirs = files.reduce((a, b) => ({ ...a, [b]: b.replace(/\/|-/g, '_').toUpperCase()}), {});

const routes = [];
Object.entries(dirs).map(([p, componentName]) => {
  routes.push(`
    <Route path="${p}" element={
      <React.Suspense fallback={<>....</>}>
        <${componentName} />
      </React.Suspense>
    } />
  `)
})

const codeStr = transformSync(routes, {
  presets: ['@babel/preset-react']
})

module.exports = (source) => {
  const str = [];
  Object.entries(dirs).map(([p, componentName]) => {
    str.push(`
      const ${componentName} = React.lazy(() => import('./${p}'))
    `);
  })

  str.unshift('import loadAble from "react-loadable";');
  return str.join('\n') + source.replace('"REACT_ROUTERS"', codeStr.code.slice(0, -1));
}
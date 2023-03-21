import ReactDOM from 'react-dom' // 1.0 create index.js file and index.css in src folder
import App from './App'          // 1.1 import reactDOM and use it to render the app
import './index.css'                // 2.1 import the App component and the index.css file

ReactDOM.render(<App/>, document.querySelector("#root")) // 1.2 render the App component in the index.html file on the 'root <div>'
import { createRoot } from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { basePath } from './config'

createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <App />
    </HashRouter>,
)
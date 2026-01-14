import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ThemeContextProvider from './Context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
    //Sin el BrowserRouter no podemos usar el enrutamiento
    <BrowserRouter>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    </BrowserRouter>
)

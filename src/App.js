/** @format */

import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components';
import { ThemeProvider } from 'styled-components';
import { Globalstyle } from './theme/GlobalStyle';

function App() {
    return (
        <div className='App dark:bg-dark'>
            <Header />
            <AllRoutes />
            <Footer />
        </div>
    );
}

export default App;

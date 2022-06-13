import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'


// contexts
import { AuthProvider } from './contexts/AuthContext'
import { BasketProvider } from './contexts/BasketContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false, //component re-render edildiğinde fetch etme işlemi
      refetchOnWindowFocus: false,  //başka bir sekmeye gidilip gelindiğinde re-fetch işlemi
    }
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ChakraProvider>
        <AuthProvider>
          <BasketProvider>
            <App />
          </BasketProvider>
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>

    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@components/App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 300000,
      cacheTime: 50000
    }
  }
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <App />
      { process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} /> }
    </QueryClientProvider>
  </StrictMode>,
)

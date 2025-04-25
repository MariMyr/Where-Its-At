import { RouterProvider } from 'react-router-dom';
import router from './Router';

function App() {
  return (
    <main className="app">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;

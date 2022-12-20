import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';

import './App.css';

import { Instructions, Root } from './routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to="instructions" />} />
      <Route path="instructions" element={<Instructions />} />
      <Route path="tps-reports" element={<div>TPS Reports Here</div>} />
    </Route>
  )
);

const App: React.FC<unknown> = () => {
  return <RouterProvider router={router} />;
};

export default App;

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import './App.css';

import { Instructions, Root } from './routes';
import { TPSReport } from './routes/TPSReport';
import { TPSReportList } from './routes/TPSReportList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        index: true,
        element: <Navigate to="instructions" />,
      },
      {
        path: 'instructions',
        element: <Instructions />,
      },
      {
        path: 'tps-reports/:id',
        element: <TPSReport />,
      },
      {
        path: 'tps-reports',
        element: <TPSReportList />,
      },
    ],
  },
]);

const App: React.FC<unknown> = () => {
  return <RouterProvider router={router} />;
};

export default App;

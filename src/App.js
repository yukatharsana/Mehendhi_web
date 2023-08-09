import Router from './Router/router';
import {RouterProvider} from 'react-router-dom';

function App() {
  return (
    <div>
      <RouterProvider router={Router}/>
    </div>
  );
}

export default App;

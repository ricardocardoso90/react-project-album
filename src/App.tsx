import './App.css';
import { MainRoutes } from './routes/MainRoutes';

export const App = () => {
  return (
    <div>
      <div className='header'>
        <h1>Galeria de fotos</h1>
      </div>
      <div className='container'>
        <MainRoutes />
      </div>
    </div>
  );
};
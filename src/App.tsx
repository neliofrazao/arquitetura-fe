import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { getStudent } from './api';
// import { Outlet, Route, Routes } from 'react-router-dom';
// const { id } = useParams() //parametro de la url;
// const navigate = useNavigate() //navegar a otra ruta;

{
  /* <nav className='nav-header'>
  <Link className='nav-header__link' to='/'>
    Principal
  </Link>
</nav>; */
}
// const LayoutContainer = () => (
//   <div>
//     <Outlet />
//   </div>
// );
// const Home = () => <div>Home</div>;
// const ComponentsWithRoutes = () => (
//   <Routes>
//     <Route index path='/' element={<Home />} />
//     <Route path='/home' element={<Home />}>
//       <Route path=':id' element={<Home />} />
//     </Route>
//   </Routes>
// );
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchStudent = async () => {
      const response = await getStudent();
      console.log(response);
    };
    fetchStudent();
  }, []);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;

import { ChangeEvent, useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
// import { getStudent } from './api';
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
interface FormState {
  name: string;
  email: string;
}

const ComponentWithChildren = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

function App() {
  const initialFormStateData: FormState = {
    name: '',
    email: '',
  };
  const [formData, setFormData] = useState<FormState>(initialFormStateData);
  const [inputError, setInputError] = useState<{ [key in keyof FormState]?: string }>({});

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log('name', e.target.name);
    // console.log('value', e.target.value);
    const { name, value } = e.target;
    setFormData((prevData) => {
      console.log('prevData', prevData);
      return {
        ...prevData,
        [name]: value,
      };
    });
    if (inputError[name as keyof FormState]) {
      setInputError((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key in keyof FormState]?: string } = {};
    Object.entries(formData).map(([key, value]) => {
      if (!value) {
        newErrors[key as keyof FormState] = 'Campo obrigatório';
        setInputError(newErrors);
      }
    });
  };

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const fetchStudent = async () => {
  //     const response = await getStudent();
  //     console.log(response);
  //   };
  //   fetchStudent();
  // }, []);

  console.log('inputError', inputError);

  return (
    <form onSubmit={handleSubmit}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </Card.Text>
          <Button variant='success'>Go somewhere</Button>
        </Card.Body>
      </Card>
      <ComponentWithChildren> Teste </ComponentWithChildren>
      <div>
        <label htmlFor='name'>Nome:</label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={handleFormChange}
          value={formData.name}
        />
        {inputError.name && <span style={{ color: 'red' }}>{inputError.name}</span>}
      </div>
      <div>
        <label htmlFor='email'>E-mail:</label>
        <input
          type='email'
          id='email'
          name='email'
          onChange={handleFormChange}
          value={formData.email}
        />
        {inputError.email && <span style={{ color: 'red' }}>{inputError.email}</span>}
      </div>
      <button type='submit'>Enviar</button>
    </form>
    // <>
    //   <div>
    //     <a href='https://vitejs.dev' target='_blank'>
    //       <img src={viteLogo} className='logo' alt='Vite logo' />
    //     </a>
    //     <a href='https://react.dev' target='_blank'>
    //       <img src={reactLogo} className='logo react' alt='React logo' />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className='card'>
    //     <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    // </>
  );
}

export default App;

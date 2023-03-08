import { Link } from 'react-router-dom';
import './style404.css';

export default function Page404(): JSX.Element {
  return (
    <>
      <h1>404</h1>
      <h2>Note Found</h2>
      <Link to='/'>Go to the main page</Link>
    </>
  );
}

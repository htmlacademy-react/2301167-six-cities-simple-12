import { Link } from 'react-router-dom';
import './note-found-style.css';

export default function NoteFoundPage(): JSX.Element {
  return (
    <>
      <h1>404</h1>
      <h2>Note Found</h2>
      <Link to='/'>Go to the main page</Link>
    </>
  );
}

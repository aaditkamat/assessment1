import {useState, useEffect} from 'react';
import './App.css';
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList';
import UserList from './components/UserList';
import { Author } from './types/Author';
import { User } from './types/User';

function App() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const handleSubmit = (author: Author) => {
      setAuthors([
          ...authors,
          author
      ]);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err))
  })

  return (
    <div className="App">
      <div className="mx-auto max-w-7xl px-4 py-24">
        <AuthorForm onSubmit={handleSubmit} />
        <div className="bg-gray-50 flex gap-4 py-4 flex-row">
          <AuthorList authors={authors} />
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;

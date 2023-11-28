import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../Components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../Components/home/BooksTable';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4 bg-yellow-400'>
    <div className='flex justify-between items-center bg-yellow-400'>
        <h1 className='text-3xl my-8 mx-auto'>All Books</h1>
        <Link to='/books/create'>
            <MdOutlineAddBox className='text-sky-800 text-6xl' />
        </Link>
    </div>
    <BooksTable books={books} />
</div>

  );
};

export default Home;
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2 '>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md bg-slate-500 text-neutral-100'>No</th>
          <th className='border border-slate-600 rounded-md bg-slate-500 text-neutral-100'>Title</th>
          <th className='border border-slate-600 rounded-md max-md:hidden bg-slate-500 text-neutral-100'>
            Author
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden bg-slate-500 text-neutral-100'>
            Publish Year
          </th>
          <th className='border border-slate-600 rounded-md bg-slate-500 text-neutral-100'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-8'>
            <td className='border-2 border-sky-700 rounded-md text-center text-white'>
              {index + 1}
            </td>
            <td className='border-2 border-sky-700 rounded-md text-center text-white'>
              {book.title}
            </td>
            <td className='border-2 border-sky-700 rounded-md text-center max-md:hidden text-white'>
              {book.author}
            </td>
            <td className='border-2 border-sky-700 rounded-md text-center max-md:hidden text-white'>
              {book.publishYear}
            </td>
            <td className='border-2 border-sky-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-green-400' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-400' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
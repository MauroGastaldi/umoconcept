import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {

  return (
    <div className='loader d-flex justify-content-center'>
        <Spinner animation='border' variant='black'/>
    </div>
  )
}

export default Loader
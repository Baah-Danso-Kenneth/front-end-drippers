import SpinnerImage from '../assets/welcomeImg/spinner.png';


function Spinner() {
  return (
    <div className='flex items-center justify-center'>
        <img className="w-52 animate-fadeIn" src={SpinnerImage}alt="spinner-img" />
    </div>
  )
}

export default Spinner
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <div className='top-0 left-0 h-svh w-full bg-black flex flex-col gap-5 items-center justify-center text-white'>
        <div className='avatar rounded-full'>
          <div className='w-44 rounded-full'>
            <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
          </div>
        </div>
        <p className='flex items-center justify-center text-8xl text-nowrap  font-bold'>Rabee <span className='text-blue-400 ml-3'>Hasan</span></p>
        <span className='text-3xl'>Software Developer</span>
      </div>
    </>

  )
}

export default App

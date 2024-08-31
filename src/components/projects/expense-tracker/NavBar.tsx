
function Navbar() {


    return (
      <div className=" fixed top-0 z-10 flex justify-between h-14 w-full text-white font-medium">
          <div className="flex h-full items-center ml-5 gap-5">
              wallet
          </div>
          <div className="mr-10 hidden sm:block">
              <ul className="flex h-full items-center gap-8">
                  <li onClick={() => {
                    const element = document.getElementById('home')
                    element?.scrollIntoView({
                      behavior: 'smooth'
                    })
                  }} className="hover:text-blue-300 ease-linear duration-100 cursor-pointer">Home</li>
                  <li onClick={() => {
                    const element = document.getElementById('features')
                    element?.scrollIntoView({
                      behavior: 'smooth'
                    })
                  }} className="hover:text-blue-300 ease-linear duration-100 cursor-pointer">Feautres</li>
                  <li  onClick={()=> {
                    const element = document.getElementById('about');
                    element?.scrollIntoView({
                      behavior:'smooth'
                    })
                  }} className="hover:text-blue-300 ease-linear duration-100 cursor-pointer">About</li>
                  <li  onClick={()=> {
                    const element = document.getElementById('demo');
                    element?.scrollIntoView({
                      behavior:'smooth'
                    })
                  }} className="hover:text-blue-300 ease-linear duration-100 cursor-pointer">Demo</li>
              </ul>
          </div>
      </div>
    )
  }
  
  export default Navbar
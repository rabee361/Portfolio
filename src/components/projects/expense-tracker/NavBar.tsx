
function Navbar() {


    return (
      <div className=" fixed top-0 flex justify-between h-14 w-full text-white font-medium">
          <div className="flex h-full items-center ml-5 gap-5">
              wallet
          </div>
          <div className="mr-10 hidden sm:block">
              <ul className="flex h-full items-center gap-8">
                  <li className="hover:text-blue-300 ease-linear duration-100 cursor-pointer">Home</li>
                  <li onClick={() => {
                    const element = document.getElementById('projects')
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
              </ul>
          </div>
      </div>
    )
  }
  
  export default Navbar
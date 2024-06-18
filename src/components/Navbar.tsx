
function Navbar() {
  return (
    <div className=" fixed top-0 flex justify-between h-14 w-full text-white font-medium">
        <div className="flex h-full items-center ml-5">
            Rabee Hasan
        </div>
        <div className="mr-10 hidden sm:block">
            <ul className="flex h-full items-center gap-8">
                <li className="hover:text-blue-300 ease-linear duration-100">Contact</li>
                <li className="hover:text-blue-300 ease-linear duration-100">Projects</li>
                <li className="hover:text-blue-300 ease-linear duration-100">About</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
import { GiReceiveMoney } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";

function Feauters() {
  return (
      <div className="h-screen w-full text-white flex items-center justify-evenly mt-5">
        <div className=" flex flex-col items-center justify-center h-full w-1/4">
          <div className="h-1/3 w-full flex items-center justify-center text-4xl font-bold">
            <GiReceiveMoney size={140}/>
          </div>
          <div className="h-2/3 px-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas laboriosam ut placeat aspernatur accusantium, in doloribus labore voluptatem adipisci fuga exercitationem perferendis possimus repellendus ducimus quae illo provident tempora.
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full w-1/4">
          <div className="h-1/3 w-full flex items-center justify-center text-4xl text-center font-bold">
              <IoIosNotificationsOutline size={140}/>
          </div>
          <div className="h-2/3 px-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas laboriosam ut placeat aspernatur accusantium, in doloribus labore voluptatem adipisci fuga exercitationem perferendis possimus repellendus ducimus quae illo provident tempora.
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center text-center h-full w-1/4">
          <div className="h-1/3 w-full flex items-center justify-center text-4xl font-bold text-center">
              <FaChartLine size={140}/>
          </div>
          <div className="h-2/3 px-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas laboriosam ut placeat aspernatur accusantium, in doloribus labore voluptatem adipisci fuga exercitationem perferendis possimus repellendus ducimus quae illo provident tempora.
          </div>
        </div>
      </div>
  )
}

export default Feauters
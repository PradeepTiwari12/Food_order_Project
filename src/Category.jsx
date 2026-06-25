import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { GiFullPizza } from "react-icons/gi";
import { CiBowlNoodles } from "react-icons/ci";
import { GiHamburger } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
 const Categories = [
  {
    id: 1,
    name:"All",
    image:<TiThSmallOutline className="w-[60px] h-[60px] text-red-500" />,
  },
  {
    id: 2,
    name:"breakfast",
    image:<MdFreeBreakfast className="w-[60px] h-[60px] text-red-500" />,
  },
  {
    id: 3,
    name:"soups",
    image:<TbSoup className="w-[60px] h-[60px] text-red-500" />,
  },
  {
    id: 4,
    name:"pasta",
    image:<CiBowlNoodles className="w-[60px] h-[60px] text-red-500" />,
  },
  {
    id: 5,
    name:"main_course",
    image:<MdFoodBank className="w-[60px] h-[60px] text-red-500" />,
  },
  {
    id: 6,
    name:"pizza",
    image:<GiFullPizza className="w-[60px] h-[60px] text-red-500"  />,
  },
   {
    id: 7,
    name:"burger",
    image:<GiHamburger className="w-[60px] h-[60px] text-red-500" />,
  }

]
export default Categories
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react" 

interface BackButtonProps {
  route: string;
}

const BackButton = ({route}:BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <button className="bg-gray-900 dark:bg-primary text-white dark:text-secondary py-1 px-4 rounded-md flex items-center" onClick={() => navigate(`${route}`)}><ArrowLeft className="mr-2" size={15} />Back</button>
  )
}

export default BackButton
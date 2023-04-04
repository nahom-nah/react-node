import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Todos = () =>{
    
  const { loading, userInfo, error } = useSelector((state) => state.auth)
    if (!userInfo) {
        return (
          <div className='unauthorized'>
            <h1>Unauthorized :(</h1>
            <span>
              <Link to='/login'>Login</Link> to gain access
            </span>
          </div>
        )
      } 
    return <div>
       PROTECTED PAGE
    </div>
}

export default Todos;
import { useSearchParams } from 'react-router-dom';
import LoadMoreView from '../view/LoadMoreView'

const LoadMoreController = () => {
const [params, setParams] = useSearchParams();
const handleClick= ()=> {

  
    //! console.log("tıklanıldı"); 
    
    // güncel sayfa sayısı al
    const pageNumber= params.get("page") || 1;

    // url i güncelle
    setParams({page:Number(pageNumber)+ 1});
};

  return (
  <LoadMoreView handleClick = {handleClick} />
    )

}

export default LoadMoreController;

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import {useState,useEffect} from 'react'
import Loading from '../components/Loading';
import SearchOutput from '../components/SearchOutput';
import SearchError from '../components/SearchError';
const Search = () => {
    const API_Key:string = 'fd4bad44677c4d4c87433438231502'
    const [weather,setWeather] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [err, setErr] = useState('');
    const [empty,setEmpty] = useState(true)
    const [input,setInput] = useState('')


    const typingHandle = (event:any) =>{
        let target = event.target;
        if(target.value !== ''){
            setEmpty(false)
            setInput(target.value)
        }else if(target.value == ''){
            setEmpty(true)
            setInput('')
        }
    }
    const clickHandle = async () =>{
        if(empty){
            alert("Your Input is empty")
        }else{
            setIsLoading(true)
            try{
                const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${input}&aqi=no`,{
                    method:'GET',
                    headers:{
                        Accept:'application/json',
                    },
                })
                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }
                const result = await response.json();
                setWeather(result)
                console.log(result)
                setErr('')
            }catch(error:any){
                setErr(error.message)
                setIsLoading(false)
            }finally{
                setIsLoading(false)
            }
        }
    }
    const keyDownHandle = (event:any) =>{
        if(event.key === 'Enter'){
            clickHandle()
        }
    }


    return ( 
        <div className="search">
            <div className="search-bar">
                <input placeholder='Search...'
                    onKeyDown={(e)=>{keyDownHandle(e)}}
                    onChange={(e)=>{typingHandle(e)}} type="text" 
                />
                <button onClick={clickHandle}>
                    <FontAwesomeIcon icon={solid('magnifying-glass')} />
                </button>
            </div>
            <div className="search-results">
                {isLoading && <Loading/>}
                {!isLoading && weather && err=='' && <SearchOutput weather={weather}/>}
                {err == ''? '' : <SearchError/>}
            </div>
        </div>
    );
}
 
export default Search;
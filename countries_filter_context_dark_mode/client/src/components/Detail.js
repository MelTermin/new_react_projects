import React,{useState,useEffect,useContext} from 'react'
import { useParams,Link, useNavigate} from "react-router-dom";
import CountriesContext from "../context/ContextApi"

function Detail() {
  const {name} = useParams();
  let navigate = useNavigate();

  const {countries}=useContext(CountriesContext)
  const [singleCountry, setSingleCountry]=useState([]);
  const [borders,setBorders]=useState([])
  const[offical,setOffical]=useState([])

 
  const getSingleCountry= async () => {

   const details= countries.filter((item)=> {
     return item.name.toLowerCase()===name.toLowerCase()
    })

    const borderCode= details.map((item)=> {
      return item.borders.join(',')
    })



    setSingleCountry(details)
    setBorders(borderCode)
  }

  useEffect(()=> {
    getSingleCountry()
   
  },[name,countries])

  useEffect(() => {
    async function fetchData() {
      if(borders[0]) {


        const bDataFetched = await fetch(`https://restcountries.com/v2/alpha?codes=${borders[0]}`);
        const bData = await bDataFetched.json();
        console.log(bData)
        setOffical(bData)

      }
      
    }
    fetchData();
  }, [borders]);



const handleGoBack= ()=> {
  navigate("/")
}


  return (
    <div className='detail-wrapper'>
      <button className='btn-back' onClick={handleGoBack}>Go Back</button>
      {singleCountry.map((country)=> {
        return(
          <div key={country.id} className='detail-country'>
           
            <img className='image-flag' src={country.flag} alt={country.name}/>
            
            <div className='other-details'>
              <h3>{country.name}</h3>
              <p><span>Native Name: </span>{country.nativeName}</p>
              <p><span>Population: </span>{country.population}</p>
              <p><span>Region: </span>{country.region}</p>
              <p><span>Sub Region: </span>{country.subregion}</p>
              <p><span>Capital: </span>{country.capital}</p>
              <p><span>Top Level Domain: </span>{country.topLevelDomain}</p>
              <p><span>Currencies: </span>{country.currencies ? (country.currencies[0].name):(<small>No currency avaliable</small>)}</p>
              <p><span>Languages: </span>
                    {country.languages.map((language, index, arr) => (
                      <small key={index}>{language.name}</small>
                    ))}
                  </p>
              <div className='border-countries-wrapper'>
                <span>Border Countries: </span>
                  {offical ? (<>
                  {offical.map((item,index)=> {
                  return(
                    <div key={index}>
                      <Link to={`/country/${item.name}`}>
                        <button>{item.name}</button>
                      </Link>
                    </div>

                     
                    
                  )
                })}
                  </>) :(<span>Doesn't share border with anyone</span>)}
                
                {/* {offical.map((item,index)=> {
                  return(
                    <div key={index}>
                      <Link to={`/country/${item.name}`}>
                        <button>{item.name}</button>
                      </Link>
                    </div>

                     
                    
                  )
                })} */}
              </div>
            </div>
           
          </div>
        )
      })}
    
    

    </div>
  )
}

export default Detail
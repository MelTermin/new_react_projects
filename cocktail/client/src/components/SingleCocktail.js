import React,{useState,useEffect} from 'react'
import { useParams,Link } from "react-router-dom";


function SingleCocktail() {
  let params = useParams();

  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  const getSingleCocktail= async() => {
    setLoading(true)
    try {
      const response= await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      const data= await response.json()
   
      //deconstructing the array because there are a lot properties
      if(data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0]
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ]
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        }
        setCocktail(newCocktail)

      }else {
        setCocktail(null)
      }
    }catch(error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(()=> {
    getSingleCocktail()
    //everytime id changes
  },[params.id])

  if(loading) {
    return(
      <div style={{textAlign:"center", fontSize:"35px"}}>Loading..</div>
    )
  }

  if(!cocktail) {
    console.log(cocktail)
    return(
      <div style={{textAlign:"center", fontSize:"35px"}}>No cocktail to display..</div>
    )
  } 
  const {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingredients,
  } = cocktail
  

  
  return (
    <>
    <Link to='/' >
      <button className='btn-detail'>  back home</button>
     
    </Link>
    <section className=' cocktail-section'>
    <h2 className='section-title'>{name}</h2>
    <div className='drink'>
      <img src={image} alt={name}></img>
      <div className='drink-info'>
        <p>
          <span className='drink-data'>name :</span> {name}
        </p>
        <p>
          <span className='drink-data'>category :</span> {category}
        </p>
        <p>
          <span className='drink-data'>info :</span> {info}
        </p>
        <p>
          <span className='drink-data'>glass :</span> {glass}
        </p>
        <p>
          <span className='drink-data'>instructons :</span> {instructions}
        </p>
        <p>
          <span className='drink-data'>ingredients :</span>
          {ingredients.map((item, index) => {
            return item ? <span key={index}> {item}</span> : null
          })}
        </p>
      </div>
    </div>
  </section>
  </>
  )
}

export default SingleCocktail
import Follerwers from './Follerwers';
import React,{useEffect,useState} from "react"
import { useFetch } from './useFetch';
import './App.css';



function App() {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page])

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }

  const handlePage = (index) => {
    setPage(index)
  }


  return (
    <div className="main-container">
      {loading ? (<div  className='title' ><h2>Loading...</h2></div>): (<div className='title'>
        <h2>Pagination with React</h2>
      </div> )}

      <div className='followers-container'>
        {followers.map((item)=> {
          return(
            <Follerwers key={item.id}  {...item} />
          )
        })}
      </div>
      {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>
        )}
     
    </div>
  );
}

export default App;

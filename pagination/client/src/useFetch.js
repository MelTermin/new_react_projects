import { useState, useEffect } from 'react'
import paginate from './utils';

export const useFetch=() => {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true)

  
  

  const getFollowersData= async() => {
    const url="https://api.github.com/users/john-smilga/followers?per_page=100";
     const response= await fetch(url);
     const responseData= await response.json();
     //console.log(responseData)
     setData(paginate(responseData))
     setLoading(false)
  }

  useEffect(() => {
   getFollowersData();
  },[])
  return { loading, data }
}
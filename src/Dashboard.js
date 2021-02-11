import React, {useState, useEffect} from 'react'
import axios from 'axios' 
import Amplify, { API } from 'aws-amplify';
import {
  Link
} from "react-router-dom";

export default function Dashboard() {
  const proofOfConceptApi = "https://bz2j9g1je4.execute-api.eu-west-1.amazonaws.com/dev"
  const [content, setContent] = useState()
  const [loading, setLoading] = useState(true)

  axios.defaults.headers.common['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

  useEffect(()=> {
    setLoading(true)
    let cancel
    axios.get(proofOfConceptApi, {
      cancelToken: new axios.CancelToken (c => cancel = c)
    }).then(res =>{
      setLoading(false)
      setContent(res)
    })
    return () => {cancel()}
  },[])


  
  if (loading) return (
  <div>
    <p>"Loading..."</p>
    <Link to="/">Home Page</Link>
    <Link to="/auth">Log in</Link>
  </div>
  )

  return (
    <div>
      {content}
      <Link to="/">Home Page</Link>
      <Link to="/auth">Log in</Link>
    </div>
  )
}

// function getData() { 
//   const apiName = 'MyApiName';
//   const path = '/';
//   // const myInit = { // OPTIONAL
//     // headers: {}, // OPTIONAL
//   // };

//   return API.get(apiName, path);
// }

// async function makeCall() {
//   const response = await getData();
//   console.log(response)
//   return response
// }

// function Dashboard() {
//   return (
//     <div><p>hello. this is your response: {makeCall}</p></div>
//     );
// }

// export default Dashboard

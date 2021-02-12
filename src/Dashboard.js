import React, {useState, useEffect} from 'react'

import Amplify, { API , Auth} from 'aws-amplify';
import {
  Link
} from "react-router-dom";

function Dashboard() {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true)
  const apiName = 'proofofconcept';
  const path = '/proof'; 
  const myInit = { };
  
    useEffect(()=> {
          setLoading(true)
          let cancel
          API.get(apiName, path, myInit, {
            cancelToken: new axios.CancelToken (c => cancel = c)
          }).then(res =>{
            setLoading(false)
            setResponse(res)
          }).catch(error => {
            setLoading(false)
            console.log("oh no, an error!")
            console.log(error);
            setResponse(JSON.stringify(error))
          });
          return () => {cancel()}
        },[])
 
  if (loading) return (
      <div>
        <p>"Loading..."</p><br/>
      </div>
      )

  return (
    <div>
      <p>hello. this is your response: {response}</p><br/>
    </div>
    
    );
}

export default Dashboard


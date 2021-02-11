import React, {useState, useEffect} from 'react'
import axios from 'axios' 
import Amplify, { API , Auth} from 'aws-amplify';
import {
  Link
} from "react-router-dom";

// export default function Dashboard() {
//   const proofOfConceptApi = "https://bz2j9g1je4.execute-api.eu-west-1.amazonaws.com/dev/proof"
//   const [content, setContent] = useState()
//   const [loading, setLoading] = useState(true)

//   // axios.defaults.headers.common['Content-Type'] ='application/json;charset=utf-8';
//   // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

//   useEffect(()=> {
//     setLoading(true)
//     let cancel
//     axios.get(proofOfConceptApi, {
//       cancelToken: new axios.CancelToken (c => cancel = c)
//     }).then(res =>{
//       setLoading(false)
//       setContent(res.data)
//     })
//     return () => {cancel()}
//   },[])


  
//   if (loading) return (
//   <div>
//     <p>"Loading..."</p><br/>
//     <Link to="/">Home Page</Link><br/>
//     <Link to="/auth">Log in</Link>
//   </div>
//   )

//   return (
//     <div>
//       {content}<br/>
//       <Link to="/">Home Page</Link><br/>
//       <Link to="/auth">Log in</Link><br/>
//     </div>
//   )
// }

function Dashboard() {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true)
  const apiName = 'proofofconcept';
  const path = '/proof'; 
  const myInit = { };
  //   headers: { 
  //     Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
  //   }}
  
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
  // API
  //   .get(apiName, path, myInit)
  //   .then(response => {
  //     setResponse(response.data)
  //   })
  //   .catch(error => {
  //     console.log("oh no, an error!")
  //     console.log(error.response);
  //     setResponse(error.response)
  //  });
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


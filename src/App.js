// import '@aws-amplify/core/ui-react/styles.css';
// import Amplify from "@aws-amplify/core"

// import {
//   withAuthenticator,
//   Button,
//   Heading,
//   Image,
//   View,
//   Card,
//   Grid,
//   TextField,
//   Alert,
//   Flex,
//   Badge,
//   Text,
//   Table,
//   TableCell,
//   TableHead,
//   TableRow,
//   TableBody,
//   ThemeProvider,
//   Theme,
//   TextAreaField,
//   SelectField,
//   SwitchField,
//   useTheme,
//   Divider,
//   ToggleButton,
//   TabItem,
//   Tabs
// } from "@aws-amplify/ui-react";

import React, {
  useState,
  useEffect,
} from "react";
import { isCompositeComponent } from "react-dom/test-utils";
// import { Auth, Hub } from "aws-amplify";
// import Amplify from "aws-amplify";

function App() {
 
  const [records, setRecords] = useState([]);


  // Fetch the records in the table
  async function fetchRecords(){
    const headers = {
      "Content-Type": "application/json",
    }
    const apiResponse = await fetch('https://guxr3spqrd.execute-api.us-west-1.amazonaws.com/v4/get', {headers} )
    // const apiResponse = await fetch('http://api.open-notify.org/astros.json', {headers} )
    const apiResponseJSON = await apiResponse.json()
    console.log(apiResponseJSON);
    // const rs = apiResponseJSON.body
    // console.log(rs)
    // setRecords([...rs])
    setRecords([...apiResponseJSON])
  }
  // fetchRecords();
  // Fetch the records in the table: UseEffect
  useEffect(() => { 
    async function fetchRecords(){
      const headers = {
        "Content-Type": "application/json",
      }
      const apiResponse = await fetch('https://guxr3spqrd.execute-api.us-west-1.amazonaws.com/v4/get', {headers} )
      // const apiResponse = await fetch('http://api.open-notify.org/astros.json', {headers} )
      const apiResponseJSON = await apiResponse.json()
      console.log(apiResponseJSON);
      // const rs = apiResponseJSON.body
      // console.log("This is rs: " + rs)
      // setRecords([...rs])
      setRecords([...apiResponseJSON])
    }
    fetchRecords()
  }, []);

  return (
    <div className="App">
      <h1>Ransomware Defender</h1>

      <h2><i>Stored Files</i></h2>

      <table className='tableClass'>
        <thead>
        <tr className='rowClass'>
          <td className='columnClass'>
            <b>FILE</b>
          </td>
          <td className='columnClass'>
            <b>TIMESTAMP</b>
          </td>
          <td className='columnClass'>
            <b>HASH</b>
          </td>
          <td className='columnClass'>
            <b>USER</b>
          </td>
        </tr>
        </thead>

      <tbody>

   
      {
      records.length > 0 ? (
        records.map((file) => 
        <>
        {/* <p>hello</p> */}
        <tr className='rowClass'>
          <td className='columnClass'>
            <a href={'https://20221004a.s3.us-west-1.amazonaws.com/'+file.s3Filename.S}>{file.file.S}</a>
          </td>
          <td className='columnClass'>
            {file.timestamp.S}
          </td>
          <td className='columnClass'>
            {file.hash.S}
          </td>
          <td className='columnClass'>
            {file.user.S}
          </td>
        </tr>
        </>
        )) 
        : 
        (<></>)
      }

      </tbody>
      </table>
 
    </div>
  );
}

export default App;

import { Box, Typography } from "@mui/material";
import React from "react";
// import { insertRow } from "../../../api/rowApi";
import PropTypes from "prop-types";




export default function Curl() {
  // console.log(" curl props",props)


// const addRow = async(e) => 
// {
//   e.preventDefault();
//   const dbId = await props?.dbData?.db?._id;
//   const tableName = await props?.dbData?.db?.name;
//   const data = {}
//   //await insertRow(dbId,tableName,data)
// }
// console.log("dbId",dbId);


  return (
    <Box 
      sx={{
        maxHeight: "400px",
        overflow: "auto",
      }}
    >
      <Box sx={{color : "hsla(0,0%,100%,0.5)"}}>EXAMPLE REQUEST
          <Typography><pre>{
           "curl https://localhost:5000/dbId/tablename" 
           }</pre>
          </Typography>
      </Box>
      <Box sx={{color : "hsla(0,0%,100%,0.5)"}}>EXAMPLE RESPONSE</Box>
    </Box>
  );
}
Curl.propTypes= {
  dbs: PropTypes.array,
  dbData: PropTypes.any,
  


}

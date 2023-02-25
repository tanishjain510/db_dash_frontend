import React,{useEffect, useState} from 'react'
import  {Box} from '@mui/material'
import PopupModal from '../popupModal';
import Button from '@mui/material/Button';
import {findUserByEmail} from "../../api/userApi"
import { UserAuth } from "../../context/authContext.js"
import { createOrg } from "../../api/orgApi";
import { OrgList } from './orgList';

export default function WorkspaceCombined() {

    const {user} = UserAuth();
    const [alldbs,setAllDbs] = useState([]);

    //state to display modal
    const [org, setOrg] = useState();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    useEffect(()=>{
    if(user?.email)
      getOrgAndDb();
    },[user])

    const filterDbsBasedOnOrg = async (allDbs)=>
    {
      var result = {};
      allDbs.map((item)=>{
        if(result[item.org_id._id])
        {
          result[item.org_id._id]= [...result[item.org_id._id],item]
        }
        else{
          result[item.org_id._id]= [item ]

        }
          // result[item.org_id.name]=result[item.org_id.name]?[...result[item.org_id.name],item]:[item]
      })
      console.log("result",result);
      setAllDbs(result);
    }
    const getOrgAndDb = async()=>
    {
      const data = await findUserByEmail(user?.email);  
      localStorage.setItem("userid",data?.data?.data?._id)
      filterDbsBasedOnOrg(data?.data?.data?.dbs)
    }
  const saveOrgToDB = async (e) => {
      e.preventDefault();
      const userid = localStorage.getItem("userid");
      await createOrg({name: org,user_id:userid})
      setOpen(false);
    };
  return (
    <>
  <Box>
         <Box sx={{display:'flex',m:3}}>
            <Button onClick={handleOpen} variant="contained">Create Organisation</Button>
            <PopupModal title="create organisation" label="Organization Name" open={open} setOpen ={setOpen}
            saveFunction = {saveOrgToDB}  setVariable={setOrg}/>
          </Box>

          <Box>
            <OrgList alldbs=  {alldbs}  />
          </Box>
    </Box>
          
    </>
  );
}
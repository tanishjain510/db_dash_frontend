import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


// import { createOrg } from "../api/orgApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PopupModal(props) {
  // const [org, setOrg] = React.useState();

  const handleClose = () => props.setOpen(false);

  return (
    <Box>
      <Modal 
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="title" variant="h6" component="h2">
            {props.title}
          </Typography>
          <Box sx={{ my: 2 }}>

            <TextField 
             autoFocus
              id={props?.id}
              name={props?.id}
              label={props.label} 
              variant="standard"
              onChange={(e) => {
                props.setVariable(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  props.saveFunction(e);
                  handleClose();
                }
              }}
            />

          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Button variant="contained" onClick={()=>{
                  // props?.saveFunction ();
                  props?.submitData();
              }}>
                Create
              </Button>
            </Box>
            <Box>
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
            </Box>
            
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

PopupModal.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  label: PropTypes.string,
  saveFunction:PropTypes.func,
  setVariable:PropTypes.func,
<<<<<<< HEAD
  id: PropTypes.string,
  submitData: PropTypes.func,
  variable:PropTypes.string
=======
  id: PropTypes.string
>>>>>>> 3026241893df574afa63f4177af6bf92cda3fe7e
};

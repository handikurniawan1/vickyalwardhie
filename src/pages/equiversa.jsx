import React, { useState } from "react";
import "../assets/project.css";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
// Render
import Image1 from "../assets/equiversa_office/equiversa_1.jpg";
import Image2 from "../assets/equiversa_office/equiversa_2.jpg";
import Image3 from "../assets/equiversa_office/equiversa_3.jpg";
import Image4 from "../assets/equiversa_office/equiversa_4.jpg";
import Image5 from "../assets/equiversa_office/equiversa_5.jpg";
import Image6 from "../assets/equiversa_office/equiversa_6.jpg";
import Image7 from "../assets/equiversa_office/equiversa_7.jpg";
// Denah
import Denah1 from "../assets/equiversa_office/Denah-01.png";
import Denah2 from "../assets/equiversa_office/Denah-02.png";
// import Denah3 from "../assets/equiversa_office/Denah-03rr.jpg";


const Equiversa = () => {
  const ImageData = [
    {
      id: 1,
      imgSrc: Image1,
    },
    {
      id: 2,
      imgSrc: Image2,
    },
    {
      id: 3,
      imgSrc: Image3,
    },
    {
      id: 4,
      imgSrc: Image4,
    },
    {
      id: 5,
      imgSrc: Image5,
    },
    {
      id: 6,
      imgSrc: Image6,
    },
    {
      id: 7,
      imgSrc: Image7,
    },
  ];
  const ImageDenah = [
    {
      id: 1,
      imgSrc: Denah1,
    },
    {
      id: 2,
      imgSrc: Denah2,
    },
    // {
    //   id: 3,
    //   imgSrc: Denah3,
    // }
  ];
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpenDialog = (imgSrc) => {
    setSelectedImage(imgSrc);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  return (
    <div className="Project">
      <div className="Wrapper">
        <div className="Project-title">
          <h1>Equiversa Office</h1>
        </div>
        <div id="Content">
          <div id="grid-container">
            {ImageData.map((item) => {
              return (
                <div className="grid-item" key={item.id} onClick={() => handleOpenDialog(item.imgSrc)}>
                  <img src={item.imgSrc} alt="nature" className="responsive-image" />
                </div>
              );
            })}
          </div>
          <Dialog
            open={dialogOpen}
            onClose={handleCloseDialog}
            fullWidth
            maxWidth="lg" // Gunakan "lg" untuk lebar maksimum
          >
            <DialogTitle style={{ backgroundColor: "black", color: "#ffd300" }}>
              Equiversa Office
              <Button onClick={handleCloseDialog} color="primary" style={{ position: "absolute", right: 10, top: 10, color: "#ffd300", fontSize: "20px" }}>
                X
              </Button>
            </DialogTitle>
            <DialogContent style={{ overflowY: "hidden", backgroundColor: "black" }}>
              <img src={selectedImage} alt="nature" className="responsive-image" style={{ width: "100%", height: "auto", display: "block" }} />
            </DialogContent>
          </Dialog>
        </div>
        <div className="Project-title">
          <h1>Denah</h1>
        </div>
        <div id="Content">
          <div id="grid-container">
            {ImageDenah.map((item) => {
              return (
                <div className="grid-item" key={item.id} onClick={() => handleOpenDialog(item.imgSrc)}>
                  <img src={item.imgSrc} alt="nature" className="responsive-image" />
                </div>
              );
            })}
          </div>
          <Dialog
            open={dialogOpen}
            onClose={handleCloseDialog}
            fullWidth
            maxWidth="lg" // Gunakan "lg" untuk lebar maksimum
          >
            <DialogTitle style={{ backgroundColor: "black", color: "#ffd300" }}>
              Equiversa Office
              <Button onClick={handleCloseDialog} color="primary" style={{ position: "absolute", right: 10, top: 10, color: "#ffd300", fontSize: "20px" }}>
                X
              </Button>
            </DialogTitle>
            <DialogContent style={{ overflowY: "hidden", backgroundColor: "black" }}>
              <img src={selectedImage} alt="nature" className="responsive-image" style={{ width: "100%", height: "auto", display: "block" }} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Equiversa;

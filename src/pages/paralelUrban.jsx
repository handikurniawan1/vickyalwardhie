import React, { useState } from "react";
import "../assets/project.css";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
// Image Import
import Image1 from "../assets/paralel_urban/PUF1.png";
import Image2 from "../assets/paralel_urban/PUF2.png";
import Image3 from "../assets/paralel_urban/PUF3.png";
import Image4 from "../assets/paralel_urban/PUF4.png";
import Image5 from "../assets/paralel_urban/PUF5.png";
import Image6 from "../assets/paralel_urban/PUF6.png";
import Image7 from "../assets/paralel_urban/PUF7.png";
// Denah Import
import Denah1 from "../assets/paralel_urban/PUF_DENAH1.png";
import Denah2 from "../assets/paralel_urban/PUF_DENAH2.png";
import Denah3 from "../assets/paralel_urban/PUF_DENAH3.png";

const ParalelUrban = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpenDialog = (imgSrc) => {
    setSelectedImage(imgSrc);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
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
    {
      id: 3,
      imgSrc: Denah3,
    },
  ];
  return (
    <>
      <div className="Project">
        <div className="Wrapper">
          <div className="Project-title">
            <h1>Paralel Urban Farm</h1>
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
                Paralel Urban Farm
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
    </>
  );
};

export default ParalelUrban;

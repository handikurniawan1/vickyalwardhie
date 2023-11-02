import React, { useState } from "react";
import "../assets/project.css";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

// Image Import
import Image1 from "../assets/modern_minimalis/MMI1.jpg";
import Image2 from "../assets/modern_minimalis/MMI2.jpg";
import Image3 from "../assets/modern_minimalis/MMI3.jpg";
import Image4 from "../assets/modern_minimalis/MMI4.jpg";
import Image5 from "../assets/modern_minimalis/MMI5.jpg";
import Image6 from "../assets/modern_minimalis/MMI6.jpg";
import Image7 from "../assets/modern_minimalis/MMI7.jpg";
import Image8 from "../assets/modern_minimalis/MMI8.jpg";
import Image9 from "../assets/modern_minimalis/MMI9.jpg";
import Image10 from "../assets/modern_minimalis/MMI10.jpg";
import Image11 from "../assets/modern_minimalis/MMI11.jpg";
import Image12 from "../assets/modern_minimalis/MMI12.jpg";
import Image13 from "../assets/modern_minimalis/MMI13.jpg";
// Denah Import
import Denah1 from "../assets/modern_minimalis/MMI_DENAH1.png";
import Denah2 from "../assets/modern_minimalis/MMI_DENAH2.png";
import Denah3 from "../assets/modern_minimalis/MMI_DENAH3.png";

const Modern = () => {
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
    {
      id: 8,
      imgSrc: Image8,
    },
    {
      id: 9,
      imgSrc: Image9,
    },
    {
      id: 10,
      imgSrc: Image10,
    },
    {
      id: 11,
      imgSrc: Image11,
    },
    {
      id: 12,
      imgSrc: Image12,
    },
    {
      id: 13,
      imgSrc: Image13,
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
    <>
      <div className="Project">
        <div className="Wrapper">
          <div className="Project-title">
            <h1>Modern Minimalis Interior</h1>
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
                Modern Minimalis Interior
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

export default Modern;

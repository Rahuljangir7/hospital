import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Heading from "./Heading";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Form from "./Form";

const Footer = () => {
  const styles =
    "hover:text-green-400 hover:border-b-2 hover:border-green-400 pb-3 text-5xl";

  return (
    <>
      <footer>
        <Box
          className="bg-[#323232] text-white "
          sx={{
            padding: {lg:"0 80px 50px",xs:"0 20px 30px"},
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Heading
            head5={"SEND US MESSAGE"}
            para={
              "Have any questions or need to get in touch? Send us a message, and we’ll respond as soon as possible to help with your healthcare needs."
            }
          />
          <Form />
          <Box
            sx={{
              border: "2px solid green",
              width: "100%",
              margin: "20px 0",
            }}
          ></Box>
          <Box>
            <Typography variant="body1">
              © Copyright HEALTH-CARE HOSPITAL 2023 reserved
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "10px 0",
                fontSize: "calc(1rem + 2vw)",
                gap: "20px",
              }}
            >
              <FaFacebook className={styles} />
              <FaLinkedin className={styles} />
              <FaInstagram className={styles} />
              <FaYoutube className={styles} />
            </Box>
          </Box>
        </Box>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__contents">
        <h4>Links</h4>
        <p>Terms</p>
        <p>Blog</p>
        <p>Work with us</p>
        <p>privacy pollicy</p>
      </div>
      <div className="footer__links">
        <div className="icon facebook">
          <FacebookIcon />
        </div>
        <div className="icon instagram">
          <YouTubeIcon />
        </div>
        <div className="icon twitter">
          <TwitterIcon />
        </div>
        <div className="icon linkedin">
          <LinkedInIcon />
        </div>
      </div>
      <div className="footer__c">© MyMegaminds 2022</div>
    </div>
  );
}

export default Footer;

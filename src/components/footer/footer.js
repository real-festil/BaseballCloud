import React from "react";

const Footer = () => (
  <footer className="page-footer">
    <div className="page-footer__copyrights-block">
      <span className="page-footer__copyright">© 2018 BaseballCloud</span>
      <a href="/" className="page-footer__link page-link">
        Terms of Service
      </a>
      <a href="/" className="page-footer__link page-link">
        Privacy Policy
      </a>
    </div>
    <div className="page-footer__social-block">
      <a
        href="https://baseballcloud.blog"
        className="page-footer__link page-link"
      >
        Blog
      </a>
      <a
        href="http://twitter.com/baseballcloudus"
        className="page-footer__link page-link"
      >
        Twitter
      </a>
      <a
        href="http://www.instagram.com/baseballcloudus/"
        className="page-footer__link page-link"
      >
        Instagram
      </a>
      <a
        href="http://www.facebook.com/BaseballCloudUS/"
        className="page-footer__link page-link"
      >
        Facebook
      </a>
    </div>
  </footer>
);

export default Footer;

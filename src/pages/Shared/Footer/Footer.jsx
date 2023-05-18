import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" p-10 bg-slate-300 text-black">
      <footer className="footer pb-6">
        <div>
          <Link to="/">
            <img className="w-40" src={logo} alt="" />
          </Link>
          <p className="font-semibold">
            Discover endless hours of playtime joy with our exciting car toy
            range.
          </p>
          <div className="social-icons flex gap-2 md:ms-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 text-blue-600"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 text-blue-400"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover" href="/branding">
            Branding
          </a>
          <a className="link link-hover" href="/marketing">
            Marketing
          </a>
          <a className="link link-hover" href="/advertisement">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover" href="/about">
            About us
          </a>
          <a className="link link-hover" href="/jobs">
            Jobs
          </a>
          <a className="link link-hover" href="/press-kit">
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover" href="/terms-of-use">
            Terms of use
          </a>
          <a className="link link-hover" href="/privacy-policy">
            Privacy policy
          </a>
          <a className="link link-hover" href="/cookie-policy">
            Cookie policy
          </a>
        </div>
        <div>
          <span className="footer-title">Contact Information</span>
          <p>123 Main Street, City</p>
          <p>
            <span className="font-semibold">Phone:</span> 555-123-4567
          </p>
          <p>
            <span className="font-semibold">Email:</span> carstock@gmail.com
          </p>
        </div>
      </footer>
      <hr />
      <div className="pt-4 text-center">
        <p>&copy; 2023. All Rights Reserved by Car Stock.</p>
      </div>
    </div>
  );
};

export default Footer;

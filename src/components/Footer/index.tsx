import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

export function Footer() {
  const navigateLinks = ["chefs", "recipes", "stories", "places", "videos"];
  const contactLinks = [
    "about us",
    "contact us",
    "carrers",
    "FAQs",
    "Glossary",
    "My profile",
  ];

  return (
    <section id="footer" className="flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <ul className="grid grid-cols-2 gap-4">
            {navigateLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="grid grid-cols-2 gap-4">
            {contactLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="social-btn">
          <ul className="grid grid-cols-3 gap-4">
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faYoutube} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTiktok} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faPinterest} />
            </li>
          </ul>
        </div>
      </div>
      <div className="text-xs policy mt-8">
        <span>© Copyright Culinary Wonderland 2022</span>
        <span>Terms and Conditions</span>
        <span>Privacy policy</span>
        <span>Cookie policy</span>
      </div>
    </section>
  );
}

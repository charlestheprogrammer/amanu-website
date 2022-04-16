import React from "react";
import { Emoji } from "react-apple-emojis";

import "../scss/Team.scss";

import { LazyLoadImage } from "react-lazy-load-image-component";

import arrow_up from "../assets/arrows/arrow_up.svg";
import arrow_right from "../assets/arrows/arrow_right.svg";
import us from "../assets/team/us_1.png";
import qfisch from "../assets/team/qfisch.png";
import epita from "../assets/team/epita.png";
import gminoprio from "../assets/team/gminoprio.png";
import csimonmeunier from "../assets/team/csimonmeunier.png";
import amanu from "../assets/team/amanu.png";

export default function Team() {
  return (
    <div className="safearea team">
      <div className="images">
        <div className="fith">
          <a
            href="https://www.epita.fr/"
            target="_blank"
          >
            <LazyLoadImage src={epita} alt="" />
          </a>
        </div>
        <div className="fourth">
          <a
            href="https://www.linkedin.com/in/charles-simon-meunier/"
            target="_blank"
          >
            <LazyLoadImage src={csimonmeunier} alt="" />
          </a>
        </div>
        <div className="third">
          <a
            href="https://www.linkedin.com/in/gianluca-minoprio/"
            target="_blank"
          >
            <LazyLoadImage src={gminoprio} alt="" />
          </a>
        </div>
        <div className="second">
          <a href="https://www.linkedin.com/in/quentin-fisch/" target="_blank">
            <LazyLoadImage src={qfisch} alt="" />
          </a>
        </div>
        <div className="first">
          <a href="https://www.linkedin.com/company/amanu-nft/" target="_blank">
            <LazyLoadImage src={amanu} alt="" />
          </a>
        </div>
        <div className="us">
          <LazyLoadImage src={us} alt="" />
        </div>
      </div>
      <div className="content">
        <h4>Team</h4>
        <h2>
          Three computer <b>engineers</b> <Emoji name="factory-worker" /> to open up{" "}
          <Emoji name="rocket" /> <b>new opportunities</b> for you
        </h2>
        <p>
          We are a Multicultural Team of 3 friends 3 nationalities and studying in one of the best known Computer Science Engineer College in France called EPITA. Having the same ambitions and already working in other project together, we decided to make the step in the field of art that we considered important to develop with quality in the Metaverse.
        </p>
        <div className="cta">
          <a href="https://twitter.com/amanu_nft" target="_blank">
            <button>
              <div className="link">
                <svg
                  width="15"
                  height="13"
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 1.9506C19.2483 2.2767 18.4534 2.49226 17.64 2.5906C18.4982 2.07792 19.1413 1.27138 19.45 0.3206C18.6436 0.800663 17.7608 1.1389 16.84 1.3206C16.2245 0.653172 15.405 0.208897 14.5098 0.0574517C13.6147 -0.0939932 12.6945 0.0559587 11.8938 0.48379C11.093 0.911621 10.4569 1.59313 10.0852 2.42144C9.71355 3.24974 9.62729 4.17799 9.84 5.0606C8.20943 4.97813 6.61444 4.55355 5.15865 3.81446C3.70287 3.07537 2.41885 2.03829 1.39 0.7706C1.02914 1.40077 0.839519 2.11442 0.84 2.8406C0.83872 3.51498 1.00422 4.17922 1.32176 4.77416C1.63929 5.36911 2.09902 5.87631 2.66 6.2506C2.00798 6.23286 1.36989 6.0579 0.8 5.7406V5.7906C0.804887 6.73549 1.13599 7.64969 1.73731 8.37857C2.33864 9.10744 3.17326 9.60624 4.1 9.7906C3.74326 9.89917 3.37288 9.95641 3 9.9606C2.74189 9.95759 2.48442 9.93418 2.23 9.8906C2.49391 10.7034 3.00462 11.4137 3.69107 11.9228C4.37753 12.4318 5.20558 12.7142 6.06 12.7306C4.6172 13.8659 2.83588 14.4855 1 14.4906C0.665735 14.4917 0.331736 14.4717 0 14.4306C1.87443 15.6409 4.05881 16.2833 6.29 16.2806C7.82969 16.2966 9.35714 16.0056 10.7831 15.4247C12.2091 14.8437 13.505 13.9845 14.5952 12.8971C15.6854 11.8097 16.548 10.516 17.1326 9.09151C17.7172 7.66702 18.012 6.14033 18 4.6006C18 4.4306 18 4.2506 18 4.0706C18.7847 3.48541 19.4615 2.76803 20 1.9506V1.9506Z"
                    fill="#E971E4"
                  />
                </svg>
              </div>
              <span>TWITTER</span>
              <LazyLoadImage src={arrow_up} alt="" />
            </button>
          </a>
          <a href="https://discord.gg/SgxBWX98Hy" target="_blank">
            <span>Join our discord</span>
            <LazyLoadImage src={arrow_right} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

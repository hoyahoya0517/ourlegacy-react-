import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";

function Main() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.menu1}>
            <i className="bi bi-justify" style={{ fontSize: 27 }}></i>
          </div>
          <div className={styles.menu2}></div>
          <div className={styles.menu3}>
            <i className="bi bi-search" style={{ fontSize: 18 }}></i>
            <i className="bi bi-globe" style={{ fontSize: 18 }}></i>
            <i className="bi bi-person" style={{ fontSize: 18 }}></i>
            <i className="bi bi-bag" style={{ fontSize: 18 }}></i>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.mens}>
            <div className={styles.side}>
              <div className={styles.sticky}>
                <div className={styles.toplogo}>
                  <h1>OUR LEGACY</h1>
                </div>
                <Link className={styles.content} to={"/mens"}>
                  <h1>MENS</h1>
                  <h1 className={styles.new}>New Arrivals</h1>
                </Link>
              </div>
            </div>
            <div className={styles.pic}>
              <img src="./img/1.jpg" />
            </div>
          </div>
          <div className={styles.womens}>
            <div className={styles.side}>
              <div className={styles.sticky}>
                <div className={styles.content}>
                  <h1>WOMENS</h1>
                  <h1 className={styles.new}>New Arrivals</h1>
                </div>
              </div>
            </div>
            <div className={styles.pic}>
              <img src="./img/2.jpg" />
            </div>
          </div>
          <div className={styles.footwear}>
            <div className={styles.side}>
              <div className={styles.sticky}>
                <div className={styles.content}>
                  <h1>FOOTWEAR</h1>
                  <h1 className={styles.new}>New Arrivals</h1>
                </div>
              </div>
            </div>
            <div className={styles.pic}>
              <img src="./img/3.jpg" />
            </div>
          </div>
          <div className={styles.acce}>
            <div className={styles.side}>
              <div className={styles.sticky}>
                <div className={styles.content}>
                  <h1>ACCESSORIES</h1>
                  <h1 className={styles.new}>New Arrivals</h1>
                </div>
              </div>
            </div>
            <div className={styles.pic}>
              <img src="./img/4.jpg" />
            </div>
          </div>
          <div className={styles.workshop}>
            <div className={styles.side}>
              <div className={styles.sticky}>
                <div className={styles.content}>
                  <h1>WORK SHOP</h1>
                  <h1 className={styles.new}>Dickies</h1>
                </div>
              </div>
            </div>
            <div className={styles.pic}>
              <img src="./img/5.jpg" />
            </div>
          </div>
          <div className={styles.thomas}>
            <div className={styles.side}>
              <div className={styles.sticky}>
                <div className={styles.content}>
                  <h1>THOMAS HAUSER</h1>
                  <h1 className={styles.new}>Berlin</h1>
                </div>
              </div>
            </div>
            <div className={styles.pic}>
              <img src="./img/6.jpg" />
            </div>
          </div>
          <div className={styles.seoul}>
            <div className={styles.side}>
              <div className={styles.sticky}>
                <div className={styles.content}>
                  <h1>OUR LEGACY</h1>
                  <h1 className={styles.new}>Seoul</h1>
                </div>
              </div>
            </div>
            <div className={styles.pic}>
              <img src="./img/7.jpg" />
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.empty2}></div>
          <div className={styles.etc}>
            <div className={styles.runways}>Runways</div>
            <div className={styles.terms}>Terms</div>
            <div className={styles.newsletter}>Newsletter</div>
            <div className={styles.projects}>Projects</div>
            <div className={styles.privacy}>Privacy</div>
            <div className={styles.careers}>Careers</div>
            <div className={styles.faq}>FAQ</div>
          </div>
          <div className={styles.logo}>
            <img src="./img/logo2.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

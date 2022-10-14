import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Mens.module.css";
import Mens_product from "./Mens_product";

function Mens() {
  const testarr = ["test1", "test2"];
  const [hidden, setHidden] = useState(true);
  const [sql, setSql] = useState("");
  const getSql = () => {
    fetch("http://localhost:3001/mens")
      .then((res) => res.json())
      .then((json) => {
        setSql(json);
      });
  };
  useEffect(() => {
    getSql();
  }, []);

  const onOff = () => {
    setHidden(false);
  };
  const offOn = () => {
    setHidden(true);
  };

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.menu1} onClick={onOff}>
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
                  <Link to={"/"}>
                    <h1>OUR LEGACY</h1>
                  </Link>
                </div>
                <Link className={styles.content} to={"/mens"}>
                  <h1>MENS</h1>
                </Link>
              </div>
              <div className={styles.cate}>
                <div className={styles.new2}>NEW ARRIVALS</div>
                <Link>SHIRTING</Link>
                <Link>JERSEY</Link>
                <Link>OUTERWEAR</Link>
                <Link>JEANS</Link>
                <Link>LEATHER</Link>
                <Link>KNITWEAR</Link>
                <Link>SUITING</Link>
                <Link>TROUSERS</Link>
                <Link>SHORTS</Link>
              </div>
            </div>
            <div className={styles.product}>
              {sql &&
                sql.map((element) => {
                  return <Mens_product key={element.id} product={element} />;
                })}
            </div>
          </div>
        </div>

        <div className={styles.explore}></div>

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
            <Link to={"/"}>
              <img src="./img/logo2.jpg" />
            </Link>
          </div>
        </div>

        <div className={hidden ? styles.hidden : styles.sidemenu}>
          <div className={styles.xbar}>
            <div className={styles.xbar_button} onClick={offOn}>
              <i class="bi bi-x-lg" style={{ fontSize: 25 }}></i>
            </div>
          </div>
          <div className={styles.xmenu}>
            <div className={styles.xmenu_side}>
              <div className={styles.xmenu_sidemenu}>
                <div className={styles.xmenu_toplogo} onClick={offOn}>
                  <h1>OUR LEGACY</h1>
                </div>
                <div className={styles.content}>
                  <Link to={"/mens"}>
                    <h1>MENS</h1>
                  </Link>
                  <h1>WOMENS</h1>
                  <h1>FOOTWEAR</h1>
                  <h1>ACCESSORIES</h1>
                  <h1>WORK SHOP</h1>
                </div>
              </div>
              <div className={styles.xmenu_sidefoot}>
                <div className={styles.xmenu_runways}>Shipping & Return</div>
                <div className={styles.xmenu_runways}>Runways</div>
                <div className={styles.xmenu_info}>Info</div>
                <div className={styles.xmenu_projects}>Projects</div>
                <div className={styles.xmenu_contact}>Contact</div>
                <div className={styles.xmenu_stores}>Stores</div>
                <div className={styles.xmenu_careers}>Careers</div>
              </div>
            </div>

            <div className={styles.xmenu_pic}>
              <img src="./img/xmenu.jpg"></img>
            </div>
          </div>
          <div className={styles.xbottom}></div>
        </div>
      </div>
    </div>
  );
}

export default Mens;

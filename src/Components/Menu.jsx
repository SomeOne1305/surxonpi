import React from "react";
import style from "../css/menu.module.scss";
import { Link } from "react-router-dom";
// import Slider from './Slider'
import axios from "axios";
import NavLoader from "./NavLoader";

export default function Menu() {
  // const [active, setActive] = React.useState()

  const [navItems, setNavItems] = React.useState([]);
  React.useEffect(() => {
    (async function () {
      let nav = await axios.get(
        "https://api.npoint.io/26f46edbf4c397c1e612/uz_nav"
      );
      setNavItems(nav.data);
    })();
  }, []);
  // https://api.npoint.io/53dd658d494a90dc89f7 <= full nav
  return (
    <div className={style.nav_block}>
      <div className={style.container}>
        <div className={style.sliding}>
          <h3>"Surxon pi" aksiyadorlik jamiyati</h3>
        </div>
        <div className={style.navigation}>
          {/* Mobile navigation start */}
          <div className={style.mob_menu}>
            <div className={style.header_nav_block}>
              <span>Menu</span>
              {/*onClick={(e) => setActive(e.target.checked)} */}
              <input type="checkbox" name="toggle" id="toggle" />
              <label htmlFor="toggle">
                <div className={style.nav_hamburger_menu}>
                  <i className="fa fa-bars"></i>
                </div>
              </label>
            </div>
          </div>
          {/*Mobile navigation end*/}
          <div className={style.nav_bar}>
            <div className={style.nav_items}>
              {navItems.length !== 0 || navItems !== undefined
                ? navItems.map((item) => (
                    <div className={style.item}>
                      <span className={style.title}>{item.title}</span>
                      <div className={style.routesToPages}>
                        {item.routes.map((inn) =>
                          item.routes.inner_routes === undefined ? (
                            <Link to={inn.path} key={item.path}>
                              <div className={style.route}>
                                <span>{inn.route_title}</span>
                                {inn.inner_routes !== undefined ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    />
                                  </svg>
                                ) : (
                                  ""
                                )}
                                {inn.inner_routes !== undefined ? (
                                  <div className={style.inner_item}>
                                    {inn.inner_routes.map((inr) => (
                                      <Link to={inr.path} key={inr.inner_title}>
                                        <div className={style.inner_route}>
                                          <span>{inr.inner_title}</span>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            </Link>
                          ) : (
                            <div className={style.route}>
                              <span>{inn.route_title}</span>
                              {inn.inner_routes !== undefined ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                  />
                                </svg>
                              ) : (
                                ""
                              )}
                              {inn.inner_routes !== undefined ? (
                                <div className={style.inner_item}>
                                  {inn.inner_routes.map((inr) => (
                                    <Link to={inr.path} key={inr.inner_title}>
                                      <div className={style.inner_route}>
                                        <span>{inr.inner_title}</span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ))
                : new Array(6).map((item) => <NavLoader />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import axios from "axios";
import React from "react";
import { useIMask } from "react-imask";
import Notify from "simple-notify";
import { ClipLoader } from "react-spinners";
import "../css/contact.scss";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    let head = document.querySelector("head");
    let em = document.createElement("script");
    em.setAttribute("src", "https://smtpjs.com/v3/smtp.js");
    head.append(em);
    return () => {
      head.removeChild(em);
    };
  });
  const { ref, value, setValue } = useIMask(
    { mask: "+{998}(00)000-00-00" },
    "onComplete"
  );
  function focused(e) {
    e.target.parentElement.parentElement.classList.add("focused");
    if (e.target.type === "tel") {
      setValue(" ");
    }
  }
  function blurred(e) {
    e.target.parentElement.parentElement.classList.remove("focused");
    if (e.target.type === "tel") {
      if (e.target.value === "+998(") {
        e.target.value = "";
      }
    }
  }
  const navigate = useNavigate();
  async function sendEmail(e) {
    e.preventDefault();
    let inputs = [
      e.target[0],
      e.target[1],
      e.target[2],
      e.target[3],
      e.target[4],
    ];
    if (
      e.target[0].value !== "" &&
      e.target[1].value !== "" &&
      e.target[2].value !== "" &&
      e.target[3].value !== "" &&
      e.target[4].value !== ""
    ) {
      setLoading(true);
      let data = `{
        "first_name": "${e.target[0].value}",
        "last_name": "${e.target[1].value}",
        "phone_number": "${e.target[3].value}",
        "email": "${e.target[2].value}",
        "message": "${e.target[4].value}"
      }`;
      try {
        const response = await axios.post(
          "https://api-surxon.surxonpi.uz/api/v1/applications/?format=json",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setLoading(false);
        if (response.status === 201) {
          new Notify({
            status: "success",
            title: "Muvaffaqiyatli",
            text: "Muvaffaqatli jo'natildi.",
            effect: "slide",
            speed: 300,
            customClass: null,
            customIcon: null,
            showIcon: true,
            showCloseButton: true,
            autoclose: true,
            autotimeout: 3000,
            gap: 20,
            distance: 20,
            type: 1,
            position: "right top",
          });
        }
      } catch (error) {
        console.error(error);
      }
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      e.target[3].value = "";
      e.target[4].value = "";
      navigate("/");
    } else {
      inputs.map((item) => {
        if (item.value === "" || item.value === "+998(") {
          if (item.id === "textarea") {
            item.classList.add("warned");
          } else {
            item.parentElement.parentElement.classList.add("warned");
          }
        }
      });
    }
  }
  return (
    <div style={{ width: "100%" }}>
      <div className="container">
        <div className="contact-us">
          <h2>Murojaatingizni qoldiring</h2>
          <form action="" onSubmit={(e) => sendEmail(e)}>
            <div className="inputs">
              <div className="input">
                <div className="__input_field">
                  <input
                    type="text"
                    placeholder="Ism"
                    onFocus={(e) => focused(e)}
                    onBlur={(e) => blurred(e)}
                  />
                  <div className="__title">Ism</div>
                </div>
                <div className="warning-text">Bu yer to'ldirilishi kerak !</div>
              </div>
              <div className="input">
                <div className="__input_field">
                  <input
                    type="text"
                    placeholder="Familiya"
                    onFocus={(e) => focused(e)}
                    onBlur={(e) => blurred(e)}
                  />
                  <div className="__title">Familiya</div>
                </div>
                <div className="warning-text">Bu yer to'ldirilishi kerak !</div>
              </div>
              <div className="input">
                <div className="__input_field">
                  <input
                    type="email"
                    placeholder="e-pochta"
                    onFocus={(e) => focused(e)}
                    onBlur={(e) => blurred(e)}
                  />
                  <div className="__title">Email</div>
                </div>
                <div className="warning-text">Bu yer to'ldirilishi kerak !</div>
              </div>
              <div className="input">
                <div className="__input_field">
                  <input
                    value={value}
                    type="tel"
                    placeholder="+998(xx) xxx-xx-xx"
                    ref={ref}
                    onFocus={(e) => focused(e)}
                    onChange={(ev) => setValue(ev.target.value)}
                    onBlur={(e) => blurred(e)}
                  />
                  <div className="__title">Telefon raqam</div>
                </div>
                <div className="warning-text">Bu yer to'ldirilishi kerak !</div>
              </div>
            </div>
            <div className="contact-text">
              <h3>Murojaatingiz :</h3>
              <div className="text-area">
                <textarea
                  name="request"
                  id="textarea"
                  placeholder="Fikringizni qoldiring..."
                ></textarea>
              </div>
            </div>
            <div className="submit">
              <button type="reset" className="reset">
                <i className="fa-solid fa-rotate-right"></i>
              </button>
              <button type="submit" disabled={loading}>
                {loading ? (
                  <ClipLoader size={20} color="#ffffff" />
                ) : (
                  "Yuborish"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

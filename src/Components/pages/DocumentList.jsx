import React from "react";
import "../../css/document.scss";
import { Files } from "../Files";
import Notify from "simple-notify";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DocumentList() {
  const { title } = useParams();
  const [files, setFiles] = React.useState([]);
  const [fileUrls, setFileUrls] = React.useState([]);
  const [docTitle, setDocTitle] = React.useState("");
  const [index, setIndex] = React.useState(Number);
  React.useEffect(() => {
    const getAll = async () => {
      let categories = await axios.get(
        "http://api-surxon.surxonpi.uz/api/v1/document-categories/?format=json"
      );
      setIndex(categories.data.find((e) => e.slug === title).id);
      let tit = await axios.get(
        `https://api-surxon.surxonpi.uz/api/v1/document-categories/${index}`
      );
      setDocTitle(tit.data.title);
      let data = await axios.get(
        `https://api-surxon.surxonpi.uz/api/v1/documents/?format=json`
      );
      setFiles(data.data.results.filter((e) => e.document_category === index));
    };
    getAll();
  }, [title, index]);
  const checkTypeOfFile = (file) => {
    let fullFile = file.toLowerCase().split(".");
    let fileType = fullFile[fullFile.length - 1];
    return fileType;
  };
  const docs = files.filter((url) =>
    /\.(docx|doc|pdf|xls|xlsx|ppt|pptx)$/.test(url.file.toLowerCase())
  );
  const images = files.filter((url) =>
    /\.(jpe?g|png|webp)$/.test(url.file.toLowerCase())
  );
  const txtFiles = files.filter((url) =>
    /\.(.txt)$/.test(url.file.toLowerCase())
  );
  React.useMemo(() => {
    const fetchData = async () => {
      const fileData = await Promise.all(
        txtFiles.map((item) => fetch(item.file).then((res) => res.text()))
      );
      setFileUrls(fileData.map((text, i) => ({ id: i, url: text })));
    };
    fetchData();
  }, []);
  const openFile = (fileType, fileUrl) => {
    if (
      fileType === "doc" ||
      fileType === "docx" ||
      fileType === "ppt" ||
      fileType === "pptx" ||
      fileType === "xls" ||
      fileType === "xlsx"
    ) {
      new Notify({
        status: "warning",
        title: "Ogohlantirish",
        text: "Bu fayl brauzer tomonidan qo'llab quvvatlanmaydi.",
        effect: "slide",
        speed: 300,
        showIcon: true,
        showCloseButton: true,
        autoclose: true,
        autotimeout: 2000,
        gap: 20,
        distance: 20,
        type: 1,
        position: "right top",
      });
    } else {
      window.open(fileUrl, "_blank");
    }
  };
  console.log(fileUrls);
  return (
    <div className="document">
      <h2>{docTitle}</h2>
      <div className="docs">
        <ul>
          {docs.length !== 0 || docs !== undefined
            ? docs.map((item) => (
                <li key={item.title_uz}>
                  <img
                    src={
                      Files.find((e) => e.type === checkTypeOfFile(item.file))
                        .icon
                    }
                    alt=""
                    className="icon"
                  />
                  <div
                    className="fileName"
                    onClick={() =>
                      openFile(checkTypeOfFile(item.file), item.file)
                    }
                  >
                    <span>{item.title_uz}</span>
                  </div>
                  <a href={`${item.file}`} className="download" download>
                    <i className="fa fa-download"></i>
                  </a>
                </li>
              ))
            : ""}
          {images.length !== 0 || images !== undefined
            ? images.map((item) => (
                <div className="imageFile" key={item.title_uz}>
                  <div className="top">
                    <h3>{item.title_uz}</h3>
                    <a href={item.file} download>
                      <i className="fa fa-download"></i>
                    </a>
                  </div>
                  <a href={item.title_uz} target={"_blank"} rel={"noreferrer"}>
                    <img src={item.file} alt={item.title_uz} />
                  </a>
                </div>
              ))
            : ""}
          {fileUrls.length !== 0 || fileUrls !== undefined
            ? fileUrls.map((item) => (
                <div className="youtube-video" key={`Youtube video ${item.id}`}>
                  <div className="top-title">
                    <i className="fa-brands fa-youtube"></i>
                    <a href={item.url}>
                      <h3>Video</h3>
                    </a>
                    <a href={item.url}>
                      <i className="fa-regular fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                  <iframe
                    width="640"
                    height="360"
                    src={`https://www.youtube.com/embed/${item.url.split('https://www.youtube.com/watch?v=')[1]}`}
                    title={docTitle}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
}

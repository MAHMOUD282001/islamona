import { faArrowDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./QuranTranslation.css"

function QuranTranslation() {
  let [souras, setSouras] = useState([]);
  let [ayahs, setAyahs] = useState([]);

  let [filteredSouras, setFilteredSouras] = useState([]);
  let [arabicName, setArabicName] = useState("");
  let [englishName, setEnglishName] = useState("");

  useEffect(() => {
    axios.get(`http://api.alquran.cloud/v1/meta`).then((res) => {
      let souras = res.data.data.surahs.references;
      setSouras(souras);
      setFilteredSouras(souras);
    });
  }, []);

  useEffect(() => {
    let filterArabicName = filteredSouras.filter((item) =>
      item.name.toLowerCase().includes(arabicName.toLowerCase())
    );

    let filterEnglishName = filterArabicName.filter((item) =>
      item.englishName.toLowerCase().includes(englishName.toLowerCase())
    );

    setSouras(filterEnglishName);
  }, [arabicName, englishName]);

  let getAyas = (number) => {
    axios.get(`https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${number}`).then((res) => {
      setAyahs(res.data.result);
    });
  };

  let removeActive = () => {
    document.querySelector(".popup").classList.remove("active");
    setAyahs([]);
  };

  return (
    <section className="quran-souras" id="quran-translation">
      <div className="container">
        <h3>تفسير القران الكريم</h3>

        <div className="row">
          <div className="col-lg-6">
            <input
              type="text"
              placeholder="ابحث باسم السورة بالعربى"
              onChange={(e) => setArabicName(e.target.value)}
            />
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              placeholder="Search By Soura Name"
              onChange={(e) => setEnglishName(e.target.value)}
            />
          </div>
        </div>
        <div className="souras">
          {souras.map((soura) => (
            <div key={soura.number} onClick={() => getAyas(soura.number)}>
              <p>{soura.name}</p>
              <p>{soura.englishName}</p>
              <p>{soura.numberOfAyahs} ايه</p>
            </div>
          ))}
        </div>

        <div className={ayahs.length > 0 ? "popup active" : "popup"}>
          <p className="close-btn" onClick={removeActive}>
            <FontAwesomeIcon icon={faXmark} />
          </p>
          {ayahs.map((aya) => (
            <>
            <p className="aya">{aya.arabic_text} <br/> <FontAwesomeIcon icon={faArrowDown}/> <br/> {aya.translation}</p>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuranTranslation;

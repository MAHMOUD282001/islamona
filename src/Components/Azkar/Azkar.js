import React, { useEffect, useState } from "react";
import azkar from "../../Azkar/adhkar.json";
import "./Azkar.css";

function Azkar() {
  let [azkarContent, setAzkarContent] = useState([]);
  let [count, setCount] = useState(1);
  let [zekrName, setZekrName] = useState("");
  let [filteredAzkar, setFilteredAzkar] = useState(azkar);

  useEffect(() => {
    let filterZekrName = azkar.filter((item) =>
      item.category.toLowerCase().includes(zekrName.toLowerCase())
    );

    setFilteredAzkar(filterZekrName);
  }, [zekrName]);
  
  let decrementCount = (id, e)=>{
    let n
    azkarContent.find(zekr => zekr.id === id ? n = --zekr.count : "")
    
    e.target.innerHTML = n > 0 ? n : 0
  }
  

  return (
    <section className="azkar" id="azkar">
      <div className="container">
        <h3>الاذكار</h3>

        <div className="row">
          <div className="col-lg-12">
            <input
              type="text"
              className="w-100"
              placeholder="ابحث باسم الذكر بالعربى"
              onChange={(e) => setZekrName(e.target.value)}
            />
          </div>
        </div>
        <div className="azkar-names">
          {filteredAzkar.map((zekr) => (
            <a
              key={zekr.id}
              href="#azkar-content"
              className="zekr btn"
              onClick={() => {setAzkarContent(zekr.array)}}
            >
              {zekr.category}
            </a>
          ))}
        </div>

        <div className="azkar-content" id="azkar-content">
          {azkarContent.length > 0
            ? azkarContent.map((zekr, index) => (
                <div key={zekr.id + zekr.text} className="zekr-content">
                  <p>{zekr.text}</p>
                  <div>
                    <audio
                      src={require(`../../Azkar${zekr.audio}`)}
                      controls
                    ></audio>
                    <button
                      className="zekr-btn btn btn-outline-primary mt-2 w-100"
                      onClick={(e)=> decrementCount(zekr.id, e) }
                    >
                      {zekr.count}
                    </button>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </section>
  );
}

export default Azkar;

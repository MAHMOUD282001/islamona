import React, { useEffect, useRef, useState } from "react";
import "./Hadith.css";
import axios from "axios";

function Hadith() {
  let [hadiths, setHadiths] = useState([]);
  let [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(`https://hadis-api-id.vercel.app/hadith/abu-dawud?page=2&limit=300`)
      .then((res) => {
        setHadiths(res.data.items);
      });
  }, []);
  
  let nextHadith = ()=>{
    if(count === 299){
        setCount(0)
    }
    else{
        setCount(count + 1)
    }
  }
  
  let prevHadith = ()=>{
    if(count === 0){
        setCount(299)
    }
    else{
        setCount(count - 1)
    }
  }

  return (
    <section className="hadiths" id="hadith">
      <div className="container">
        <h3>الحديث الشريف</h3>

        <div className="hadith-content">
          {
            hadiths.length > 0 ? (
            hadiths[count].arab
            )
            :
            ""
          }
        </div>

        <div className="btns">
          <button className="btn btn-primary" onClick={nextHadith}>
            الحديث التالى
          </button>
          <button className="btn btn-outline-primary" onClick={prevHadith}>الحديث السابق</button>
        </div>
      </div>
    </section>
  );
}

export default Hadith;

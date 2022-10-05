import React from "react";
import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setJobs(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const { company, dates, duties, title, id } = jobs[value];
  return (
    <main>
      <header className="title">
        <h1>Experience</h1>
        <div className="underline"></div>
      </header>

      <section className="content">
        <div className="buttons">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`company-btn ${value === index && "active"}
              }`}
              >
                {item.company}
              </button>
            );
          })}
        </div>

        <div className="experience-container">
          <h2 className="company-title">{title}</h2>
          <p className="company">{company}</p>
          <p className="date">{dates}</p>
          {duties.map((dutie, index) => {
            return (
              <div key={index} className="duties">
                <FaAngleDoubleRight className="job-icon" />
                <p className="dutie">{dutie}</p>
              </div>
            );
          })}
        </div>
      </section>
      <button className="more">more info</button>
    </main>
  );
}

export default App;

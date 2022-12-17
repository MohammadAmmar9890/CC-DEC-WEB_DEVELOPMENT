import { useState } from "react";
import InputComp from "../components/InputComp";
import { validateurl } from "../utils/validations";
import "./HomePage.css";

function HomePage() {
  const [loader, setLoader] = useState("false");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const validated = validateurl(input);

  const fetchData = async () => {
    try {
      setLoader("true");
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`);
      const urlres = await res.json();
      setLoader("false");
      setResult(urlres.result.full_short_link);
    } catch (err) {
      alert(err);
    }
  };

  const handleClick = () => {
    fetchData();
  };

  return (

    <div className="container">
      <div class="d-flex flex-column justify-content-center w-100 h-100">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <div class="btn-group my-5"></div>
          <a href="https://manuel.pinto.dev" class="text-decoration-none"></a>
        </div>
      </div>

      <div className="right">
        <div className="right-text">
          <h1> URL Shrinker</h1>
          <p>Enter a URL to magically shrinkify!</p>
        </div>
        <div className="gen-link">
          <InputComp
            name="url"
            placeholder="PLEASE ENTER YOUR URL HERE"
            onInputValue={(e) => {
              return setInput(e.target.value);
            }}
            value={input}
            onsubmit={handleClick}
            loaderstatus={loader}
            resultstatus={result}
            validated={input ? validated : true}
            validationText="Enter a valid url"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

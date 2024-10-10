import React, { useState } from "react";
import style from "./tripCalculator.module.css";

const TripCalculator = () => {
  const [err, setErr] = useState({ message: "" });

  const handleNumOfpeople = (e) => {
    if (e.target.value < 1) {
      setErr({ message: "Number of people should be greater than 0" });
    } else if (e.target.value > 10) {
      setErr({ message: "Number of people should be less than 10" });
    } else {
      setErr({ message: "" });
    }
  };
  return (
    <>
      <div className={style.calciContainer}>
        <div className={style.formContainer}>
          <h1>Trip Calculator</h1>
          <form>
            <div className={style.bind}>
              <div class="form-floating">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected value="goa">
                    Goa
                  </option>
                  <option value="mumbai">Mumbai</option>
                  <option value="Manali">Manali</option>
                  <option value="Indore">Indore</option>
                </select>
                <label for="floatingSelect">Select Destination</label>
              </div>
              <div className="form-floating">
                <input type="date" className="form-control" />
                <label for="floatingSelect">Select Starting Date</label>
              </div>
            </div>
            <div className={style.bind}>
              <div class="form-floating">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected value="2">
                    2 days
                  </option>
                  <option value="5">5 days</option>
                  <option value="7">7 days</option>
                </select>
                <label for="floatingSelect">
                  Number of days for your trip"
                </label>
              </div>
              <div class="form-floating">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected value="resort">
                    Hotel
                  </option>
                  <option value="resort">Resort</option>
                  <option value="homestay">Homestay</option>
                </select>
                <label for="floatingSelect">Select accommodation</label>
              </div>
            </div>
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                onChange={handleNumOfpeople}
              />
              <label for="floatingSelect">Enter Number of Guest</label>
              {err ? <p className={style.err}>{err.message}</p> : null}
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Add any essential information here"
                id="floatingTextarea2"
                style={{ height: "100px", resize: "none" }}
              ></textarea>
              <label for="floatingTextarea2">
                Any other details you'd like to include?
              </label>
            </div>
            <button
              type="submit"
              className={`btn btn-primary ${style.button1}`}
            >
              Calculate Now
            </button>
          </form>
          <p>
            *The fare provided is an estimate and may fluctuate. For more
            details, schedule a call <span>now</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default TripCalculator;

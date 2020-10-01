import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "./StartForm.scss";
import { DataContext } from "../../App";

function StartForm() {
  const { address, setAddress } = useContext(DataContext);
  const [addressInfo, setAddressInfo] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (address.streetAddress1 !== undefined) {
      console.log("redirect");
    }
  }, [address]);

  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    setAddress(addressInfo);
    setIsSubmit(true);
  };

  const handleChange = (e) => {
    // console.log(`${e.target.name} : ${e.target.value}`)
    setAddressInfo({
      ...addressInfo,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmit) {
    return <Redirect to="/voterinfo" />;
  }

  return (
    <div className="StartForm">
      <Link to="/onboarding4">
        <button>
          <i class="fas fa-chevron-circle-left"></i>
        </button>
      </Link>
      <h1>Get Started</h1>
      <p>
        Find your local candidates and ballot issues by entering your address
        below
      </p>
      <form onSubmit={handleSubmit}>
        <label>Street Address</label>
        <input
          name="streetAddress1"
          value={addressInfo.streetAddress1}
          onChange={handleChange}
        />

        <label>Street Address Line 2</label>
        <input
          name="streetAddress2"
          value={addressInfo.streetAddress2}
          onChange={handleChange}
        />

        <div className="twoColumns">
          <div className="column1">
            <label>City</label>
            <input
              name="city"
              value={addressInfo.city}
              onChange={handleChange}
            />
          </div>

          <div className="column2">
            <label>Postal Code</label>
            <input
              name="postalCode"
              value={addressInfo.postalCode}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="findElections">
          Find my elections
        </button>
      </form>
    </div>
  );
}

export default StartForm;

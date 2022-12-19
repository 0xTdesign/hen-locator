import React from "react";

export default function SelectedTrait({ handleChange, traits }) {
  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__data">
          <div>
            <div>
              <h2>Traits</h2>

              <div>
                {traits.map((items, index) => {
                  return (
                    <div key={index}>
                      <h3>
                        {items.trait}: {items.occurrence}
                      </h3>
                      {/* <p>Count : {items.count}</p> */}
                      {/* <p>Occurence : {items.occurrence}</p> */}
                    </div>
                  );
                })}
              </div>
            </div>
            <button className="modal__btn" onClick={handleChange}>
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

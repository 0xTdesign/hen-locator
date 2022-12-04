import React from "react";

export default function SelectedTrait({ handleTraitModal, activeTrait }) {
  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__data">
          <div>
            <div>
              <h2>Traits</h2>

              <div>
                {activeTrait?.map((trait, idx) => {
                  console.log(trait);
                  return (
                    <div key={idx}>
                      <p>
                        {trait.trait} : {trait.occurrence}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <button className="modal__btn" onClick={handleTraitModal}>
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

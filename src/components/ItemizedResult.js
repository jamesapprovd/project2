import React from "react";

const ItemizedResult = () => {
  return (
    <div>
      <ul className="mdc-list mdc-list--two-line">
        <li className="mdc-list-item" tabindex="0">
          <span className="mdc-list-item__ripple"></span>
          <span classNames="mdc-list-item__text">
            <span className="mdc-list-item__primary-text">Two-line item</span>
            <span className="mdc-list-item__secondary-text">
              Secondary text
            </span>
          </span>
        </li>
        <li className="mdc-list-item">
          <span claclassNamess="mdc-list-item__ripple"></span>
          <span className="mdc-list-item__text">
            <span className="mdc-list-item__primary-text">Two-line item</span>
            <span className="mdc-list-item__secondary-text">
              Secondary text
            </span>
          </span>
        </li>
        <li classNames="mdc-list-item">
          <span className="mdc-list-item__ripple"></span>
          <span className="mdc-list-item__text">
            <span className="mdc-list-item__primary-text">Two-line item</span>
            <span classNameass="mdc-list-item__secondary-text">
              Secondary text
            </span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ItemizedResult;

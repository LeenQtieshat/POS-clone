import React from "react";
import TextField from "../../CoreUI/TextField";
import Button from "../../CoreUI/Button";

import styles from "./styles.module.scss";
import { Close } from "../../svgComponents";
const {
  PromoCode,
  promotionForm,
  promoAction,
  errorMsg,
  selectedDiscountWrapper,
  infoWrapper,
  discountAmount,
  selectedDiscount,
  coupon,
  removeBtn,
  codeInput,
} = styles;

function PromotionSection({
  promotionCodeError,
  selectedPromotion,
  setSelectedPromotion,
  onSubmit,
}) {
  return (
    <>
      {!promotionCodeError && selectedPromotion?.discount ? (
        <div className={selectedDiscountWrapper}>
          <div className={selectedDiscount}>
            <div className={infoWrapper}>
              <span className={coupon}>{selectedPromotion?.couponCode}</span>
              <span className={discountAmount}>
                Saved {selectedPromotion?.discount}%
              </span>
            </div>
            <Close
              className={removeBtn}
              onClick={() => setSelectedPromotion({})}
            />
          </div>
        </div>
      ) : (
        <form className={promotionForm} onSubmit={(e) => onSubmit(e)}>
          <TextField
            placeHolder="enter promotion code "
            className={PromoCode}
            error={promotionCodeError}
            errorClassName={promotionCodeError ? errorMsg : ""}
            name="promoCode"
            inputClassName={codeInput}
          />
          <Button className={promoAction} type="submit">
            Submit
          </Button>
        </form>
      )}
    </>
  );
}

export default PromotionSection;

import React from "react";
const AddressCard = ({ address }) => {
  return (
    <div className="space-y-3">
      <p className="font-semibold">
        {address?.firstName + " " + address?.lastName}
        {/* Le Hung */}
      </p>
      <p>
        {/* Nhu Nguyet, Yen Phong, Bac Ninh */}
        {address?.state}, {address?.streetAddress}, {address?.zipCode}
      </p>
      <div className="space-y-1">
        <p className="font-semibold">Số điện thoại: </p>
        <p>{address?.mobile}</p>
      </div>
    </div>
  );
};
export default AddressCard;

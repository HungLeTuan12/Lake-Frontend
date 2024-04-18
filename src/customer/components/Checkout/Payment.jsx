import { Button } from "@mui/material";

const Payment = () => {
  return (
    <div className="p-20   h-[100vh] mt-5 lg:mt-0 ">
      <div className="border p-5">
        <div className="flex justify-center">
          <img
            className="object-fit h-[10rem] w-[10rem] mb-2"
            src="https://cdn-icons-png.freepik.com/512/7518/7518748.png"
            alt=""
          />
        </div>

        <p className="uppercase pb-4 text-center font-bold opacity-60">
          THANH TOÁN THÀNH CÔNG
        </p>
        <hr />
        {/* Price details */}
        <div className="space-y-3 font-semibold p-3">
          <div className="pt-3 text-center text-black">
            <span className="text-center">
              Mã số đơn hàng là 97042292005897
            </span>
          </div>
          <div className="pt-3 text-center text-black">
            <span className="text-center">
              Bạn có thể xem chi tiết trong mục{" "}
              <a href="http://localhost:3000/account/order">
                <span className="text-blue-800">đơn hàng của tôi</span>
              </a>
            </span>
          </div>
          <div className="pt-3 text-center text-black">
            <span className="text-center">
              Thời gian dự kiến giao hàng là 19-20/04/2023
            </span>
          </div>
        </div>
        {/* Button details */}
      </div>
    </div>
  );
};
export default Payment;

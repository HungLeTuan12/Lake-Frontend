import { useNavigate } from "react-router-dom";

const TuVanChonMua = () => {
  const navigate = useNavigate();
  return (
    <div className="border">
      <h2 className="text-2xl text-center font-extrabold text-gray-800 pl-5 pt-5">
        Tư vấn chọn mua
      </h2>
      {/* Detail */}
      <div className="flex mt-4 justify-center items-center p-5">
        <div
          onClick={() => navigate("/blog/2")}
          className="flex h-[20rem] w-[22rem] flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer
              w-[15rem] mx-3 mr-5 border"
        >
          <div className="h-[12rem] w-[20rem]">
            <img
              className=" h-full w-full"
              src="https://tyhisneaker.com/wp-content/uploads/2021/03/phoi-do-voi-giay-jordan-1-low-paris-12.jpeg"
            ></img>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-center text-gray-900">
              Top 10+ Ảnh Phối đồ phong cách cổ điển với Giày Jordan 1 low Paris
            </h3>
          </div>
        </div>
        <div
          onClick={() => navigate("/blog/1")}
          className="flex h-[20rem] w-[22rem] flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer
              w-[15rem] mx-3 mr-5 border"
        >
          <div className="h-[12rem] w-[20rem]">
            <img
              className=" h-full w-full"
              src="https://tyhisneaker.com/wp-content/uploads/2021/04/danh-gia-chi-tiet-giay-jordan-1-zoom-air-psg-paris-saint-germain.jpeg"
            ></img>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-center text-gray-900">
              Đánh giá giày Jordan 1 Zoom Air PSG Paris Saint
            </h3>
          </div>
        </div>
        <div
          onClick={() => navigate("/blog/1")}
          className="flex h-[20rem] w-[22rem] flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer
              w-[15rem] mx-3 mr-5 border"
        >
          <div className="h-[12rem] w-[20rem]">
            <img
              className=" h-full w-full"
              src="https://tyhisneaker.com/wp-content/uploads/2023/03/nike-am-duong-1536x768.png"
            ></img>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-center text-gray-900">
              Phối đồ với Giày Nike Air Force 1 Low Brooklyn Cream – Giày Nike
              âm Dương
            </h3>
          </div>
        </div>
        <div
          onClick={() => navigate("/blog/2")}
          className="flex h-[20rem] w-[22rem] flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer
              w-[15rem] mx-3 mr-5 border"
        >
          <div className="h-[12rem] w-[20rem]">
            <img
              className=" h-full w-full"
              src="https://tyhisneaker.com/wp-content/uploads/2021/03/phoi-do-voi-giay-converse-run-star-hike-ca-tinh-phong-cach-thoi-trang-4.jpeg"
            ></img>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-center text-gray-900">
              Phối đồ với giày Converse Run Star Hike cá tính phong cách thời
              trang
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TuVanChonMua;

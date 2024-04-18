import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
const HomeBlogCarousel = () => {
  return (
    <div className="border">
      <h2 className="text-2xl text-center font-extrabold text-gray-800 pl-5 pt-5">
        Trở thành người có đẳng cấp
      </h2>
      <div className="flex mt-4 justify-center items-center p-5">
        <div
          className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer
            w-[15rem] mx-3 mr-5 border"
        >
          <div className="h-[12rem] w-[14rem]">
            <img
              className=" h-full w-full"
              src="https://bizweb.dktcdn.net/thumb/large/100/292/624/articles/sa-n-xua-t.jpg?v=1691566611930"
            ></img>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900">
              Sản xuất tại Việt Nam
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Từ những nghệ nhân đóng giày dày dạn kinh nghiệm với mong muốn
              mang đến cho quý ông đồi giày mang Thương hiệu Việt chất lượng tốt
              nhất{" "}
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer
            w-[15rem] mr-5 mx-3 border"
        >
          <div className="h-[12rem] w-[14rem]">
            <img
              className=" h-full w-full"
              src="https://bizweb.dktcdn.net/thumb/large/100/292/624/articles/va-t-t.jpg?v=1691566640127"
            ></img>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900">
              Sản xuất tại Việt Nam
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Giày da Be Classy được làm từ những mảng da bò Ý được chọn lọc kỹ
              càng để đảm bảo thành phẩm là một đôi giày chất lượng và lên màu
              giày chuẩn nhất.{" "}
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer
            w-[15rem] mr-5 mx-3 border"
        >
          <div className="h-[12rem] w-[14rem]">
            <img
              className=" h-full w-full"
              src="https://bizweb.dktcdn.net/thumb/large/100/292/624/articles/last-gia-y.jpg?v=1691566667937"
            ></img>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900">
              Sản xuất tại Việt Nam
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Với châm ngôn “Giày Tây dành cho Ta” -thiết kế Phom (Last) giày
              phù hợp với phom chân chuẩn của Quý Ông Việt. Tạo nên đôi giày da
              mang nét Việt riêng.{" "}
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer
            w-[15rem] mr-5 mx-3 border"
        >
          <div className="h-[12rem] w-[14rem]">
            <img
              className=" h-full w-full"
              src="https://bizweb.dktcdn.net/thumb/large/100/292/624/articles/webcover1-04.jpg?v=1650382795633"
            ></img>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900">
              Sản xuất tại Việt Nam
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Be Classy áp dụng chính sách bảo hành giày 3 năm. Luôn có đội ngũ
              hỗ trợ và tư vấn tất cả các vấn đề về giày da trong quá trình
              khách hàng sử dụng.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBlogCarousel;

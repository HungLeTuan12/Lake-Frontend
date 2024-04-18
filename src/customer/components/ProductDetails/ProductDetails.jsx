import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import ProductReviewCards from "./ProductReviewCards";
import { mens_kurta } from "../../../Data/Men/men_kurta";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductById } from "../../../State/Product/Action";
import { addItemToCart } from "../../../State/Cart/Action";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "38", inStock: true },
    { name: "39", inStock: true },
    { name: "40", inStock: true },
    { name: "41", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Size: 35, 36, 37, 38, 39, 40, 41, 42, 43, 44",
    "Quà tặng: Full box + tax + bill, Tặng tất",
    "Thương hiệu: Nike",
    "Loại hàng: Rep 1 - 1",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  console.log("Selected sixze: ", selectedSize);

  const handleAddToCart = () => {
    const datadd = { productId: params.productId, size: selectedSize.name };
    console.log("data add to cart: ", datadd);
    dispatch(addItemToCart(datadd));
    navigate("/cart");
  };

  useEffect(() => {
    const data = { productId: params.productId };
    dispatch(findProductById(data));
  }, [params.productId]);
  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {products.product?.title}
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h[35rem]">
              <img
                src={products.product?.imageUrl}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap items-center space-x-5 mt-4">
              {product.images.map((image) => (
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg w-[5rem] h-[5rem]">
                  <img
                    src={products.product?.imageUrl}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Product info */}
          <div className="lg:col-span-1 lg:pb-24 lg:mr-24 px-4 pb-16 max-w-2xl">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
                {products.product?.title}
              </h1>
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900 opacity-60 pt-1">
                {products.product?.branch}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Thông tin sản phẩm</h2>
              <div className="flex space-x-5 items-center text-lg mt-6">
                <p className="font-semibold">
                  {products.product?.discountedPrice},000
                  <span className="text-sm text-gray-600">đ</span>
                </p>
                {products.product?.discountedPrice !== 0 && (
                  <p className="opacity-50 line-through">
                    {products.product?.price},000
                    <span className="text-sm text-gray-600">đ</span>
                  </p>
                )}
                {products.product?.discountedPrice !== 0 && (
                  <p className="text-green-500 font-semibold">
                    {100 -
                      Math.round(
                        (products.product?.discountedPrice /
                          products.product?.price) *
                          100
                      )}
                    % GIẢM
                  </p>
                )}
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={5.5} readOnly />
                  <p className="opacity-50 text-sm">56540 đánh giá</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    3870 bình luận
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  onClick={handleAddToCart}
                  color="secondary"
                  sx={{ px: "2rem", py: "1rem", mt: 2 }}
                  variant="contained"
                >
                  Thêm vào giỏ
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="font-bold">Mô tả</h3>

                <div className="space-y-6 mt-2">
                  <p className="text-base text-gray-900">
                    {products.product?.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Thông số sản phẩm:
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Chon size giay */}
        <section className="grid gap-x-8 gap-y-5 px-4 pt-3">
          {/* Image gallery */}
          {/* Product info */}
          <div className=" lg:pb-5 lg:mr-24 px-4  ">
            <h1 className="text-lg text-blue-700 font-bold mb-2 uppercase">
              Mô tả sản phẩm
            </h1>
            <p className=" text-gray-700  mb-2 ">
              Giày{" "}
              <span className="text-blue-700">{products.product?.title}</span>{" "}
              Bản Cao Cấp tinh tế & màu sắc vô cùng dễ phối đồ. Vậy nên đôi giày
              này trở nên phổ biến, mang tính biểu tượng và được rất nhiều giới
              trẻ yêu thích.
            </p>
            <p className="text-gray-700  mb-2 ">
              Và nếu bạn cũng là một người đam mê dòng sneaker dễ mang, dễ phố
              đồ thì không nên bỏ qua mẫu giày siêu phẩm này đâu nhé! Dưới đây
              là một số hình ảnh của đôi giày Vans Caro Slip on Bản Cao Cấp tại
              HHH Sneaker (hàng chuẩn rep 1:1, bản xịn nhất thị trường).
            </p>
            <h1 className="text-lg text-black-700 font-bold mb-2 uppercase">
              1. Mô tả về Giày{" "}
              <span className="text-blue-700">{products.product?.title}</span>{" "}
              on Bản Cao Cấp
            </h1>
            <p>
              Khác với những dòng Nike khác cũng như các thương hiệu giày thể
              thao khác,{" "}
              <span className="text-blue-700">{products.product?.title}</span>{" "}
              on Bản Cao Cấpđược nhiều người biết đến bởi thiết kế mới lạ, tiện
              dụng. Không cần thắt dây giày, không cần vất vả khom lưng để mang
              giày, với{" "}
              <span className="text-blue-700">{products.product?.title}</span>{" "}
              on Bản Cao Cấp bạn chỉ cần xỏ chân vào một cách nhanh chóng là có
              thể ra ngoài.
              <img
                className="w-full h-full m-2"
                src={products.product?.imageUrl}
                alt=""
              />
            </p>

            <p>
              Không chỉ thành công bởi việc giữ nguyên những thiết kế cơ bản với
              những gam màu đơn sắc. Vans còn cho dòng giày Slip-On liên tục
              “chào hàng” những thiết kế mới lạ khác từ họa tiết cho đến sự phối
              hợp màu sắc để tạo điểm nhấn. Trong số đó phải kể đến, Vans
              Slip-On Checkerboard ra đời trong khoảng 1977. Không ít các bạn
              trẻ hiện nay vẫn còn “say đắm” với thiết kế chất lừ “tưởng chừng
              như đi vào quên lãng này”.
            </p>
          </div>
        </section>
        <section className="grid gap-x-8 gap-y-10 px-4 pt-3">
          {/* Image gallery */}
          {/* Product info */}
          <div className=" lg:pb-5 lg:mr-24 px-4 pb-5 ">
            <h1 className="text-lg text-blue-700 font-bold mb-5">
              CÁCH CHỌN SIZE GIÀY
            </h1>
            <img
              className="w-full h-full"
              src="https://tyhisneaker.com/wp-content/uploads/2022/08/bang-size-giay-cach-quy-doi-size-giay-quoc-te-va-viet-nam-2022-11082022164620-1.jpg"
              alt=""
            />
          </div>

          <section></section>
        </section>
        <section className="grid gap-x-8 gap-y-10 px-4 pt-3">
          {/* Image gallery */}
          {/* Product info */}
          <div className=" lg:pb-24 lg:mr-24 px-4 pb-16 ">
            <h1 className="text-lg text-gray-700 font-bold mb-2">
              <span className="text-red-700">Lưu ý</span>: Shop có các mẫu
              Sneaker Bigsize từ 44 - 45 -46 - 47 - 48 - 49 cho anh em chân to
              giá chênh lệch 30 - 50k so với size chuẩn. Vui lòng nhắn tin
              Fanpage hoặc Zalo để check size. Xin cảm ơn.
            </h1>
            <h1 className="text-lg text-blue-700 font-bold mb-2 uppercase">
              Những lý do bạn nên mua giày sneaker tại HHH Sneaker
            </h1>
            <ul>
              <li className="mt-1">
                - Giày chuẩn hàng Trung bản chuẩn nhất, cao cấp nhất thị trường.
              </li>
              <li className="mt-1">
                - Kiểm tra hàng mới thanh toán, đổi trả size nhanh chóng.
              </li>
              <li className="mt-1">- Mẫu giày Trends, đẹp, đủ mẫu, đủ size.</li>
              <li className="mt-1">- Ship COD toàn quốc nhanh chóng.</li>
              <li className="mt-1">- Bảo hành lên đến 6 tháng.</li>
              <li className="mt-1">
                - Freeship cho đơn 2 đôi hoặc đơn thứ 2; Mua 5 đôi tặng 1 đôi.
              </li>
            </ul>
          </div>
        </section>
        <section>
          {/* Rating and reviews */}
          <h1 className="font-semibold text-lg pb-4">
            Bình luận và đánh giá gần đây
          </h1>
          <div className="border p-5">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className="">
                  {[1].map((item) => (
                    <ProductReviewCards />
                  ))}
                </div>
              </Grid>
              <Grid item xs={5}>
                <h1 className="font-xl font-semibold pb-1">
                  Đánh giá sản phẩm
                </h1>
                <div className="flex items-center space-x-5">
                  <Rating readOnly precision={0.5} value={4.6}></Rating>
                  <p className="opacity-60">598490 lượt</p>
                </div>
                <Box className="mt-5 space-y-3">
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Xuất sắc</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        variant="determinate"
                        value={80}
                        color="success"
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                      ></LinearProgress>
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Rất tốt</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        variant="determinate"
                        value={60}
                        color="success"
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                      ></LinearProgress>
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Tốt</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        variant="determinate"
                        value={55}
                        color="success"
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                      ></LinearProgress>
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Trung bình</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        variant="determinate"
                        value={20}
                        color="warning"
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                      ></LinearProgress>
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Tệ</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        variant="determinate"
                        value={15}
                        color="error"
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                      ></LinearProgress>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>
        {/* Similar product */}
        <section className="pt-10">
          <h1 className="font-semibold py-5 text-lg">Sản phẩm tương tự</h1>
          <div className="flex flex-wrap space-y-5">
            {mens_kurta.slice(0, 5).map((item) => (
              <HomeSectionCard product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

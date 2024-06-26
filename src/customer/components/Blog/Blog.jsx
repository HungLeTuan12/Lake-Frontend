import React from "react";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const navigate = useNavigate();
  const product = {
    name: "Basic Tee 6-Pack",
    price: "$192",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Blog", href: "#" },
      { id: 2, name: "Tu van chon mua", href: "#" },
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
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  };
  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {/* Breadcrumbs */}
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
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                1
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1  gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          {/* <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h[35rem]">
              <img className="h-full w-full object-cover object-center" />
            </div>
            <div className="flex flex-wrap items-center space-x-5 mt-4"></div>
          </div> */}
          {/* Product info */}
          <div className="">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-lg  text-center lg:text-xl font-semibold text-gray-900">
                Phối đồ với Giày Nike Air Force 1 Low Brooklyn Cream – Giày Nike
                âm Dương
              </h1>
              <h1 className="text-lg mt-5 lg:text-xl  text-gray-900 opacity-60 pt-1">
                Giày Nike Air Force 1 Low Brooklyn Cream – Giày Nike âm Dương là
                cái tên đã gây chấn động cộng đồng sneakerheads trên toàn thế
                giới và cả Việt Nam cũng không ngoại lệ. Đôi giày Nike AF1 mới
                này nổi bật với phần kiểu dáng vô cùng độc đáo, đế giày đặc biệt
                giúp hack chiều cao đáng kể cũng là một trong những điểm thu hút
                sự chú ý. Vậy thì với một đôi giày có thiết kế đơn giản, màu sắc
                trắng tinh tế như vậy thì chúng ta nên chọn cách phối đồ với
                Nike âm Dương như thế nào để thật nổi bật và thu hút nhỉ? Hãy
                cùng Tyhi Sneaker tìm hiểu xem mọi người phối đồ với Giày Nike
                Âm Dương như thế nào nhé!
              </h1>
              <img
                className="h-full w-full mt-5"
                src="https://tyhisneaker.com/wp-content/uploads/2023/03/nike-am-duong-2048x1024.png"
                alt=""
              />
              <h1 className="text-lg mt-5  text-center lg:text-xl font-semibold text-gray-900">
                Những cách phối đồ cùng với giày Nike âm Dương
              </h1>
              <h1 className="text-lg mt-5 lg:text-xl  text-gray-900 opacity-60 pt-1">
                Học Tiktoker Nam Hoàng cách phối đồ cùng Nike âm Dương:<br></br>{" "}
                Chàng Tiktoker giới trẻ này diện Nike âm Dương khi ra đi chơi,
                dạo phố nên chắc chắn trang phục của anh chàng sẽ vô cùng thoải
                mái và năng động, một chút street style. Sẽ rất phù hợp với
                những điểm thiết kế của Nike âm Dương.<br></br> Anh chàng diện
                cho mình một chiếc quần jogger màu đem khá basic nhưng vẫn rất
                tôn dáng đúng không nào. Cô nàng lựa chọn phối cùng với chiếc áo
                sơ mi kem hoạ tiết LV đen nổi bật, độc lạ giúp hài hòa bộ outfit
                của cô nàng. Màu áo cũng matching với màu của đôi giày nên nhìn
                tổng thể bộ đồ của Nam Hoàng rất hài hòa và nổi bật.
              </h1>
              <img
                className="h-full w-full mt-5"
                src="https://tyhisneaker.com/wp-content/uploads/2023/03/phoi-do-voi-nike-am-duong-1536x2048.webp"
                alt=""
              />
              <h1 className="text-lg mt-5 lg:text-xl  text-gray-900 opacity-60 pt-1">
                Với bộ outfit này chúng ta có thể đi hẹn hò, dạo phố, đi coffee
                cùng bạn bè, đi dạo phố,… vẫn rất thời trang và hợp phong cách
                đó nha. Nếu bạn chưa biết phối gì với Nike âm Dương thì có thể
                học theo nàng Nam Hoàng nhé!
              </h1>
            </div>
          </div>
        </section>
        <section></section>
      </div>
    </div>
  );
};
export default Blog;

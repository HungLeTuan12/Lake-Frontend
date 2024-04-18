import React from "react";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Blog1 = () => {
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
          {/* Product info */}
          <div className="">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-lg  text-center lg:text-xl font-semibold text-gray-900">
                Phối đồ với giày Jordan 1 low Paris hợp thời trang và Phong Cách
              </h1>

              <img
                className="h-full w-full mt-5"
                src="https://tyhisneaker.com/wp-content/uploads/2022/10/phoi-do-voi-giay-jordan-1-low-paris-9.jpeg"
                alt=""
              />
              <img
                className="h-full w-full mt-5"
                src="https://tyhisneaker.com/wp-content/uploads/2021/03/phoi-do-voi-giay-jordan-1-low-paris-14.jpeg"
                alt=""
              />
              <img
                className="h-full w-full mt-5"
                src="https://tyhisneaker.com/wp-content/uploads/2021/03/phoi-do-voi-giay-jordan-1-low-paris-12.jpeg"
                alt=""
              />
              <img
                className="h-full w-full mt-5"
                src="https://tyhisneaker.com/wp-content/uploads/2021/03/phoi-do-voi-giay-jordan-1-low-paris-11.jpeg"
                alt=""
              />
              <img
                className="h-full w-full mt-5"
                src="https://tyhisneaker.com/wp-content/uploads/2021/03/phoi-do-voi-giay-jordan-1-low-paris.jpeg"
                alt=""
              />
            </div>
          </div>
        </section>
        <section></section>
      </div>
    </div>
  );
};
export default Blog1;

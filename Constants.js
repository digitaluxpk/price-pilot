import { Text } from "@mantine/core";

export const compareProducts = [
  {
    id: 1,
    name: "MacBook Air (2020) 13.3-inch - Apple M1 8-core and 7-core GPU - 8GB RAM - SSD 256GB",
    price: "$6666.99",
    image: "/images/category.png",
    inStock: true,
    rating: 4,
    totalReviews: 1000,
    stores: 4,
    options: "6 colours, 3 storage sizes",
  },
  {
    id: 2,
    name: "MacBook Air (2020) 13.3-inch - Apple M1 8-core and 7-core GPU - 8GB RAM - SSD 256GB",
    price: "$6666.99",
    image: "/images/category.png",
    inStock: true,
    rating: 4,
    totalReviews: 1000,
    stores: 4,
    options: "6 colours, 3 storage sizes",
  },
  {
    id: 3,
    name: "MacBook Air (2020) 13.3-inch - Apple M1 8-core and 7-core GPU - 8GB RAM - SSD 256GB",
    price: "$6666.99",
    image: "/images/category.png",
    inStock: true,
    rating: 4,
    totalReviews: 1000,
    stores: 4,
    options: "6 colours, 3 storage sizes",
  },
];
export const searchOptions = [
  {
    id: 1,
    img: "/images/speakers.png",
    name: "Smart Speakers & Displays",
  },
  {
    id: 2,
    img: "/images/smart.png",
    name: "Smart Lighting",
  },
  {
    id: 3,
    img: "/images/monitor.png",
    name: "Smart Speakers & Displays",
  },
  {
    id: 4,
    img: "/images/tablet-smartphone.png",
    name: "Smart Plugs & Outlets",
  },
  {
    id: 5,
    img: "/images/doorbell.png",
    name: "Smart Doorbells",
  },
  {
    id: 6,
    img: "/images/doorlocks.png",
    name: "Smart Doorlocks",
  },
  {
    id: 7,
    img: "/images/monitor.png",
    name: "Routers",
  },
];

export const weOffer = [
  {
    id: 1,
    logo: "/images/search.png",
    title: (
      <Text fw={700} w={226}>
        {" "}
        <span style={{ color: "#0034EC" }}> Search</span> and{" "}
        <span style={{ color: "#0034EC" }}> discover</span> the latest products.
      </Text>
    ),
  },
  {
    id: 2,
    logo: "/images/combine.png",
    title: (
      <Text fw={700} w={226}>
        {" "}
        <span style={{ color: "#0034EC" }}> Compare</span> and{" "}
        <span style={{ color: "#0034EC" }}> find</span> products that you need.
      </Text>
    ),
  },
  {
    id: 3,
    logo: "/images/dollar.png",
    title: (
      <Text fw={700} w={226}>
        {" "}
        <span style={{ color: "#0034EC" }}> Find</span> the{" "}
        <span style={{ color: "#0034EC" }}> best deals</span> from trusted
        retailers in the US.
      </Text>
    ),
  },
];

export const categoryCard = [
  {
    id: 1,
    title: "Smart Speakers & Displays",
    items: [
      { id: "smart-speakers", name: "Smart Speakers" },
      { id: "smart-displays", name: "Smart Displays" },
      { id: "smart-speaker-accessories", name: "Smart Speaker & Display Accessories" }
    ]
  },
  {
    id: 2,
    title: "Smart Lighting",
    items: [
      { id: "smart-light-bulbs", name: "Smart Light Bulbs" },
      { id: "led-light-strips", name: "LED Light Strips" },
      { id: "smart-light-panels", name: "Smart Light Panels" },
      { id: "smart-light-bars", name: "Smart Light Bars" },
      { id: "smart-lighting-kits", name: "Smart Lighting Kits" },
      { id: "smart-light-switches-dimmers", name: "Smart Light Switches & Dimmers" },
      { id: "accent-lighting", name: "Accent Lighting" }
    ]
  },
  {
    id: 3,
    title: "Smart Plugs & Outlets",
    items: [
      { id: "smart-plugs", name: "Smart Plugs" },
      { id: "smart-power-strips", name: "Smart Power Strips" },
      { id: "smart-usb-outlets", name: "Smart & USB Outlets" },
      { id: "smart-light-switches-dimmers-plugs", name: "Smart Light Switches & Dimmers" }
    ]
  }
];

export  const mobileSubCategoryList = [
  { id: "smart-plugs", name: "Smart Plugs" },
  { id: "smart-power-strips", name: "Smart Power Strips" },
  { id: "smart-usb-outlets", name: "Smart & USB Outlets" },
  { id: "smart-light-switches-dimmers-plugs", name: "Smart Light Switches & Dimmers" }
]
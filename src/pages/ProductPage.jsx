import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { Image, Box, Flex, Text } from "@chakra-ui/react";
import { Slider } from "infinite-react-carousel";

const ProductPage = () => {
  const { productId } = useParams();
  const { data, error } = useSWR(
    `http://localhost:5000/api/products/getProductById?productId=${productId}`,
    fetcher
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log("Product data:", data);

  return (
    <div>
      <Navbar />
      <div className="pt-[60px]">
        <Flex direction={{ base: "column", md: "row" }} p={10}>
          <Box
            flex={{ base: "1", md: "1", lg: "1" }}
            mb={{ base: "4", md: "0" }}
          >
            <Slider>
              <Image src={data.imageUrl} />
              {data.attachments.map((url) => (
                <Image key={url} src={url} />
              ))}
            </Slider>
          </Box>
          <Box flex={{ base: "1", md: "1", lg: "1" }}>
            <div className="p-5 ml-5">
              <p className="text-xl">{data.name}</p>
              <p className="text-lg font-bold">Price: ${data.price}</p>
              <p>{data.description}</p>
              <Text fontWeight="bold" mt={4}>
                Available Offers:
              </Text>
              <ol className=" list-disc">
                <li>
                  Get ₹50 instant discount on first Flipkart UPI txn on order of
                  ₹200 and aboveT&C
                </li>
                <li>5% Cashback on Flipkart Axis Bank CardT&C</li>
                <li>
                  10% off up to ₹1,250 on HDFC Bank Credit Card EMI Txns,
                  Tenure: 6 and 9 months, Min Txn Value: ₹7500T&C
                </li>
                <li>
                  Get extra 36% off (price inclusive of cashback/coupon)T&C
                </li>
              </ol>
            </div>
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default ProductPage;

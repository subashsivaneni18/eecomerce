import React, { useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import axios from "axios";
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CircleX } from "lucide-react";

const ProductCreation = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
    stockQuantity: "",
    attachments: [], // Array to store image URLs
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const presetKey = "eecomerce";
  const cloudName = "dbhrxvgro";

  const handleSingleImageUpload = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", presetKey);
    return axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      )
      .then((res) => res.data.secure_url);
  };

  const handleMultipleImageUpload = (files) => {
    const formDataArray = files.map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", presetKey);
      return formData;
    });

    return Promise.all(
      formDataArray.map((formData) =>
        axios
          .post(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            formData
          )
          .then((res) => res.data.secure_url)
      )
    );
  };

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    handleSingleImageUpload(file).then((url) =>
      setProductData({ ...productData, imageUrl: url })
    );
  };

  const handleRemoveProfilePicture = () => {
    setProductData({ ...productData, imageUrl: "" });
  };

  const handleAttachmentsUpload = (e) => {
    const files = Array.from(e.target.files);
    handleMultipleImageUpload(files).then((urls) =>
      setProductData({
        ...productData,
        attachments: [...productData.attachments, ...urls],
      })
    );
  };

  const handleRemoveAttachment = (index) => {
    const newAttachments = productData.attachments.filter(
      (_, i) => i !== index
    );
    setProductData({ ...productData, attachments: newAttachments });
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const {
          name,
          description,
          price,
          category,
          imageUrl,
          stockQuantity,
          attachments,
        } = productData;
        console.log(productData);
        const res = await axios.post(
          `http://localhost:5000/api/products/create`,
          {
            name,
            description,
            price,
            category,
            imageUrl,
            stockQuantity,
            attachments,
          }
        );
        console.log(res.data);
        setProductData({
          name: "",
          description: "",
          price: "",
          category: "",
          imageUrl: "",
          stockQuantity: "",
          attachments: [],
        });
        setError(null);
      } catch (error) {
        console.error("Error creating product:", error);
        setError("Could not create product. Please try again.");
      }
    },
    [productData]
  );

  const inputSizes = useBreakpointValue({ base: "100%", md: "48%" });

  return (
    <div>
      <Navbar />
      <div className="pt-[120px] px-4 md:px-8 lg:px-16">
        <form onSubmit={handleSubmit}>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
            <GridItem colSpan={2}>
              <Input
                label="Name"
                name="name"
                value={productData.name}
                onChange={handleInputChange}
              />
            </GridItem>
            <GridItem>
              <Input
                type="number"
                label="Price"
                name="price"
                value={productData.price}
                onChange={handleInputChange}
              />
            </GridItem>
            <GridItem>
              <Input
                label="Category"
                name="category"
                value={productData.category}
                onChange={handleInputChange}
              />
            </GridItem>
            <GridItem>
              <Input
                type="number"
                label="Stock Quantity"
                name="stockQuantity"
                value={productData.stockQuantity}
                onChange={handleInputChange}
              />
            </GridItem>

            <GridItem>
              <Input
                type="text"
                label="Description"
                name="description"
                value={productData.description}
                onChange={handleInputChange}
              />
            </GridItem>

            {/* Profile Pic Uploading */}
            <GridItem colSpan={2}>
              <Box position="relative" overflow="hidden">
                {productData.imageUrl ? (
                  <Box
                    w={inputSizes}
                    h="auto"
                    borderRadius="md"
                    overflow="hidden"
                    boxShadow="md"
                  >
                    <img
                      src={productData.imageUrl}
                      alt="Product"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <Center>
                      <IconButton
                        icon={<CircleX />}
                        onClick={handleRemoveProfilePicture}
                        aria-label="Remove Profile Picture"
                        size="sm"
                        mt={2}
                      />
                    </Center>
                  </Box>
                ) : (
                  <Button
                    as="label"
                    htmlFor="profile-picture-button"
                    variant="outline"
                  >
                    Upload Profile Picture
                  </Button>
                )}
                <input
                  id="profile-picture-button"
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureUpload}
                  style={{ display: "none" }}
                />
              </Box>
            </GridItem>

            {/* Attachments Uploading */}
            <GridItem colSpan={2}>
              <Box position="relative" overflow="hidden">
                <Button
                  as="label"
                  htmlFor="attachments-button"
                  variant="outline"
                >
                  Upload Attachments
                </Button>
                <input
                  id="attachments-button"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleAttachmentsUpload}
                  style={{ display: "none" }}
                />
                <Grid
                  templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                  gap={4}
                  mt={4}
                >
                  {productData.attachments.map((url, index) => (
                    <GridItem key={index}>
                      <Box
                        w="100%"
                        h="auto"
                        borderRadius="md"
                        overflow="hidden"
                        boxShadow="md"
                      >
                        <img
                          src={url}
                          alt={`Product Image ${index + 1}`}
                          style={{ width: "100%", height: "100%" }}
                        />
                        <Center>
                          <IconButton
                            icon={<CircleX />}
                            onClick={() => handleRemoveAttachment(index)}
                            aria-label="Remove Image"
                            size="sm"
                            mt={2}
                          />
                        </Center>
                      </Box>
                    </GridItem>
                  ))}
                </Grid>
              </Box>
            </GridItem>
          </Grid>
          {error && (
            <Box color="red.500" mt={4}>
              {error}
            </Box>
          )}
          <Button colorScheme="blue" type="submit" mt={4}>
            Create Product
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProductCreation;

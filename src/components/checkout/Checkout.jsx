import { CheckCircleIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  RadioGroup,
  Stack,
  Radio,
  Image,
  Table,
  Tr,
  Thead,
  Th,
  Tbody,
  Td,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { useShowToast } from "../../hooks/useShowToast";
import { useProductCategories } from "../../contexts/ProductsCategoriesProvider";
import { numberToCurrency } from "../../utils/helpers";
import useWidth from "../../hooks/useWidth";

function Checkout() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [eMoneyNumber, setEMoneyNumber] = useState("");
  const [eMoneyPin, setEMoneyPin] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("ePay");
  const showToast = useShowToast();
  const { cart, setCart } = useProductCategories();
  const { width } = useWidth();
  function total() {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
  function VAT() {
    return (
      cart.reduce((acc, item) => acc + item.price * item.quantity, 0) * 0.2
    );
  }
  function grandTotal() {
    return total() + VAT() + 50;
  }
  function handleCheckoutSubmit() {
    if (paymentMethod === "ePay") {
      if (
        !name ||
        !email ||
        !phNumber ||
        !address ||
        !zipCode ||
        !city ||
        !eMoneyNumber ||
        !eMoneyPin ||
        !paymentMethod
      ) {
        showToast("Error", "Please fill all the fields", "error");
        return;
      }
    } else {
      if (!name || !email || !phNumber || !address || !zipCode || !city) {
        showToast("Error", "Please fill all the fields", "error");

        return;
      }
    }
    setTimeout(() => {
      onClose();
      setCart([]);
    }, 3000);
    showToast("Success", "Order Placed Successfully", "success");
    onOpen();
  }
  return (
    <>
      <Flex
        flexDir={width > 600 ? "row" : "column"}
        w={"full"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        px={"10px"}
      >
        {/* form */}
        <Flex
          w={width > 600 ? "50%" : "full"}
          textAlign={"left"}
          flexDir={"column"}
          borderRight={width > 600 ? "1px solid #000" : " "}
          gap={"10px"}
        >
          <Text textTransform={"uppercase"} fontSize={"30px"} color={"#000"}>
            Checkout
          </Text>
          <Text
            textTransform={"uppercase"}
            fontSize={"15px"}
            color={"var(--orange)"}
          >
            Billing Details
          </Text>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder={"John Doe"}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>

            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="gray.300" />
              </InputLeftElement>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                type="email"
                placeholder="someone@gmail.com"
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>

            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.300" />
              </InputLeftElement>
              <Input
                value={phNumber}
                onChange={(e) => setPhNumber(e.target.value)}
                type="tel"
                placeholder="8653421589"
              />
            </InputGroup>
          </FormControl>
          <Text
            textTransform={"uppercase"}
            fontSize={"15px"}
            color={"var(--orange)"}
          >
            Shipping Info
          </Text>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value.trim())}
              type="text"
              placeholder={"1137 Williams Avenue"}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Zip Code</FormLabel>
            <Input
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              type="text"
              placeholder={"10001"}
            />
          </FormControl>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input
              value={city}
              onChange={(e) => setCity(e.target.value.trim())}
              type="text"
              placeholder={"New York"}
            />
          </FormControl>
          <Text
            textTransform={"uppercase"}
            fontSize={"15px"}
            color={"var(--orange)"}
          >
            Payment Details
          </Text>
          <FormControl>
            <RadioGroup
              value={paymentMethod}
              onChange={(value) => {
                setPaymentMethod(value);
              }}
            >
              <Stack direction="row">
                <Radio value="ePay">e-money</Radio>
                <Radio value="cash">Cash On Delivery</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          {paymentMethod === "ePay" && (
            <>
              <FormControl>
                <FormLabel>e-money Number</FormLabel>
                <Input
                  value={eMoneyNumber}
                  onChange={(e) => setEMoneyNumber(e.target.value)}
                  type="text"
                  placeholder={"238521993"}
                />
              </FormControl>
              <FormControl>
                <FormLabel>e-money PIN</FormLabel>
                <Input
                  value={eMoneyPin}
                  onChange={(e) => setEMoneyPin(e.target.value)}
                  type="text"
                  placeholder={"6891"}
                />
              </FormControl>
            </>
          )}
          {paymentMethod === "cash" && (
            <Flex gap={"2px"} justifyContent={"center"} alignItems={"center"}>
              <Image
                src={"/images/checkout/icon-cash-on-delivery.svg"}
                alt={"cash"}
              />
              <Text>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </Text>
            </Flex>
          )}
        </Flex>
        {/* summary */}
        <Flex w={width > 600 ? "50%" : "100%"} flexDir={"column"} gap={"15px"}>
          <Text
            textAlign={"center"}
            textTransform={"uppercase"}
            fontSize={"30px"}
            color={"#000"}
          >
            Summary
          </Text>
          {cart.length === 0 && (
            <Text
              textAlign={"center"}
              textTransform={"uppercase"}
              fontSize={"15px"}
              color={"#000"}
            >
              No Items in Cart
            </Text>
          )}
          {cart.length > 0 &&
            cart.map((item) => (
              <Table key={item.id} variant={"simple"}>
                <Thead>
                  <Tr>
                    <Th>Product</Th>
                    <Th>Price</Th>
                    <Th>Quanitity</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Image
                        h={"60px"}
                        srcSet={`${item?.categoryImage?.desktop} 1920w, ${item?.categoryImage?.tablet} 800w, ${item?.categoryImage?.mobile} 480w`}
                        sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1920px"
                        alt={"img"}
                      ></Image>
                    </Td>
                    <Td>{numberToCurrency(item.price * item.quantity)}</Td>
                    <Td>{item.quantity}x</Td>
                  </Tr>
                </Tbody>
              </Table>
            ))}
          <Button
            isDisabled={cart.length === 0}
            onClick={handleCheckoutSubmit}
            colorScheme={"orange"}
            w={"30%"}
            alignSelf={"center"}
          >
            Checkout
          </Button>

          {cart.length > 0 && (
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"10px"}
              fontSize={"15px"}
            >
              <Flex
                w={"full"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text>Total</Text>
                <Text>{numberToCurrency(total())}</Text>
              </Flex>
              <Flex
                w={"full"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text>Shipping</Text>
                <Text>{numberToCurrency(50)}</Text>
              </Flex>
              <Flex
                w={"full"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text>VAT</Text>
                <Text>{numberToCurrency(VAT())}</Text>
              </Flex>
              <Flex
                w={"full"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text color="var(--orange)">Grand Total</Text>
                <Text>{numberToCurrency(grandTotal())}</Text>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <CheckCircleIcon color={"orange"} />
            </ModalHeader>
            <ModalHeader>Thank You For Your Order</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontSize={"12px"}>
                You Will Recieve An Email Confirmation Shortly
              </Text>
              <Flex flexDir={"column"} gap={"20px"}>
                <Flex>
                  {cart.map((item) => (
                    <Flex
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      key={item.id}
                      w={"100%"}
                      gap={"20px"}
                    >
                      <Image
                        h={"60px"}
                        srcSet={`${item?.categoryImage?.desktop} 1920w, ${item?.categoryImage?.tablet} 800w, ${item?.categoryImage?.mobile} 480w`}
                        sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1920px"
                        alt={"img"}
                      ></Image>
                      <Text>Product Name - {item.name}</Text>
                      <Text>Quantity {item.quantity}x </Text>
                    </Flex>
                  ))}
                </Flex>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  w={"100%"}
                  gap={"20px"}
                >
                  <Text color={"var(--orange)"}>Grand Total </Text>
                  <Text>{grandTotal()}</Text>
                </Flex>
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  w={"100%"}
                  gap={"20px"}
                >
                  <Link
                    color={"#fff"}
                    background={"var(--orange)"}
                    to="/"
                    as={RouterLink}
                    padding={"10px 15px"}
                  >
                    Back to Home
                  </Link>
                </Flex>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

export default Checkout;

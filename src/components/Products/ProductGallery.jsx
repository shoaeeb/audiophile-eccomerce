import { Box, Flex, Image } from "@chakra-ui/react";

function ProductGallery({ galleryImages }) {
  return (
    <Flex
      w={"100%"}
      px={"15px"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"10px"}
    >
      <Flex
        gap={"10px"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box borderRadius={"8px"} overflow={"hidden"}>
          <Image
            srcSet={`${galleryImages?.first?.desktop} 1920w, ${galleryImages?.first?.tablet} 800w, ${galleryImages?.first?.mobile} 480w`}
            sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1920px"
            alt={"img"}
          ></Image>
        </Box>
        <Box borderRadius={"8px"} overflow={"hidden"}>
          <Image
            srcSet={`${galleryImages?.second?.desktop} 1920w, ${galleryImages?.second?.tablet} 800w, ${galleryImages?.second?.mobile} 480w`}
            sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1920px"
            alt={"img"}
          ></Image>
        </Box>
      </Flex>
      <Flex>
        <Box borderRadius={"8px"} overflow={"hidden"}>
          <Image
            srcSet={`${galleryImages?.third?.desktop} 1920w, ${galleryImages?.third?.tablet} 800w, ${galleryImages?.third?.mobile} 480w`}
            sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1920px"
            alt={"img"}
          ></Image>
        </Box>
      </Flex>
    </Flex>
  );
}

export default ProductGallery;

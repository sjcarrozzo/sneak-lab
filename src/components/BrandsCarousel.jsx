import { Box } from "@mui/material";
import { scrollLeft } from "@/theme";
import { brands } from "@/assets";

function BrandsCarousel() {
  const tripleBrands = [...brands, ...brands, ...brands];
  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        py: 5,
        backgroundColor: "#f3f3f3",
        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          animation: `${scrollLeft} 20s linear infinite`,
        }}
      >
        {tripleBrands.map((brand, index) => (
          <Box
            key={index}
            component="img"
            src={brand.src}
            alt={brand.alt}
            sx={{
              height: 150,
              mx: 4,
              objectFit: "fit",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default BrandsCarousel;

import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";

const productOptions = [
  { title: "Kids Garments", description: "Trendy and reasonable clotes for kids of their ages", img: "https://www.sheknows.com/wp-content/uploads/2023/09/Screen-Shot-2023-09-21-at-2.42.38-PM.png?w=1440" },

  { title: "Kids Toys", description: "Fun & Engaging Toys for All Ages.", img: "https://storeassets.im-cdn.com/standalone/767432/eco_friendly_channapatna_wooden_toys_and_dolls_11.webp" },
  // { title: "Spices", description: "Authentic Indian spices, carefully sourced and exported globally.", img: "https://sulaindianrestaurant.com/wp-content/uploads/2020/12/Julne-blog-2017.jpg" },
  // { title: "Garlic Powder", description: "Fresh Garlic Powder harvested with care from best of indian farms.", img: "https://m.media-amazon.com/images/I/71m9dilposL.jpg" },
  // { title: "Onion Powder", description: "Fresh Onion Powder harvested with care from best of indian farms.", img: "https://img.freepik.com/premium-photo/onion-powder-wooden-bowl-fresh-red-onion-isolated-white-background-top-view-flat-lay_781325-20026.jpg?semt=ais_hybrid" },
];

const TradingSolutions = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: "100%",
        background: 'linear-gradient(135deg,rgb(27, 27, 27),rgb(19, 21, 19))',
        color: "white",
        padding: "40px",
        textAlign: "center",
      }}
    >
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
          We Trade in
        </Typography>
      </motion.div>

      <Grid container spacing={3} justifyContent="center">
        {productOptions.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            {/* Animated Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  background: 'linear-gradient(135deg,rgb(178, 178, 178),rgb(214, 214, 214))',
                  color: "white",
                 
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardMedia component="img" sx={{minHeight:100,maxHeight:300}} image={product.img} alt={product.title} />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold",color:'black' }}>{product.title}</Typography>
                  <Typography variant="body2" color='black'>
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TradingSolutions;

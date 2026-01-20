import { Box, Typography, Button, Container } from '@mui/material';
import { assets } from '@/assets';

function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        height: 'calc(100vh - 64px)',
        overflow: 'hidden',
      }}
    >
      {/*Hero video container*/}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={assets.heroVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </Box>

      {/*Semi-transparent overlay for readability*/}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
        }}
      />

      {/* Text content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: 700, mb: 2 }}
        >
          Your favorite sneakers store
        </Typography>

        <Typography
          variant="h6"
          sx={{ mb: 4, maxWidth: 500 }}
        >
          Discover the latests news and classic urbans
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{ width: 'fit-content' }}
        >
          Go Shopping🔥
        </Button>
      </Container>
    </Box>
  );
}

export default Hero;
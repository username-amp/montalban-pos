import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import '../Styles/Home.scss'; // Import your Home component styles
import ModalComponent from './ModalComponent'; // Import the ModalComponent
import LoginPin from './LoginPin'; // Import the LoginPin component
import CashierLogoffSuccessModal from './CashierLogoffSuccessModal'; // Import the CashierLogoffSuccessModal component
import ResetSuccessModal from './ResetSuccessModal'; // Import the ResetSuccessModal component
import ReceiptNumber from './ReceiptNumber'; // Import the ReceiptNumber component
import LoginModal from './LoginModal'; // Import the LoginModal component
import clickSound from '../assets/click-sound.mp3'; // Import the sound file

import receipt from '../assets/Receiptimage.jpg';
import dine from '../assets/dineIn.jpg';
import cutoff from '../assets/cutoff.jpg';

const images = [
  {
    url: receipt,
    title: 'Receipt',
    width: '30%',
    content: 'Receipt'
  },
  {
    title: 'Void Registration',
    width: '30%',
    content: 'Void Registration'
  },
  {
    title: 'Cashier Off',
    width: '30%',
    content: 'Cashier Off'
  },
  {
    title: 'Cashier On',
    width: '30%',
    content: 'Cashier On'
  },
  {
    title: 'Register',
    width: '30%',
    content: 'Register'
  },
  {
    url: cutoff,
    title: 'Cutoff',
    width: '30%',
    content: 'Cutoff'
  },
  {
    title: 'Reset CM',
    width: '30%',
    content: 'Reset CM'
  },
  {
    title: 'Shutdown',
    width: '30%',
    content: 'Shutdown Content'
  },
  {
    url: dine,
    title: 'Dine',
    width: '30%',
    content: 'Dine',
    link: '/dine'
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  width: '30%', // Adjust width to maintain consistency with other buttons
  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
    height: 150,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
  '& .MuiButtonBase-root': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
    textDecoration: 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    backgroundColor: theme.palette.primary.main,
    position: 'relative',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [showLoginPin, setShowLoginPin] = useState(false);
  const [showCashierLogoffSuccess, setShowCashierLogoffSuccess] = useState(false);
  const [showResetSuccess, setShowResetSuccess] = useState(false);
  const [showReceiptNumber, setShowReceiptNumber] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const clickAudio = new Audio(clickSound);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const handleButtonClick = (content) => {
    clickAudio.play();
    if (content === 'Void Registration' || content === 'Register' || content === 'Cutoff') {
      setShowLoginPin(true);
    } else if (content === 'Cashier Off') {
      setShowCashierLogoffSuccess(true);
    } else if (content === 'Reset CM') {
      setShowResetSuccess(true);
    } else if (content === 'Receipt') {
      setShowReceiptNumber(true);
    } else if (content === 'Cashier On') {
      setShowLoginModal(true);
    } else if (content === 'Shutdown Content') {
      handleShutdown();
    } else {
      openModal(content);
    }
  };

  const closeLoginPin = () => {
    setShowLoginPin(false);
  };

  const closeCashierLogoffSuccess = () => {
    setShowCashierLogoffSuccess(false);
  };

  const closeResetSuccess = () => {
    setShowResetSuccess(false);
  };

  const closeReceiptNumber = () => {
    setShowReceiptNumber(false);
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    // Perform any actions upon successful login
  };

  const handleShutdown = () => {
    // Perform shutdown logic here
    alert('Shutting down the desktop...');
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: 'center', alignItems: 'center', height: '100vh', gap: '20px' }}>
      {images.map((image, index) => (  // Added index parameter
        <ImageButton
          key={image.title}
          style={{
            width: image.width,
          
          }}
          onClick={image.link ? () => clickAudio.play() : () => handleButtonClick(image.content)}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
      <ModalComponent show={isModalOpen} onClose={closeModal}>
        {modalContent}
      </ModalComponent>
      {showLoginPin && <LoginPin onClose={closeLoginPin} />}
      {showCashierLogoffSuccess && <CashierLogoffSuccessModal onClose={closeCashierLogoffSuccess} />}
      {showResetSuccess && <ResetSuccessModal onClose={closeResetSuccess} />}
      {showReceiptNumber && <ReceiptNumber onClose={closeReceiptNumber} />}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} onLogin={handleLoginSuccess} />}
    </Box>
  );
};

export default Home;
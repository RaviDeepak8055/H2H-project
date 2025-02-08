import { FaHeart, FaHome, FaSignInAlt } from "react-icons/fa"
import "./Hero.css"
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

function Hero() {
  return (
    <motion.div 
      className="hero"
      initial={{ opacity: 0, y: 50 }} // Fade in from bottom
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        
        {/* Text Section - Fade from Left */}
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1>HandToHand</h1>
          <div className="taglines">
            <p>"Your small contribution can make a big difference."</p>
            <p>"Join us in feeding those who need it most."</p>
          </div>
          
          <div className="button-group">
            <motion.button 
              className="btn primary"
              initial={{ opacity: 0, scale: 0.8 }} // Pop-in effect
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Get Started
            </motion.button>

            <Link to="/add-home" style={{ textDecoration: 'none' }}>
            <motion.button 
              className="btn secondary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHome className="icon" />
              Add Your Home
            </motion.button>
            </Link>
            
            <motion.button 
              className="btn secondary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Login to Update Home
            </motion.button>
          </div>
        </motion.div>

        {/* Image Section - Fade from Right */}
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src="/assets/Donation.jpg"
            alt="Children gathering around food"
          />
        </motion.div>

      </div>

      {/* Mission Statement - Fade from Bottom */}
      <motion.div 
        className="mission-statement"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p>Making a difference in communities worldwide through sustainable food programs</p>
      </motion.div>

    </motion.div>
  );
}

export default Hero;
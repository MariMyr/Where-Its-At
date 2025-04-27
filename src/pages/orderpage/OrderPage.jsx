import './orderPage.css';
import { motion } from 'framer-motion';
import NavBar from '../../components/navbar/Navbar';

function OrderPage() {
  return (
    <motion.section
      className='orders-page'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}} 
    >
    <section className="orders-page">
      <h1 className="orders-page__title">Här är biljetterna</h1>
    </section>
    <NavBar />
    </motion.section>
  )
}

export default OrderPage;
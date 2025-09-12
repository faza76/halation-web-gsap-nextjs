import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from '../Stairs/anim';
import styles from './style.module.scss';
import Linku from './Link';

const menu = [
  {
    title: "Index",
    description: "To See Everything",
    images: ['projects1.jpg', 'projects2.jpg'],
    link: "/"
  },
  {
    title: "Work",
    description: "To Learn Everything",
    images: ['agence1.jpg', 'agence2.jpg'],
    link: "/work"
  },
  {
    title: "Contact",
    description: "To Send a FAX",
    images: ['contact1.jpg', 'contact2.jpg'],
    link: "/"
  
  }
]

export default function Menu({closeMenu}) {

  return (
    <div className={styles.menu}>

        <div className={styles.header}>
          <motion.svg 
            variants={slideLeft} 
            {...mountAnim}
            onClick={() => {closeMenu()}} 
            width="68" 
            height="68" 
            viewBox="0 0 68 68" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 1.5L67 67" stroke="white"/>
              <path d="M66.5 1L0.999997 66.5" stroke="white"/>
          </motion.svg>
        </div>

        <div className={styles.body}>
          {
            menu.map( (el, index) => {
              return <Linku data={el} index={index} key={index} linku={el.link}/>
            })
          }
        </div>

        <motion.div 
          variants={opacity} 
          {...mountAnim} 
          custom={0.5} 
          className={styles.footer}>
          <a>FB</a>
          <a>IG</a>
          <a>IN</a>
          <a>BE</a>
        </motion.div>

    </div>
  )
}
// 'use client'
import Image from 'next/image'
import styles from './Products.module.scss'
import Link from 'next/link'
// import { motion, AnimatePresence } from "framer-motion";



const products = [
  { id: 1, title: "брокерский счет", text: "Торговля на фондовом рынке Кыргызстана Европы и Америки" },
  { id: 2, title: "портфельное инвестирование", text: "Готовые портфельные решения для различныхных стратегийи" },
  { id: 3, title: "ВЕНЧУРНЫЕ ИНВЕСТИЦИИ", text: "Возможность венчурного инвестирования в стартапыи" },
]
export const scaleAnimation = {
  hidden: {
    scale: 0.2,
  },
  visible: {
    scale: 1,
    transition: {
      delay: 0.1,
      duration: 2,
    },
  },
};
export const fadeAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 2,
    },
  },
};

export default function Home() {
  return (
    // <AnimatePresence>
    // <main className={styles.main}>
      <div className={styles.container}>
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
        > */}
        <div className={styles.inner_container}>
          {/* <motion.div className={styles.title_block} variants={scaleAnimation}>наши продукты </motion.div> */}

          <div className={styles.green_blocks}
          // variants={fadeAnimation}
          >
            {products.map(elem => (
              <div className={styles[`green_block_${elem.id}`]} key={elem.id}>
                <div className={styles.green_block_title}>{elem.title}</div>
                <div className={styles.green_block_text}>{elem.text}</div>
              </div>
            ))}

          </div>
        </div>
        {/* </motion.div> */}
      </div>


    // </main>
    // </AnimatePresence>
  )
}

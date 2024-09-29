import { motion } from "framer-motion";
import style from "../sideBar.module.css";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  close: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ state, handleClick }) => {
  const items = [
    "Personalised Trips",
    "Corporate Trips",
    "Group Trips",
    "Blogs",
    "About",
  ];

  return (
    <motion.div
      className={style.links}
      variants={variants}
      animate={state ? "open" : "close"}
    >
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick()}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;

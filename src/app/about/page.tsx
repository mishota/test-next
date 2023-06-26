"use client"
import Link from "next/link";
import styles from "./About.module.scss";
import { Tooltip } from "@mui/material";

const getData = async () => {
  const ids = [1, 2, 3, 4, 5];
  return ids;
};

const About = async () => {
  const ids = await getData();
  return (
    <div className={styles.container}>
      <Tooltip title="About">
        <div className={styles.title}>
          <h1>ABOUT</h1>
        </div>
        {/* <IconButto>
          <DeleteIcon />
        </IconButto> */}
      </Tooltip>
      <div className={styles.links}>
        {ids.map((elem) => (
          <div key={elem}>
            <Link href={`/about/${elem}`}>{elem}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default About;

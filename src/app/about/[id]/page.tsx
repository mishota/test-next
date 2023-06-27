import { Metadata } from "next";
import styles from "./../About.module.scss"
import Link from "next/link";

type PropsType = {
    params: {
        id: string;
    }
}

// export const generateMetaData = async({ params: { id } }: PropsType) => {
//     return {
//         title: `meta ${id}`,
//     }
// }
const getData = async (id: string) => {
    const ids = [id, 1, 2, 3, 4, 5];
    return ids;
}

// export async function generateMetaData({ params: { id } }: PropsType): Promise<Metadata> {
//     return {
//         title: `meta ${id}`,
//     }
// }
const AboutId = async ({ params: { id } }: PropsType) => {
    const ids = await getData(id);

    return (
        <div className={styles.container}>
            <div className={styles.title}><h1>ID{id}</h1></div>
            <div className={styles.links}>
                {ids.map(elem => (
                    <div key={elem}>
                        <Link href={`/about/${elem}`}>{elem}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default AboutId;
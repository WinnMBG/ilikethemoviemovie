import Image from "next/image";
import styles from 'styles/card.module.css';
import Link from 'next/link';

export default function MovieCard() {
    return (
        <section className="card">
            <Image src = "/continuum.jpg" alt="affiche" width={0} height={0} sizes="50vw"style={{ width:'100%',height:"100%"}}/>
            <div >
                <Link href='/movie/details'>
                    
                <h2>Film</h2>
                <h3>la saga de perlinp</h3>
                </Link>
            </div>
        </section>
    )
}
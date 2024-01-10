import Link from "next/link"
import "./styles/navbar.scss"

export default function Navbar({previous, next } : {previous: string, next: string }) {
    return (
        <nav id="navbar">
            <Link href={"/" + previous}>&lt; Voltar</Link>
            <Link href={"/" + next}>Próximo &gt;</Link>
        </nav>
    )
}
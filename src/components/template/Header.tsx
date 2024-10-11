import Logo from "./Logo";
import Shop from "./Shop";

export default function Header() {
    return (
        <header
            className="
                flex justify-between items-center
                bg-zinc-800 h-20 px-10 text-white
            "
        >
            <Logo />
            <Shop />
        </header>
    )
}
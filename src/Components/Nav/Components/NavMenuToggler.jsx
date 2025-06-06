import { useNav } from "../../../Contexts/NavContext";

function NavMenuToggler() {

    const { menuIsOpen, setMenuIsOpen } = useNav();

    return (
        <button
            type="button"
            title={menuIsOpen ? "Close Menu" : "Open Menu"}
            onClick={e => {
                e.stopPropagation();
                setMenuIsOpen(prev => !prev);
            }}
            className={`text-2xl xl:hidden cursor-pointer rounded-full w-[50px] h-[50px] text-center leading-[50px] transition ${menuIsOpen ? 'bg-black/5 text-primary' : ' sm:hover:bg-black/5'}`}
        >
            <i className={`fa-solid fa-${menuIsOpen ? "xmark" : "bars"} fa-fw`}></i>
            <span className="sr-only">Nav Menu Toggler</span>
        </button>
    )
}

export default NavMenuToggler;
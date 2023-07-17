export interface NavbarType {
    label: string,
    href: string;
}
export const NavbarArray: Array<NavbarType> = [
    {
        label: "Female",
        href: "/female"
    },
    {
        label: "Male",
        href: "/male"
    },
    {
        label: "Kids",
        href: "#"
    },
    {
        label: "All Products",
        href: "/products"
    }
]

export interface MobileNavbarType {
    label: string,
    href: string;
    icon:string
}

export const MobileNavbarArray: Array<MobileNavbarType> = [
    {
        label: "Female",
        href: "/female",
        icon:"FaFemale"
    },
    {
        label: "Male",
        href: "/male",
        icon:"FaMale"
    },
    {
        label: "Kids",
        href: "#",
        icon:"FaChild"
    },
    {
        label: "All Products",
        href: "/products",
        icon:"MdProductionQuantityLimits"
    }
]



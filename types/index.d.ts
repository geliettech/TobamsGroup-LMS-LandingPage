export type DropdownItem = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
};

export type ConsultantProps = {
    title: string;
    desc: string;
}
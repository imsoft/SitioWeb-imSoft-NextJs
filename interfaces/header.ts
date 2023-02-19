export interface IHeader {
  name: string;
  description?: string;
  href: string;
  icon: HeroIcon;
}

type HeroIcon = (props: React.ComponentProps<"svg">) => JSX.Element;

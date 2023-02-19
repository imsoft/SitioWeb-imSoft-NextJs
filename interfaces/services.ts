export interface Services {
  nameOfService: string;
  description: string;
  href: string;
  icon: HeroIcon;
}

type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;

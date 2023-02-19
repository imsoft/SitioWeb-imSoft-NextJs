export interface IFeaturesSection {
  topic: string;
  title: string;
  description: string;
  serviceFeatures: IServiceFeatures[];
}

export interface IServiceFeatures {
  title: string;
  description: string;
  icon: HeroIcon;
}

type HeroIcon = (props: React.ComponentProps<"svg">) => JSX.Element;

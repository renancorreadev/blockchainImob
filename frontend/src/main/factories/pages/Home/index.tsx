import { HomeBanner } from "@presentation/components/Home/HomeBanner";
import { InfoMob } from "@presentation/components/Home/InfoImob";
import { HomeWrapper } from "./styles";

export const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <HomeBanner />
      <InfoMob
        variation="imobInfo"
        backgroundDesktop="url(/effect_reverse.png) no-repeat bottom"
        backgroundMobile="url(/effect5.svg) no-repeat top right"
      />
      <InfoMob
        variation="govinfo"
        backgroundDesktop="url(/effect5.svg) no-repeat top right"
        backgroundMobile=""
      />
    </HomeWrapper>
  );
};

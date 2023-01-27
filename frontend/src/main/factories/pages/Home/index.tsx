import { HomeBanner } from "@presentation/components/Home/HomeBanner";
import { InfoMob } from "@presentation/components/Home/InfoImob";
import { HomeWrapper } from "./styles";

export const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <HomeBanner />
      <InfoMob variation="imobInfo" />
      <InfoMob variation="govinfo" />
    </HomeWrapper>
  );
};

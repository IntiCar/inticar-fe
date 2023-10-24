import Home from '../components/home';
import Wrapper from '../components/layout/wrapper';

export const metadata = {
  title: 'Home-1 || Voiture - Automotive & Car Dealer NextJS Template',
  description: `Voiture - Automotive & Car Dealer NextJS Template. `,
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}

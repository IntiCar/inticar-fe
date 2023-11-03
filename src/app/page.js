import MainLayout from '@/src/components/core/layout/MainLayout';
import HomePages from '@/src/components/core/pages/HomePages';

export const metadata = {
  title: 'Home || BliMobilId',
  description: 'Generated by create next app',
};

const RootLayout = () => {
  return (
    <MainLayout>
      <HomePages />
    </MainLayout>
  );
};

export default RootLayout;

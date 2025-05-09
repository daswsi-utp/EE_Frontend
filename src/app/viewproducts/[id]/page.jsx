import Header from '@/app/Components/Header';
import ViewproductContent from '../ViewproductContent';

export default async function Page({ params }) {
  const { id } = params;
  console.log(id);
  return (
    <div>
      <Header />
      <ViewproductContent id={id} />
    </div>
  );
}

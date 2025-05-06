import ViewproductContent from '../ViewproductContent';

export default async function Page({ params }) {
  const { id } = params;
  console.log(id);
  return (
    <div>
      <ViewproductContent id={id} />
    </div>
  );
}

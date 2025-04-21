import Header_Admin from './components_admin/Header_Admin';
import Sidebar from './components_admin/Sidebard';

export default async function Page() {
  return (
    <main className="bg-[#f0e9e9] flex">
      <Sidebar />
      <div className="flex-1">
        <Header_Admin name="Dashboard" />
      </div>
    </main>
  );
}

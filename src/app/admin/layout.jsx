import Sidebar from './components_admin/Sidebard';
import Header_Admin from './components_admin/Header_Admin';

export default function AdminLayout({ children }) {
  return (
    <main className="bg-[#f0e9e9] flex min-h-screen">
      <Sidebar />
      <section className="flex-1">
        <Header_Admin />
        <div className="">{children}</div>
      </section>
    </main>
  );
}

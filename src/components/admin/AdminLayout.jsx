import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex">
      
      {/* Sidebar */}
      <aside className="w-fit  md:w-64 bg-slate-200 p-4">
        <ul className="space-y-3">
          <li><Link to="">Dashboard</Link></li>
          <li><Link to="orders">Orders</Link></li>
          <li><Link to="forms">Forms</Link></li>
        </ul>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

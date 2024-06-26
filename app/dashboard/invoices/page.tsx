import { Card } from '@/app/ui/dashboard/cards';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { fetchLatestInvoicesAsc } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import {
  fetchRevenue,
  fetchLatestInvoices,
  fetchCardData,
} from '@/app/lib/data';

export default async function Page() {
  const latestInvoices = await fetchLatestInvoices();
  const latestInvoicesAsc = await fetchLatestInvoicesAsc();
  const cardData = await fetchCardData();
  const totalRevenue = cardData.totalRevenue;
  const totalUsers = cardData.totalUsers;

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Invoices
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* {<Card title="Collected" value={totalPaidInvoices} type="collected" />} */}
        {<Card title="Total Revenue" value={totalRevenue} type="collected" />}
        {<Card title="Total Users" value={totalUsers} type="collected" />}
        {/* {<Card title="Pending" value={totalPendingInvoices} type="pending" />} */}
        {
          // <Card
          //   title="Total Invoices"
          //   value={numberOfInvoices}
          //   type="invoices"
          // />
        }
        {
          // <Card
          //   title="Total Customers"
          //   value={numberOfCustomers}
          //   type="customers"
          // />
        }
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {<LatestInvoices latestInvoices={latestInvoices} />}
        {<LatestInvoices latestInvoices={latestInvoicesAsc} />}
      </div>
    </main>
  );
}

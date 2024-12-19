import GMPDashboard from '@/components/GMPDashboard';
import { fetchGMPData } from './actions';
import { parseDate } from '@/lib/utils';
import { GmpDataItem, StatsData } from '@/types';

async function getStatsData(data: GmpDataItem[]): Promise<StatsData> {
    const now = new Date();
    const activeIPOs = data.filter((item) => {
        const openDate = parseDate(item.open);
        const closeDate = parseDate(item.close);
        return openDate && now >= openDate && closeDate && now <= closeDate;
    }).length;

    const upcomingIPOs = data.filter((item) => {
        const openDate = parseDate(item.open);
        return openDate && openDate > now;
    }).length;

    const avgGMP =
        data
            .filter((item) => item.gmp !== '-')
            .reduce((acc, curr) => acc + (parseFloat(curr.gmp) || 0), 0) /
        data.filter((item) => item.gmp !== '-').length;

    return { activeIPOs, upcomingIPOs, avgGMP };
}

export default async function HomePage() {
    const { data, error } = await fetchGMPData();

    if (error) {
        return (
            <div className="p-4 space-y-4">
                <div className="rounded-lg border p-4">
                    <div className="font-semibold text-primary">An error occurred</div>
                    <div className="text-muted-foreground">{error}</div>
                </div>
            </div>
        );
    }

    const statsData = await getStatsData(data || []);

    return (
        <main className="container mx-auto p-4">
            <GMPDashboard initialData={data || []} initialStats={statsData} />
        </main>
    );
}

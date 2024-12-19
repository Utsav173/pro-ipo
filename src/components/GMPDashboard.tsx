'use client';

import { useState, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import dynamic from 'next/dynamic';
import { refreshData } from '@/app/actions';
import Loader from '@/components/common/Loader';
import { decodeHTML, sortData } from '@/lib/utils';
import { GmpDataItem, SortBy, SortOrder, StatsData } from '@/types';

const MobileTable = dynamic(() => import('@/components/mobile'), {
  loading: () => <Loader isMobile={true} />,
});

const DeskTopTable = dynamic(() => import('@/components/desktop'), {
  loading: () => <Loader isMobile={false} />,
});

interface GMPDashboardProps {
  initialData: GmpDataItem[];
  initialStats: StatsData;
}

export default function GMPDashboard({
  initialData,
  initialStats,
}: GMPDashboardProps) {
  const [gmpData, setGmpData] = useState<GmpDataItem[]>(initialData);
  const [statsData, setStatsData] = useState<StatsData>(initialStats);
  const [refreshing, setRefreshing] = useState(false);
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.OPEN);
  const [sortOrder, setSortOrder] = useState<SortOrder.ASC | SortOrder.DESC>(
    SortOrder.DESC
  );
  const [searchTerm, setSearchTerm] = useState('');

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const filteredAndSortedData = useMemo(() => {
    return sortData(
      gmpData.filter((item) =>
        decodeHTML(item.ipo).toLowerCase().includes(searchTerm.toLowerCase())
      ),
      sortBy,
      sortOrder
    );
  }, [gmpData, searchTerm, sortBy, sortOrder]);

  const handleSort = (column: string) => {
    setSortOrder(
      sortBy === column
        ? sortOrder === SortOrder.ASC
          ? SortOrder.DESC
          : SortOrder.ASC
        : SortOrder.ASC
    );
    setSortBy(column as SortBy);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const { data, error } = await refreshData();
      if (data && !error) {
        setGmpData(data);
      }
    } finally {
      setRefreshing(false);
    }
  };

  if (isMobile) {
    return (
      <MobileTable
        filteredAndSortedData={filteredAndSortedData}
        refreshing={refreshing}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        statsData={statsData}
        fetchData={handleRefresh}
      />
    );
  }

  return (
    <DeskTopTable
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      sortBy={sortBy}
      setSortBy={setSortBy}
      sortOrder={sortOrder}
      setSortOrder={setSortOrder}
      statsData={statsData}
      fetchData={handleRefresh}
      refreshing={refreshing}
      filteredAndSortedData={filteredAndSortedData}
      handleSort={handleSort}
    />
  );
}

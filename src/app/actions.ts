'use server';

import { revalidatePath } from 'next/cache';

export async function fetchGMPData() {
  try {
    const response = await fetch(
      'https://gmp-extractor.khatriutsav63.workers.dev/',
      {
        next: {
          revalidate: 7200, // 120 minutes cache
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const result = await response.json();
    return { data: result.data, error: null };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : 'An unknown error occurred',
    };
  }
}

export async function refreshData() {
  revalidatePath('/');
  return await fetchGMPData();
}

import Papa from 'papaparse';
import { Product } from '@/types'; // Import dari file types di atas

export async function getProducts() {
  const res = await fetch(process.env.NEXT_PUBLIC_SHEET_URL as string, { 
    next: { tags: ['products'] },
    cache: 'no-store' 
  });
  
  const csvData = await res.text();

  return new Promise<Product[]>((resolve, reject) => {
    Papa.parse(csvData, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        // Kita langsung pakai data mentah, nanti dirapikan di UI
        resolve(results.data as Product[]);
      },
      error: (err) => {
        reject(err);
      },
    });
  });
}
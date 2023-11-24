'use client';

import Search from '@/components/form/Search';
import searchItem from '@/utils/supabase/searchByName';
import { item } from '@/utils/supabase/types';
import { useState } from 'react';

export default function SearchItem() {
  const [searchResults, setSearchResults] = useState<item[]>();

  async function handleSearch(term: string) {
    const items = await searchItem(term);

    setSearchResults(items);
  }

  return (
    <>
      <Search onSearch={handleSearch} />{' '}
      <div className='mt-4'>
        {searchResults &&
          searchResults.map((result) => (
            <div
              className='bg-white p-2 border rounded shadow mb-2'
              key={result.id}
            >
              <p>{result.item_name}</p>
              <p>{result.brand}</p>
              <p>{result.condition}</p>
              <img
                src='tobe added'
                alt='picture'
                className='w-32 h-32 object-contain'
              />
            </div>
          ))}
      </div>
    </>
  );
}
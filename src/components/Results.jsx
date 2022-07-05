import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useStateContext } from '../contexts/StateContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== '') {
      getResults(`${location.pathname.split('/')[1]}/q=${searchTerm}`);
    }
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex items-center justify-center bg-gray-100">
          <div className="grid grid-cols-12 max-w-5xl gap-4">
            {results?.map(({ title, content }, index) => (
              <div key={index} className="grid col-span-4 relative">
                <div className="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9">
                  <p className="text-2xl font-bold text-gray-500 group-hover:text-gray-700"> {title}</p>
                  <p className="text-sm font-semibold text-gray-500 group-hover:text-gray-700 mt-2 leading-6">{content}</p>
                  <div className="bg-blue-400 group-hover:bg-blue-600 h-full w-4 absolute top-0 left-0"> </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case '/news':
      return (
        <div className="flex items-center justify-center bg-gray-100">
          <div className="grid grid-cols-12 max-w-5xl gap-4">
            {results?.map(({ title, content }, index) => (
              <div key={index} className="grid col-span-4 relative">
                <div className="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9">
                  <p className="text-2xl font-bold text-gray-500 group-hover:text-gray-700"> {title}</p>
                  <p className="text-sm font-semibold text-gray-500 group-hover:text-gray-700 mt-2 leading-6">{content}</p>
                  <div className="bg-blue-400 group-hover:bg-blue-600 h-full w-4 absolute top-0 left-0"> </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return 'Error...';
  }
};

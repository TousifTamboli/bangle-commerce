import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortOption, setSortOption] = useState("relevant");

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let filtered = products.slice();

    // Apply Search Filter
    if (showSearch && search) {
      filtered = filtered.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    // Filter by Category
    if (category.length > 0) {
      filtered = filtered.filter(item => category.includes(item.category.toUpperCase()));
    }

    // Filter by SubCategory
    if (subCategory.length > 0) {
      filtered = filtered.filter(item => subCategory.includes(item.subCategory));
    }

    // Sort Products
    if (sortOption === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(filtered);
  };

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, sortOption, products, search, showSearch, products]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p 
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition-transform ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt="Dropdown"
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden sm:block'}`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-3' type='checkbox' value='GLASS' onChange={toggleCategory} /> Glass
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type='checkbox' value='METAL' onChange={toggleCategory} /> Metal
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type='checkbox' value='BENTEX' onChange={toggleCategory} /> Bentex
            </label>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden sm:block'}`}>
          <p className='mb-3 text-sm font-medium'>SUBCATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Fancy' onChange={toggleSubCategory} /> Fancy
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Sets' onChange={toggleSubCategory} /> Sets
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Kada' onChange={toggleSubCategory} /> Kada
            </label>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1='ALL' text2='COLLECTIONS' />
          {/* Product Sort */}
          <select
            className='border-2 border-gray-300 text-sm px-2'
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item) => (
              <ProductItem key={item._id} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Collection;

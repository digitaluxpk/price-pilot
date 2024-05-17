"use client";

import { useState, useEffect } from 'react';
import { TextInput, Accordion, Checkbox, NumberInput, Group, Box, Title, RangeSlider, ScrollArea } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Sidebar() {
  const [categories, setCategories] = useState({
    'Smart Speakers': false,
    'Smart Displays': false,
    'Smart Speaker & Display Accessories': false,
  });
  const [priceRange, setPriceRange] = useState([10, 1000]);
  const [brands, setBrands] = useState({
    Amazon: false,
    Apple: false,
    Bose: false,
    'Next x Yale': false,
    Ring: false,
    Phillips: false,
  });

  const [search, setSearch] = useState('');
  const [checkedItems, setCheckedItems] = useState([]);
  console.log("🚀 ~ Sidebar ~ checkedItems:", checkedItems)
  
  const brandss = [
    'Amazon',
    'Apple',
    'Bose',
    'Next x Yale',
    'Ring',
    'Phillips'
  ];

  const handleSearchChange = (event) => {
    setSearch(event.currentTarget.value);
  };

  const handleCheckboxChange = (brand) => {
    setCheckedItems((current) => 
      current.includes(brand)
        ? current.filter((item) => item !== brand)
        : [...current, brand]
    );
  };

  const filteredBrands = brandss.filter((brand) =>
    brand.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    console.log('Categories:', categories);
    console.log('Price Range:', priceRange);
    console.log('Brands:', brands);
  }, [categories, priceRange, brands]);

  const handleCategoryChange = (category) => {
    setCategories({ ...categories, [category]: !categories[category] });
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  

  return (
    <Box w={400} display={{xs:"none",md:"block"}} >
      <Title order={4} sx={{ marginBottom: 20 }}>Filter</Title>
      <TextInput placeholder="Find Filter" rightSection={ <IconSearch  />} />

      <Accordion defaultValue="categories" w={400}>
        <Accordion.Item value="categories">
          <Accordion.Control>Category</Accordion.Control>
          <Accordion.Panel>
            {Object.keys(categories).map((category) => (
              <Checkbox
              my={12}
                key={category}
                label={category}
                checked={categories[category]}
                onChange={() => handleCategoryChange(category)}
              />
            ))}
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="price">
          <Accordion.Control>Price</Accordion.Control>
          <Accordion.Panel>
            <Group grow>
              <NumberInput
                value={priceRange[0]}
                onChange={(value) => handlePriceChange([value, priceRange[1]])}
                placeholder="Min price"
                min={0}
                max={1000}
              />
              <NumberInput
                value={priceRange[1]}
                onChange={(value) => handlePriceChange([priceRange[0], value])}
                placeholder="Max price"
                min={0}
                max={1000}
              />
            </Group>
            <RangeSlider
              min={10}
              max={1000}
              value={priceRange}
              onChange={handlePriceChange}
              marks={[
                { value: 10, label: '$10' },
                { value: 1000, label: '$1000' },
              ]}
            />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="brands">
          <Accordion.Control>Brands</Accordion.Control>
          <Accordion.Panel>
            <TextInput
              placeholder="Find Brand"
              rightSection={
                <IconSearch  size='14px' />
              }
              value={search}
              onChange={handleSearchChange}
              mb="md"
            />
            <ScrollArea style={{ height: 200 }}>
              {filteredBrands.map((brand) => (
                <Checkbox
                color='blue'
               
                  key={brand}
                  label={brand}
                  checked={checkedItems.includes(brand)}
                  onChange={() => handleCheckboxChange(brand)}
                  mb="xs"
                />
              ))}
            </ScrollArea>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
}

export default Sidebar;

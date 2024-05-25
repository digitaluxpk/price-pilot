"use client";

import { useState } from 'react';
import { Modal, TextInput, Accordion, Group, Box, Button, Text, NumberInput, RangeSlider, Checkbox, ScrollArea } from '@mantine/core';
import { IconSearch, IconX } from '@tabler/icons-react';

const brandss = [
    'Amazon',
    'Apple',
    'Bose',
    'Next x Yale',
    'Ring',
    'Phillips'
  ];

const FilterModal = ({ opened, onClose }) => {
    const [categories, setCategories] = useState({
        'Smart Speakers': false,
        'Smart Displays': false,
        'Smart Speaker & Display Accessories': false,
      });
      const [search, setSearch] = useState('');
    const [searchFilter, setSearchFilter] = useState('');
    const [priceRange, setPriceRange] = useState([10, 1000]);
    const [checkedItems, setCheckedItems] = useState([]);
    const handlePriceChange = (value) => {
        setPriceRange(value);
      };
      const handleCategoryChange = (category) => {
        setCategories({ ...categories, [category]: !categories[category] });
      };
    const handleSearchFilterChange = (event) => {
        setSearchFilter(event.currentTarget.value);
    };
    const handleCheckboxChange = (brand) => {
        setCheckedItems((current) => 
          current.includes(brand)
            ? current.filter((item) => item !== brand)
            : [...current, brand]
        );
      };
    const handleSearchChange = (event) => {
        setSearch(event.currentTarget.value);
      };
    const filteredBrands = brandss.filter((brand) =>
        brand.toLowerCase().includes(search.toLowerCase())
      );
    const dummyFilters = [
      {
        name: 'Sort',
        content: 'Sort options content',
      },
      {
        name: 'Categories',
        content: <Box>
            {Object.keys(categories).map((category) => (
              <Checkbox
              fz={14}
              fw={500}
              color='blue'
              my={12}
                key={category}
                label={category}
                checked={categories[category]}
                onChange={() => handleCategoryChange(category)}
              />
            ))}
        </Box>,
      },
      {
        name: 'Price',
        content: <Box>
            <Group grow>
                  <NumberInput
                  fz={14}
                  fw={500}
                    value={priceRange[0]}
                    onChange={(value) => handlePriceChange([value, priceRange[1]])}
                    placeholder="Min price"
                    min={0}
                    max={1000}
                  />
                  <NumberInput
                  fz={14}
                  fw={500}
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
        </Box>,
      },
      {
        name: 'Brand',
        content: <Box>
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
        </Box>,
      },
      {
        name: 'Lorem',
        content: 'Lorem options content',
      },
      {
        name: 'Ipsum',
        content: 'Ipsum options content',
      },
      {
        name: 'Solor',
        content: 'Solor options content',
      },
      {
        name: 'Domet',
        content: 'Domet options content',
      },
    ];
    const filteredFilters = dummyFilters.filter((filter) =>
        filter.name.toLowerCase().includes(searchFilter.toLowerCase())
);

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Sort & Filters"
      withCloseButton={true}
      size="lg"
      overlayBlur={3}
      transition="pop"
    >
      <Box p="md">
        
        <TextInput
          placeholder="Find Filter"
          rightSection={<IconSearch size='14px' />}
          value={searchFilter}
          onChange={handleSearchFilterChange}
          mt="md"
          mb="md"
        />
        <Accordion>
          {filteredFilters.map((filter, index) => (
            <Accordion.Item key={index} value={filter.name}>
              <Accordion.Control fz={14}
              fw={500}>{filter.name}</Accordion.Control>
              <Accordion.Panel>
                <Text fz={14}
              fw={500}>{filter.content}</Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
        <Box mt="lg">
          <Button fw={500} fullWidth color="blue">
            View 550 results
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default FilterModal;

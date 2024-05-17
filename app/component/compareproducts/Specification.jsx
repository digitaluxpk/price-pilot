"use client";

import { Accordion, Box, Checkbox, Flex, Table, Text, rem } from '@mantine/core';
import { IconPrinter } from '@tabler/icons-react';

const elements = [
    { position: "value1", mass: "value2", symbol: 'value3' },
    { position: "value", mass: "value", symbol: 'value' },
  ];

const Specification = () => {
    const rows = elements.map((element) => (
        <Table.Tr key={element.mass}>
          <Table.Td>{element.position}</Table.Td>
          <Table.Td>{element.mass}</Table.Td>
          <Table.Td>{element.symbol}</Table.Td>
        </Table.Tr>
      ));
  return (
   <Box mb={40}
   >
    <Accordion>
    <Accordion.Item value="print">
        <Accordion.Control >
          <Text fz={20} fw={700}>All Specifications</Text>
        </Accordion.Control>
        <Accordion.Panel>
            <Flex gap={8} justify={"space-between"}>
                <Checkbox label={"Highlight differences"} color='blue' />
                <Text fz={12} c={"#1D1D1D"}>A dash (—) means that this information is missing.</Text>
            </Flex>
    <Text my={24} fz={14} fw={700}>Header</Text>
        <Table fz={14} w={700}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Specifications</Table.Th>
          <Table.Th></Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
        </Accordion.Panel>
      </Accordion.Item>
     
    </Accordion>
   </Box>
  );
};

export default Specification;

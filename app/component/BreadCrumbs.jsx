"use client"
import { Breadcrumbs, Anchor, Text, Box } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Breadcrumb() {
    const paths = usePathname()
    const pathNames = ['Home', ...paths.split('/').filter(path => path)];
    const items = pathNames.map((item, index) => {
        const itemName = item.charAt(0).toUpperCase() + item.slice(1);
        const textStyle = index === pathNames.length - 1 ? { color: 'blue',textDecoration:"none" } : {color: '#626262',textDecoration:"none"};

        return (
          <Box component={Link} style={{textDecoration:"none"}}  href={`/${item}`} key={index}>
            <Text fw={500} fz={14} style={textStyle}>{itemName}</Text>
          </Box>
        );
    });
  return (
    <>
      <Breadcrumbs separator={<IconChevronRight size={16} />} separatorMargin="md" mt="xs">
        {items}
      </Breadcrumbs>
    </>
  );
}
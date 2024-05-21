"use client"
import { Breadcrumbs, Anchor, Text, Box } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Breadcrumb() {
    const paths = usePathname()
    const pathNames = ['Home', ...paths.split('/').filter(path => path)];
    const items = pathNames.map((item, index) => {
        const itemName = item.charAt(0).toUpperCase() + item.slice(1);
        const textStyle = index === pathNames.length - 1 ? { color: 'blue' } : {color: '#000'};

        return (
          <Box component={Link} style={{textDecoration:"none"}} href={`/${item}`} key={index}>
            <Text style={textStyle}>{itemName}</Text>
          </Box>
        );
    });
  return (
    <>
      <Breadcrumbs separator="→" separatorMargin="md" mt="xs">
        {items}
      </Breadcrumbs>
    </>
  );
}
"use client";

import { useState } from 'react';
import { Popover, Group, Box, Text, Button } from '@mantine/core';

const ColorOptions = ({ colors }) => {
  const visibleColors = colors.slice(0, 3);
  const hiddenColors = colors.slice(3);

  const [opened, setOpened] = useState(false);

  return (
    <Group mt={12} display={{xs:"flex",md:"none"}} mb={12}  spacing="xs">
      {visibleColors.map((color, index) => (
        <Box
          key={index}
          h={30}
          w={29}
          style={{
            borderRadius: '50%',
            backgroundColor: color,
            border: '1px solid #ddd',
          }}
        ></Box>
      ))}
      {hiddenColors.length > 0 && (
        <Popover
          opened={opened}
          onClose={() => setOpened(false)}
          position="bottom"
          withArrow
        >
          <Popover.Target>
            <Text
              onClick={() => setOpened((o) => !o)}
              sx={{ cursor: 'pointer', color: 'blue' }}
            >
              +{hiddenColors.length}
            </Text>
          </Popover.Target>
          <Popover.Dropdown>
            <Box p="xs">
              <Group spacing="xs">
                {hiddenColors.map((color, index) => (
                  <Box
                    key={index}
                    h={30}
                    w={30}
                    style={{
                      borderRadius: '50%',
                      backgroundColor: color,
                      border: '1px solid #ddd',
                    }}
                  />
                ))}
              </Group>
            </Box>
          </Popover.Dropdown>
        </Popover>
      )}
    </Group>
  );
};

export default ColorOptions;

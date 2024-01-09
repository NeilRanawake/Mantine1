import { TextInput, Box, Text, Button, Group, Combobox, useCombobox, CloseButton, Drawer  } from "@mantine/core";
import { ActionIcon, useComputedColorScheme, Burger  } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useMantineColorScheme } from '@mantine/core';
import cx from 'clsx';
import classes from './Demo.module.css';
import { useMediaQuery } from 'react-responsive';
import React from 'react';
import Link from 'next/link';


const links = [
  { label: 'Home', url: '/' },
  { label: 'School', url: '/school' },
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' },
];

const MenuLinks = () => (
  <>
    {links.map((link) => (
      <Link key={link.label} href={link.url} passHref>
        {/* You can use either Button or Text, depending on your styling preference */}
        <Button component="a" style={{ marginRight: '10px', marginBottom: '10px' }}>
          {link.label}
        </Button>
      </Link>
    ))}
  </>
);


const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
  '🍋 Lemon',
  '🥬 Lettuce',
  '🍄 Mushrooms',
  '🍊 Oranges',
  '🥔 Potatoes',
  '🍅 Tomatoes',
  '🥚 Eggs',
  '🥛 Milk',
  '🍞 Bread',
  '🍗 Chicken',
  '🍔 Hamburger',
  '🧀 Cheese',
  '🥩 Steak',
  '🍟 French Fries',
  '🍕 Pizza',
  '🥦 Cauliflower',
  '🥜 Peanuts',
  '🍦 Ice Cream',
  '🍯 Honey',
  '🥖 Baguette',
  '🍣 Sushi',
  '🥝 Kiwi',
  '🍓 Strawberries',
];

export default function IndexPage() {
 
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });



  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  const isLargeScreen = useMediaQuery({ minWidth: 768 });
  const [drawerOpened, setDrawerOpened] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpened(!drawerOpened);
  };

  const closeDrawer = () => {
    setDrawerOpened(false);
  };
  
  return (

  
    <nav>
      <Text mx={20} mt={10} size='xs'>Generated by SRF</Text>

      <section style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
      {/*<MobileDrawer links={links} />*/}
      
      <Text c='red.8' mx={20} mt={4} size='lg' style={{ fontWeight: 'bold' }}>Buddha Dhamma School International</Text>
    <Combobox 
    style={{ width: '100%', maxWidth: isLargeScreen ? 400 : 300 }} 
    onOptionSubmit={(optionValue) => {
      setValue(optionValue);
      combobox.closeDropdown();
    }}
    store={combobox}
    withinPortal={false}
  >
    <Combobox.Target>
      <TextInput
        label=""
        placeholder="Search for Books"
        value={value}
        onChange={(event) => {
          setValue(event.currentTarget.value);
          combobox.openDropdown();
          combobox.updateSelectedOptionIndex();
        }}
        
        onClick={() => combobox.openDropdown()}
        onFocus={() => combobox.openDropdown()}
        onBlur={() => combobox.closeDropdown()}
        rightSection={
          value !== null ? (
            <CloseButton
              size="sm"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => setValue("")}
              aria-label="Clear value"
            />
          ) : (
            <Combobox.Chevron />
          )
        }
        leftSection={
          <AiOutlineSearch />
        }
      />
    </Combobox.Target>

    <Combobox.Dropdown>
      <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>
        {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
      </Combobox.Options>
    </Combobox.Dropdown>
  </Combobox>

  <div style={{ display: 'flex', justifyContent: 'left', minHeight: '100vh' }}>      
  <ActionIcon mx={20}
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="3.8vh"
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  </div> 
  <Group  mx={10} justify='between' align='flex-end' style={{ height: '100%'}}>
        <Group gap='40' visibleFrom="md">
        <div>
        <MenuLinks/>
        {/* Other content goes here */}
        </div>
        </Group>
        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom='md' aria-label="Toggle navigation" />
        <Drawer opened={drawerOpened} onClose={closeDrawer} title={<span style={{ fontWeight: 'bold', color: 'blue' }}>Menu</span>}>

        <div >
        {/* Drawer content goes here */}
        <Box mt={30} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', gap:'30', minHeight: '100vh' }}>
        <MenuLinks/>
        </Box>
        </div>
        </Drawer>
  </Group>
  </section> 
  </nav>

  
    );
  }


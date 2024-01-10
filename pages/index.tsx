'use client'
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import React from 'react';
import Header from '../public/components/Header'
import { BackgroundImage, Center, Text, Box, Image  } from '@mantine/core';



export default function IndexPage() {
 
  
  return (
<>
    <div>
    <Header />
    </div>
      <h1>Home Page</h1>
      <Box maw='auto' mx="auto">
      <BackgroundImage
        src="/stairs.jpg"
        radius="sm"
        h='50vh'
        
      >
        <Center p="md" style={{ textAlign: 'center'}}>
          <Text c="red">
          Buddha Dhamma School International is not just another Dhamma School. It aims at a specific purpose. Spiritual progress of every individual right up to enlightenment is our aim
          </Text>
        </Center>
      </BackgroundImage>
      
    </Box>

    
  </>   
    );
  }


import React, { useState } from 'react';
import { Drawer, Button, Container, Grid, Col } from '@mantine/core';

interface Link {
  label: string;
  url: string;
}

interface MobileDrawerProps {
  links: Link[];
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ links }) => {
  const [opened, setOpened] = useState(false);

  const toggleDrawer = () => {
    setOpened(!opened);
  };

  return (
    <>
      <Button onClick={toggleDrawer} style={{ margin: 10 }}>
        Open Drawer
      </Button>

      <Drawer opened={opened} onClose={toggleDrawer} padding="xl" hideCloseButton>
        <Container>
          <Grid>
            {links.map((link, index) => (
              <Col span={12} key={index}>
                <a href={link.url}>{link.label}</a>
              </Col>
            ))}
          </Grid>
        </Container>
      </Drawer>
    </>
  );
};

export default MobileDrawer;


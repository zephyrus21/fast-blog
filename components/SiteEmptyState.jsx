import React from 'react';
import { Heading, Flex, Text } from '@chakra-ui/core';
import DashboardShell from './DashboardShell';

import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
  <DashboardShell>
    <Flex
      width='100%'
      backgroundColor='white'
      borderRadius='8px'
      p={16}
      justify='center'
      align='center'
      direction='column'>
      <Heading size='lg' mb={2}>
        You haven’t added any sites.
      </Heading>
      <Text mb={4}>Let’s get started.</Text>
      <AddSiteModal>Add Your First Site</AddSiteModal>
    </Flex>
  </DashboardShell>
);

export default EmptyState;
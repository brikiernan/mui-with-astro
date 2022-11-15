import {
  RuxButton,
  RuxContainer,
  RuxSlider,
  RuxTab,
  RuxTable,
  RuxTableBody,
  RuxTableCell,
  RuxTableHeader,
  RuxTableHeaderCell,
  RuxTableHeaderRow,
  RuxTableRow,
  RuxTabPanel,
  RuxTabPanels,
  RuxTabs,
} from '@astrouxds/react';
import { Box, Typography } from '@mui/material';

export const PanelD = () => {
  return (
    <Box component={RuxContainer} sx={{ '--body-padding': 0 }}>
      <Box bgcolor={({ astro }) => astro.color.background.surface.header}>
        <Typography p={4} variant='h2'>
          Panel D
        </Typography>
        <Box p={({ astro }) => astro.spacing(0, 4, 1.5)}>
          <RuxTabs id='tab-set-id-2' small>
            <RuxTab id='tab-id-4'>Tab 1</RuxTab>
            <RuxTab id='tab-id-5'>Tab 2</RuxTab>
            <RuxTab id='tab-id-6' disabled>
              Tab 3 (disabled)
            </RuxTab>
          </RuxTabs>
        </Box>
        <Box p={4}>
          <RuxSlider></RuxSlider>
        </Box>
      </Box>
      <div>
        <RuxTabPanels aria-labelledby='tab-set-id-2'>
          <RuxTabPanel aria-labelledby='tab-id-4'>
            <RuxTable>
              <RuxTableHeader>
                <RuxTableHeaderRow>
                  <RuxTableHeaderCell>Header text</RuxTableHeaderCell>
                  <RuxTableHeaderCell>Header text</RuxTableHeaderCell>
                  <RuxTableHeaderCell>Header text</RuxTableHeaderCell>
                  <RuxTableHeaderCell>Header text</RuxTableHeaderCell>
                </RuxTableHeaderRow>
              </RuxTableHeader>
              <RuxTableBody>
                <RuxTableRow>
                  <RuxTableCell>Table text</RuxTableCell>
                  <RuxTableCell>Table text</RuxTableCell>
                  <RuxTableCell>Table text</RuxTableCell>
                  <RuxTableCell>Table text</RuxTableCell>
                </RuxTableRow>
                <RuxTableRow>
                  <RuxTableCell>Table text</RuxTableCell>
                  <RuxTableCell>Table text</RuxTableCell>
                  <RuxTableCell>Table text</RuxTableCell>
                  <RuxTableCell>Table text</RuxTableCell>
                </RuxTableRow>
                <RuxTableRow>
                  <RuxTableCell>Table text</RuxTableCell>
                  <RuxTableCell>Table text</RuxTableCell>
                  <RuxTableCell>Table text</RuxTableCell>
                  <RuxTableCell>Table text</RuxTableCell>
                </RuxTableRow>
                <RuxTableRow>
                  <RuxTableCell>Table text</RuxTableCell>
                  <RuxTableCell>Table text</RuxTableCell>
                  <RuxTableCell>Table text</RuxTableCell>
                  <RuxTableCell>Table text</RuxTableCell>
                </RuxTableRow>
              </RuxTableBody>
            </RuxTable>
          </RuxTabPanel>
          <RuxTabPanel aria-labelledby='tab-id-5'>
            <div style={{ padding: '1.25rem' }}>Tab 2 HTML content</div>
          </RuxTabPanel>
          <RuxTabPanel aria-labelledby='tab-id-6'>
            Tab 3 HTML content
          </RuxTabPanel>
        </RuxTabPanels>
      </div>
      <Box p={4}>
        <RuxButton style={{ width: '100%' }}>Primary Button</RuxButton>
      </Box>
    </Box>
  );
};

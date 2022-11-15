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

export const PanelC = () => {
  return (
    <RuxContainer style={{ '--body-padding': 0 }}>
      <div slot='header'>Panel C</div>
      <div slot='tab-bar'>
        <RuxTabs id='tab-set-id-2' small>
          <RuxTab id='tab-id-4'>Tab 1</RuxTab>
          <RuxTab id='tab-id-5'>Tab 2</RuxTab>
          <RuxTab id='tab-id-6' disabled>
            Tab 3 (disabled)
          </RuxTab>
        </RuxTabs>
      </div>
      <div slot='toolbar'>
        <RuxSlider></RuxSlider>
      </div>
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
      <div slot='footer'>
        <RuxButton style={{ width: '100%' }}>Primary Button</RuxButton>
      </div>
    </RuxContainer>
  );
};

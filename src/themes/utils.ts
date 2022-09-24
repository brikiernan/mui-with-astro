import reference from '@astrouxds/design-tokens/dist/json/base.reference.json';

export const spacing = (...factors: number[]): string => {
  // astro spacing formula
  const rems = factors.map(factor => `${0.25 * factor}rem`);
  return rems.slice(0, 4).join().replace(/[,]/g, ' ');
};

export const fontControlBody1 = {
  fontFamily: reference['font-control-body-1-font-family'],
  fontSize: reference['font-control-body-1-font-size'],
  fontWeight: reference['font-control-body-1-font-weight'],
  lineHeight: reference['font-control-body-1-line-height'],
  letterSpacing: reference['font-control-body-1-letter-spacing'],
};

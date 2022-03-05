import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {

/* Primary */

  --color-orange: hsl(0, 91%, 71%);
  --color-cyan: hsl(182, 91%, 71%);
  --color-purple: hsl(284, 89%, 74%);
  --color-white: hsl(0,0%, 100%);


  --color-gray: hsl(229, 52%, 96%);
  --color-very-light-blue: hsl(227, 100%, 92%);
  --color-dark-blue: hsl(235, 35%, 18%);
  --color-very-dark-blue: hsl(234, 39%, 14%);

  --color-gradient-light: hsl(234, 33%, 27%);
  --color-gradient-dark: hsl(235, 49%, 11%);

  --font-size-heading-l: 100px;
  --font-size-heading-m: 28px;
  --font-size-heading-s: 16px;
  --font-size-heading-xs: 13px;
  --font-size-body: 14px;
  --font-size-body-mobile:12px;


  --letter-spacing-heading-l: 15px;
  --letter-spacing-heading-m: 5px;
  --letter-spacing-heading-s: -5px;
  
  --font-weight-heading: 700;

  --line-height-header-xl:120px;
  --line-height-header-l:34px;
  --line-height-header-m:19px;
  --line-height-header-s:16px;
  --line-height-body:18px;
  --line-height-body-mobile:14px;

}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html {
  font-size: 62.5%;
}

body {
  font-size: 1.4rem;
  font-family: 'Outfit', sans-serif;
  min-height:100vh;
  font-weight: 700;
  overflow-x: hidden;
  background: var(--color-dark-blue);
  color: var(---color-white);
}

h1 {
  font-size:var(--font-size-heading-l);
  line-height: var(--line-height-header-xl);
  letter-spacing: var(--letter-spacing-heading-s);
}
h2 {
  font-size:var(--font-size-heading-m);
  line-height: var(--line-height-header-l);
  
}
h3 {
  font-size:var(--font-size-heading-s);
  line-height: var(--line-height-header-m);
  letter-spacing: var(--letter-spacing-heading-l);
  margin-right: -1.5rem;
}
h4 {
  font-size:var(--font-size-heading-xs);
  line-height: var(--line-height-header-s);
  letter-spacing: var(--letter-spacing-heading-m);
}



#root{
  position: relative;
  min-height: inherit;
  width: 100%;

 
  padding: 2.4rem;
  
  
}

#overlays{
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  
}

`;

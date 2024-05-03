import { Breakpoint, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useGetMediaQueryUp = (key: Breakpoint) => {
  const isSizeUp = useMediaQuery((theme: Theme) => theme.breakpoints.up(key), {
    noSsr: true
  });

  return isSizeUp;
};

const useGetMediaQueryDown = (key: Breakpoint) => {
  const isSizeDown = useMediaQuery((theme: Theme) => theme.breakpoints.down(key), { noSsr: true });

  return isSizeDown;
};

const useGetMediaQuerOnly = (key: Breakpoint) => {
  const isSizeDown = useMediaQuery((theme: Theme) => theme.breakpoints.only(key), { noSsr: true });

  return isSizeDown;
};

export { useGetMediaQueryUp, useGetMediaQueryDown, useGetMediaQuerOnly };

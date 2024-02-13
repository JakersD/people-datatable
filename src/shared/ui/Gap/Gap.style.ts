import styled from '@emotion/styled';

interface ISGapProps {
  size: number;
}

export const SGap = styled('div')(({ size }: ISGapProps) => ({
  padding: `${size}px`,
}));

import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/slices/exampleSlice';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 12,
  backgroundColor: theme.palette.grey[100],
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
}));

export default function ExampleComponent() {
  const count = useSelector((state) => state.example.count);
  const dispatch = useDispatch();

  return (
    <StyledBox>
      <Typography variant="h6">Counter: {count}</Typography>
      <Button onClick={() => dispatch(increment())} sx={{ m: 1 }} variant="contained">+</Button>
      <Button onClick={() => dispatch(decrement())} sx={{ m: 1 }} variant="outlined">-</Button>
    </StyledBox>
  );
}
import { AppDispatch } from '@/_data/store';
import { useDispatch } from 'react-redux';

export const useAppDispatch = useDispatch<AppDispatch>;

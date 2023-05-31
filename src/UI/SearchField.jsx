import { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import debounce from 'lodash.debounce';

import { findUser } from 'src/redux/thunk/findUser';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: alpha(theme.palette.text.primary, 0.15),
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:hover': {
    backgroundColor: alpha(theme.palette.text.primary, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  // [theme.breakpoints.up('sm')]: {},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '90%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('sm')]: {},
  },
}));

export const SearchField = () => {
  const dispatch = useDispatch();

  // set link on search input
  const inputRef = useRef();

  // set search text
  const [searchText, setSearchText] = useState('');

  // clear search input
  const handleClear = () => {
    setSearchText('');
    dispatch(findUser({ search: '' }));
    inputRef.current.focus();
  };

  // set debounce on send request search string
  const sendSearchString = useCallback(
    debounce((searchString) => {
      dispatch(findUser({ search: searchString }));
    }, 500),
    []
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch(findUser({ search: searchText }));
    }
  };

  // set search string
  const handleChange = async (e) => {
    setSearchText(e.target.value);
    sendSearchString(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          inputRef={inputRef}
          value={searchText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search Direct Messages"
          inputProps={{ 'aria-label': 'search' }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={handleClear}
        >
          <CancelRoundedIcon
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              margin: '0 10px',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          />
        </Box>
      </Search>
    </Box>
  );
};

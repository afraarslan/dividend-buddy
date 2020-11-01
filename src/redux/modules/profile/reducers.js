import * as $PA from './actions';

const initialState = {
  user: {
    name: 'Afra',
  },
  activeTheme: 'dark',
  theme: {
    primary: '#3fc295',
    text: '#318d71',
    dark: {
      secondary: '#1c1c1e',
      textSecondary: 'white',
      background: 'black',
    },
    light: {
      secondary: '#e3e3e1',
      textSecondary: 'black',
      background: 'white',
    },
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case $PA.LOAD_USERS_LOADING: {
      return {
        ...state,
      };
    }
    case $PA.SET_ACTIVE_THEME: {
      return {
        ...state,
        activeTheme: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

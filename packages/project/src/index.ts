import {ITheme} from "fluent";

const instance: ITheme = {
  palette: {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff'
  }
};

function themeUsingFunction(theme: ITheme) {
  console.log('blue color:', theme.palette.blue);
}

themeUsingFunction(instance);

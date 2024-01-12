const lightTheme = {
  background: '#ddd',
  buttonBackground: '#000',
  buttonBackgroundHover: '#fff',
  buttonColor: '#fff',
  buttonColorHover: '#000',
}

const darkTheme = {
  background: '#111',
  buttonBackground: '#fff',
  buttonBackgroundHover: '#000',
  buttonColor: '#000',
  buttonColorHover: '#fff',
}

let theme = lightTheme;

const changeTheme = () => {
  theme = (theme == darkTheme) ? lightTheme : darkTheme;

  document.body.style.backgroundColor = theme.background;
  changeThemeButton.style.background = theme.buttonBackground;
  changeThemeButton.style.color = theme.buttonColor;
}

const changeThemeButton = document.getElementById('changeThemeButton');

document.body.style.backgroundColor = theme.background;
changeThemeButton.style.background = theme.buttonBackground;
changeThemeButton.style.color = theme.buttonColor;
changeThemeButton.style.outline = '2px solid transparent'

changeThemeButton.style.fontFamily = 'Inter';
changeThemeButton.style.fontWeight = '600';
changeThemeButton.style.border = 'none';
changeThemeButton.style.fontSize = '1.5rem';
changeThemeButton.style.borderRadius = '5px';
changeThemeButton.style.padding = '5px 10px';

document.body.style.transition = '0.2s';
changeThemeButton.style.transition = '0.2s';

changeThemeButton.onclick = changeTheme;

changeThemeButton.onmouseover = () => {
  changeThemeButton.style.background = theme.buttonBackgroundHover;
  changeThemeButton.style.color = theme.buttonColorHover;
  changeThemeButton.style.outline = `2px solid ${theme.buttonBackground}`;
}

changeThemeButton.onmouseleave = () => {
  changeThemeButton.style.background = theme.buttonBackground;
  changeThemeButton.style.color = theme.buttonColor;
  changeThemeButton.style.outline = '2px solid transparent'
}

const myText = document.getElementById('myText');

myText.onchange = changeTheme;
myText.style.marginLeft = '10px';
myText.style.fontFamily = 'Inter';
myText.style.width = '300px';

const darkHover = document.getElementById('darkHover');

darkHover.style.width = '100px';
darkHover.style.height = '100px';
darkHover.style.marginTop = '10px';
darkHover.style.borderRadius = '10px';
darkHover.style.fontFamily = 'Inter';
darkHover.style.padding = '7px';
darkHover.style.backgroundColor = '#f0f';
darkHover.style.transition = '0.3s';

darkHover.onmouseover = () => {
  changeTheme();
  darkHover.style.scale = '1.05';
};

darkHover.onmouseleave = () => {
  changeTheme();
  darkHover.style.scale = '1';
};

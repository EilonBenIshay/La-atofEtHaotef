import { AppBar, IconButton, ListItemText, Toolbar, styled } from '@mui/material';


export const NavTitle = styled('div')({
    fontSize: '3rem',
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#ECF39E',
})

export const ClassCard = styled('div')({
    flexGrow: 1
})

export const ThemeButton = styled(IconButton)({

})


export const NavToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const LinkText = styled(ListItemText)({
    color: 'black'
})

export const NavBar = styled(AppBar)({
    marginBottom: '2%',
    backgroundColor: '#90A955',
    justifyContent: 'center',
});
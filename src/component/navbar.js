
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function NavBar(){
return(
    <>
      <AppBar>
        <Toolbar >
              <Typography variant="h4" color="inherit">Trendy</Typography>
              <ShoppingCartIcon className='icon' />
        </Toolbar>
      </AppBar>
    </>
)
}

export default NavBar;
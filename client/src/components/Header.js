import {AppBar,Toolbar,Typography, Button, Box} from '@mui/material'; 

const Header=({handleSetHomeScreen}) => {
     
      return (     
        <Box m={3} pt={4}>               
              <AppBar component="nav" >
                <Toolbar>                
                  <Typography
                    variant="h5"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                  >
                    Let's Donate
                  </Typography>
                 
                      <Button onClick={() => handleSetHomeScreen()} key='home' sx={{ color: '#fff' }}>
                        Home
                      </Button>
                 
                  
                      <Button key='about us' sx={{ color: '#fff' }}>
                      About us
                      </Button>
                
                  
                      <Button key='add your company' sx={{ color: '#fff' }}>
                      Add your company
                      </Button>
                 
                </Toolbar>
              </AppBar>
              </Box>               
            
          );
        
      }
      
        
     

export default Header
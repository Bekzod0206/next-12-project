import { navItems } from "@/config/constants"
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";


interface Props {
  window?: () => Window;
}


function Navbar({window}: Props) {
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: '15px'}}>
        <Box sx={{display: 'flex', alignItems: 'center', my: 2, gap: '5px'}}>
          <Image src={'/vercel.svg'} alt="home-icon" height={50} width={50}  />
          <Typography variant="h4">
            Beka
          </Typography>
        </Box>
        <CloseIcon onClick={handleDrawerToggle} sx={{cursor: 'pointer'}} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton onClick={() => router.push(item.route)} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box height={'9vh'} sx={{display: 'flex'}}>
      <AppBar component="nav" sx={{backgroundColor: '#141414', height: '9vh'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              my: 2,
              gap: '10px',
              cursor: 'pointer'
            }}
            onClick={() => router.push('/')}
          >
            <Image src={'/vercel.svg'} alt="home-icon" height={50} width={50}  />
            <Typography variant="h4">
              Beka
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button onClick={() => router.push(item.route)} key={item.route} sx={{ color: '#fff' }}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

    </Box>
  )
}

export default Navbar
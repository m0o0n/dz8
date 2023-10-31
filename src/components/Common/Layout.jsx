import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, Outlet } from "react-router-dom";
import { logoutThunk } from "store/auth/actions";
import Avatar from '@mui/material/Avatar';

export const Layout = () => {
    const auth = useSelector(state => state.auth)
    const { pathname } = useLocation()
    return (
        <>
            <header>
                <AppBar position="static" component="nav">
                    <Toolbar>
                        <Stack
                            direction='row'
                            justifyContent='flex-end'
                            spacing={2}
                            width='100%'
                        >
                            <NavLink
                                to="/"
                            >
                                {
                                    ({ isActive }) =>
                                        isActive
                                            ? <Button sx={{ color: '#FF6550' }}>Home</Button>
                                            : <Button sx={{ color: '#fff' }}>Home</Button>
                                }
                            </NavLink>
                            <NavLink
                                to="/users"
                            >
                                {
                                    ({ isActive }) =>
                                        isActive
                                            ? <Button sx={{ color: '#FF6550' }}>Users</Button>
                                            : <Button sx={{ color: '#fff' }}>Users</Button>
                                }
                            </NavLink>
                            <UserMenu auth={auth} pathname={pathname} />
                        </Stack>
                    </Toolbar>
                </AppBar>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}


const UserMenu = ({ auth, pathname }) => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutThunk())
    }
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            {
                auth.isAuth
                    ? <>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 32, height: 32 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(159, 158, 158, 0.8)" height="1em" viewBox="0 0 448 512">
                                        <path
                                            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                                        />
                                    </svg>
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >

                            <MenuItem onClick={handleClose}>
                                <Avatar /> {auth.email}
                            </MenuItem>

                            <MenuItem
                                onClick={handleClose}
                                sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}
                            >
                                <NavLink to={pathname}>
                                    <Button onClick={handleLogout} variant="contained" type="button">
                                        Logout
                                    </Button>
                                </NavLink>
                            </MenuItem>
                        </Menu>
                    </>
                    : <NavLink>
                        {
                            ({ isActive }) =>
                                isActive
                                    ? <Button sx={{ color: '#FF6550' }}>Login</Button>
                                    : <Button sx={{ color: '#fff' }}>Login</Button>
                        }
                    </NavLink>
            }
        </>
    )
}
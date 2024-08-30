"use client";
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { Button } from "@/components/ui/button"
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

export function HamburgerMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <div className='block md:hidden'>
            <IconButton onClick={handleClick}>
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >

                <Link href="/" passHref>
                    <MenuItem>Home</MenuItem>
                </Link>
                <Link href="/meetsPage" passHref>
                    <MenuItem>2024 Schedule</MenuItem>
                </Link>
                <Link href="/scsPage" passHref>
                    <MenuItem>Space Coast Invitational</MenuItem>
                </Link>
                <Link href="/contactPage" passHref>
                    <MenuItem>Contact</MenuItem>
                </Link>
                <Link href="/sponsorsPage" passHref>
                    <MenuItem>Sponsors</MenuItem>
                </Link>
                <Link href="/pricingPage" passHref>
                    <MenuItem>Register</MenuItem>
                </Link>
            </Menu>
        </div>
    );
}

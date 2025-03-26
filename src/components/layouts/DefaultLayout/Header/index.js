import { Box, Modal } from '@mui/material';
import React, { useState } from 'react';
import SideBar from '../SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function Header() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="h-24 bg-[#0f2289] w-full flex justify-center items-center text-[30px] font-bold text-white">
            <div
                onClick={handleOpen}
                className="sm:hidden cursor-pointer border-2 mx-4 p-2 px-3 border-white rounded-md hover:border-black"
            >
                <FontAwesomeIcon icon={faBars} />
            </div>
            G-Scores
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="transition-all"
            >
                <Box className="h-screen w-[35vh] bg-white border-none transition-all">
                    <SideBar />
                </Box>
            </Modal>
        </div>
    );
}

export default Header;

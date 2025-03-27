import { TextField } from '@mui/material';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function SearchScore() {
    const [registrationNumber, setRegistrationNumber] = useState('');
    return (
        <div>
            <div className="frame">
                <div className="text-[24px] mb-3 font-semibold">
                    User Registration
                </div>
                <div className="sm:flex justify-start items-end">
                    <div className="sm:w-[40%] sm:me-2 mb-2 sm:mb-0">
                        <div className="my-2">Registration number</div>
                        <TextField
                            label="Enter registration number"
                            fullWidth
                            onChange={setRegistrationNumber}
                            value={registrationNumber}
                        />
                    </div>
                    <button className="h-[56px] sm:mx-3 bg-black hover:bg-slate-800 text-white p-4 px-8 rounded">
                        Submit
                    </button>
                </div>
            </div>
            <div className="frame">
                <div className="text-[24px] font-semibold">Detailed Scores</div>
                <div className="my-3">Detailed view of search scores here!</div>
                <div>
                    <div className="my-3 flex justify-center items-center">
                        View detailed search scores of student code: 10001
                    </div>
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Subject</TableCell>
                                    <TableCell align="center">Math</TableCell>
                                    <TableCell align="center">
                                        Literature
                                    </TableCell>
                                    <TableCell align="center">
                                        Foreign language
                                    </TableCell>
                                    <TableCell align="center">
                                        Physics
                                    </TableCell>
                                    <TableCell align="center">
                                        Chemistry
                                    </TableCell>
                                    <TableCell align="center">
                                        Biology
                                    </TableCell>
                                    <TableCell align="center">
                                        Foreign language code
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        Score
                                    </TableCell>
                                    <TableCell align="center">10</TableCell>
                                    <TableCell align="center">10</TableCell>
                                    <TableCell align="center">10</TableCell>
                                    <TableCell align="center">10</TableCell>
                                    <TableCell align="center">10</TableCell>
                                    <TableCell align="center">10</TableCell>
                                    <TableCell align="center">N1</TableCell>
                                </TableRow>
                                {/* {rows.map((row) => (
            
          ))} */}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className="my-3 flex justify-center items-center">
                    Student code 100001 information not found
                </div>
            </div>
        </div>
    );
}

export default SearchScore;

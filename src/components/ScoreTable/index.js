import React, { memo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
function ScoreTable({ obj, notFound }) {
    return (
        <div>
            {obj === null ? (
                <div className="my-3">Detailed view of search scores here!</div>
            ) : (
                <div>
                    {obj !== false ? (
                        <div>
                            <div className="my-3 flex justify-center items-center">
                                View detailed search scores of student code:{' '}
                                {obj?.sbd}
                            </div>
                            <TableContainer>
                                <Table sx={{ minWidth: 650 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Subject</TableCell>
                                            {obj.toan ? (
                                                <TableCell align="center">
                                                    Math
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                            {obj.ngu_van ? (
                                                <TableCell align="center">
                                                    Literature
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                            {obj.ngoai_ngu ? (
                                                <TableCell align="center">
                                                    Foreign language
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                            {obj.vat_li ? (
                                                <TableCell align="center">
                                                    Physics
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                            {obj.hoa_hoc ? (
                                                <TableCell align="center">
                                                    Chemistry
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                            {obj.sinh_hoc ? (
                                                <TableCell align="center">
                                                    Biology
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                            {obj.lich_su ? (
                                                <TableCell align="center">
                                                    History
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                            {obj.dia_li ? (
                                                <TableCell align="center">
                                                    Geography
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                            {obj.gdcd ? (
                                                <TableCell align="center">
                                                    Civics
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                            {obj.ma_ngoai_ngu ? (
                                                <TableCell align="center">
                                                    Foreign language code
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow
                                            sx={{
                                                '&:last-child td, &:last-child th':
                                                    {
                                                        border: 0,
                                                    },
                                            }}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                Score
                                            </TableCell>
                                            {obj.toan ? (
                                                <TableCell align="center">
                                                    {obj?.toan}
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                            {obj.ngu_van ? (
                                                <TableCell align="center">
                                                    {obj?.ngu_van}
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                            {obj.ngoai_ngu ? (
                                                <TableCell align="center">
                                                    {obj?.ngoai_ngu}
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                            {obj.vat_li ? (
                                                <TableCell align="center">
                                                    {obj?.vat_li}
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                            {obj.hoa_hoc ? (
                                                <TableCell align="center">
                                                    {obj?.hoa_hoc}
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                            {obj.sinh_hoc ? (
                                                <TableCell align="center">
                                                    {obj?.sinh_hoc}
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                            {obj.lich_su ? (
                                                <TableCell align="center">
                                                    {obj?.lich_su}
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                            {obj.dia_li ? (
                                                <TableCell align="center">
                                                    {obj?.dia_li}
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                            {obj.gdcd ? (
                                                <TableCell align="center">
                                                    {obj?.gdcd}
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                            {obj.ma_ngoai_ngu ? (
                                                <TableCell align="center">
                                                    {obj?.ma_ngoai_ngu}
                                                </TableCell>
                                            ) : (
                                                ''
                                            )}
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    ) : (
                        <div className="my-3 flex justify-center items-center">
                            {notFound}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default memo(ScoreTable);

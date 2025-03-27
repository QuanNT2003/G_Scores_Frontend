import React, { useState, useEffect, useContext } from 'react';
import Input from '~/components/Input';
import { CircularProgress } from '@mui/material';
import ChartComp from '~/components/ChatComp';
import * as ScoreServices from '~/apiServices/scoreServices';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
const thousandBreakOptions = {
    scales: {
        y: {
            ticks: {
                callback(value) {
                    return Number(value).toLocaleString('en');
                },
            },
        },
    },
};

function Report() {
    const [loading, setLoading] = useState(false);
    const [chartType, setChartType] = useState({
        label: 'Biểu đồ cột',
        value: 'bar',
    });
    const [subject, setSubject] = useState({ label: 'Math', value: 'toan' });

    const [scoreLabels, setScoreLabels] = useState([]);
    const [scoresNumber, setScoreNumber] = useState([]);

    const scoreDatasets = [
        {
            label: 'Number of points',
            data: scoresNumber,
            // backgroundColor: "#3a57e8",
            // borderColor: '#3a57e8',
        },
    ];
    const getReport = async () => {
        setLoading(true);
        const fetchApi = async () => {
            const result = await ScoreServices.getReportScore(
                subject.value,
            ).catch((error) => {
                console.log(error);
            });

            if (result) {
                setLoading(false);
                setScoreLabels(result.data.labels);
                setScoreNumber(result.data.values);
            }
        };

        fetchApi();
    };

    const [top10, setTop10] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const resultTop10 = await ScoreServices.getTopGroupA().catch(
                (error) => {
                    if (error?.response?.status === 404) {
                    } else {
                    }
                },
            );
            if (resultTop10) {
                console.log(resultTop10);

                setTop10(resultTop10.data);
            }
        };

        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <div className="frame p-5">
                <div className="font-semibold">Score Report</div>
                <div className=" md:flex items-center p-3">
                    <Input
                        className="mt-3 mb-3 w-[150px]"
                        title={'Subject'}
                        items={[
                            { label: 'Math', value: 'toan' },
                            { label: 'Literature', value: 'ngu_van' },
                            { label: 'Foreign language', value: 'ngoai_ngu' },
                            { label: 'Physics', value: 'vat_li' },
                            { label: 'Chemistry', value: 'hoa_hoc' },
                            { label: 'Biology', value: 'lich_su' },
                            { label: 'History', value: 'dia_li' },
                            { label: 'Geography', value: 'gdcd' },
                        ]}
                        value={subject.label}
                        handleClickAction={(item) => {
                            setSubject(item);
                        }}
                    />
                    <Input
                        className="md:ms-4 mt-3 mb-3 w-[150px]"
                        title={'Loại biểu đồ'}
                        items={[
                            { label: 'Biểu đồ cột', value: 'bar' },
                            { label: 'Biểu đồ đường', value: 'line' },
                        ]}
                        value={chartType.label}
                        handleClickAction={(item) => setChartType(item)}
                        readOnly
                    />
                    <div className="md:ms-6 mt-4">
                        <button
                            className="bg-blue-500 py-2 px-5 rounded-lg min-w-[130px] text-white hover:bg-[#3a57e8] cursor-pointer"
                            onClick={() => getReport()}
                        >
                            Xem báo cáo
                        </button>
                    </div>
                    {loading && (
                        <CircularProgress
                            className="max-w-[200px] ml-5"
                            color="primary"
                        />
                    )}
                </div>
                <div className="h-[700px]">
                    <ChartComp
                        type={chartType.value}
                        labels={scoreLabels}
                        datasets={scoreDatasets}
                        options={thousandBreakOptions}
                    />
                </div>
            </div>
            <div className="frame p-5">
                <div className="font-semibold">Top 10 Group A</div>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">
                                    Registration Number
                                </TableCell>
                                <TableCell align="center">
                                    Total score
                                </TableCell>
                                <TableCell align="center">Math</TableCell>
                                <TableCell align="center">Physics</TableCell>
                                <TableCell align="center">Chemistry</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {top10.map((item) => (
                                <TableRow
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell align="center">
                                        {item?.sbd}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item?.tong_diem}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item?.toan}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item?.vat_li}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item?.hoa_hoc}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default Report;

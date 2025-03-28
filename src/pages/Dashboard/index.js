import { library } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useState } from 'react';
import * as ScoreServices from '~/apiServices/scoreServices';

function Dashboard() {
    const [math, setMath] = useState();
    const [literature, setLiterature] = useState();
    const [foreignLanguage, setForeignLanguage] = useState();
    const [naturalScienceExam, setNaturalScienceExam] = useState();
    const [socialScienceExam, setSocialScienceExam] = useState();
    useEffect(() => {
        const fetch = async () => {
            const resultMath = await ScoreServices.getGreaterThan5(
                'toan',
            ).catch((error) => {
                if (error?.response?.status === 404) {
                } else {
                }
            });
            if (resultMath) {
                setMath(resultMath.data);
            }

            const resultLiterature = await ScoreServices.getGreaterThan5(
                'ngu_van',
            ).catch((error) => {
                if (error?.response?.status === 404) {
                } else {
                }
            });
            if (resultLiterature) {
                setLiterature(resultLiterature.data);
            }

            const resultForeignLanguage = await ScoreServices.getGreaterThan5(
                'ngoai_ngu',
            ).catch((error) => {
                if (error?.response?.status === 404) {
                } else {
                }
            });
            if (resultForeignLanguage) {
                setForeignLanguage(resultForeignLanguage.data);
            }

            const resultNumberExam =
                await ScoreServices.getNumberExamType().catch((error) => {
                    if (error?.response?.status === 404) {
                    } else {
                    }
                });
            if (resultNumberExam) {
                setNaturalScienceExam(
                    resultNumberExam.data?.naturalScienceExam,
                );
                setSocialScienceExam(resultNumberExam.data?.socialScienceExam);
            }
        };

        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="">
            <div className="frame p-5">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="m-3">
                        <div className="my-2 font-semibold">
                            Number of math tests greater than 5
                        </div>
                        <div className="flex justify-center items-center my-3">
                            <div className="bg-lime-400 rounded-full w-[150px] h-[150px] flex justify-center items-center">
                                {(
                                    (math?.number / math?.numberTest) *
                                    100
                                ).toFixed(2)}{' '}
                                %
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            {math?.number} / {math?.numberTest} test
                        </div>
                    </div>
                    <div className="m-3">
                        <div className="my-2 font-semibold">
                            Number of literature tests greater than 5
                        </div>
                        <div className="flex justify-center items-center my-3">
                            <div className="bg-teal-400 rounded-full w-[150px] h-[150px] flex justify-center items-center">
                                {(
                                    (literature?.number /
                                        literature?.numberTest) *
                                    100
                                ).toFixed(2)}{' '}
                                %
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            {literature?.number} / {literature?.numberTest} test
                        </div>
                    </div>
                    <div className="m-3">
                        <div className="my-2 font-semibold">
                            Number of Foreign Language tests greater than 5
                        </div>
                        <div className="flex justify-center items-center my-3">
                            <div className="bg-cyan-400 rounded-full w-[150px] h-[150px] flex justify-center items-center">
                                {(
                                    (foreignLanguage?.number /
                                        foreignLanguage?.numberTest) *
                                    100
                                ).toFixed(2)}{' '}
                                %
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            {foreignLanguage?.number} /{' '}
                            {foreignLanguage?.numberTest} test
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-around">
                    <div className="m-3">
                        <div className="my-2 font-semibold">
                            Number of Natural Science
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="bg-blue-400 rounded-full w-[150px] h-[150px] flex justify-center items-center">
                                {naturalScienceExam} test
                            </div>
                        </div>
                    </div>
                    <div className="m-3">
                        <div className="my-2 font-semibold">
                            Number of Ssocial Science tests{' '}
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="bg-purple-400 rounded-full w-[150px] h-[150px] flex justify-center items-center">
                                {socialScienceExam} test
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

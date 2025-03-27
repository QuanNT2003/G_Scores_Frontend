import { useState } from 'react';

import Input from '~/components/Input';
import * as ScoreServices from '~/apiServices/scoreServices';
import ScoreTable from '~/components/ScoreTable';
function SearchScore() {
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [errorRegistrationNumber, setErrorRegistrationNumber] = useState('');
    const onChangeRegistrationNumber = (value) => {
        setRegistrationNumber(value);
        setErrorRegistrationNumber('');
    };
    const [obj, setObj] = useState(null);
    const [notFound, setNotFound] = useState('');
    const submit = () => {
        if (registrationNumber === '' || registrationNumber === ' ') {
            setErrorRegistrationNumber('You need to enter student code');
        } else {
            setErrorRegistrationNumber('');
            const fetchApi = async () => {
                const result = await ScoreServices.getScore(
                    registrationNumber,
                ).catch((error) => {
                    console.log(error);
                });

                if (result) {
                    console.log(result.data);
                    if (result.data === false)
                        setNotFound(
                            `Student code ${registrationNumber} information not found`,
                        );
                    setObj(result.data);
                }
            };

            fetchApi();
        }
    };
    return (
        <div>
            <div className="frame">
                <div className="text-[24px] mb-3 font-semibold">
                    User Registration
                </div>
                <div className="sm:flex justify-start items-end">
                    <div className="sm:w-[40%] sm:me-2 mb-2 sm:mb-0">
                        <Input
                            placeholder="Enter registration number"
                            title={'Registration number'}
                            onChange={onChangeRegistrationNumber}
                            value={registrationNumber}
                            error={errorRegistrationNumber}
                        />
                    </div>
                    <button
                        className="h-[40px] sm:mx-3 bg-black hover:bg-slate-800 text-white px-8 rounded"
                        onClick={() => submit()}
                    >
                        Submit
                    </button>
                </div>
            </div>
            <div className="frame">
                <div className="text-[24px] font-semibold">Detailed Scores</div>
                <ScoreTable obj={obj} notFound={notFound} />
            </div>
        </div>
    );
}

export default SearchScore;

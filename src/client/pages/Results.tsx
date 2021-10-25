import React, { useState, useEffect, FC } from 'react';
import { useParams, useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/* COMPONENT IMPORTS */
import SubHeader from '../components/SubHeader';

interface ResultsProps
{
    NStudiesReturned: number;
}

const Results: React.FC<ResultsProps> = (props: any) =>
{

    const history = useHistory();
    const { text }: { text: string; } = useParams();

    const [numbers, setNumbers] = useState([]);
    const [trials, setTrials] = useState([]);
    const [id, setID] = useState('');

    useEffect(() =>
    {
        getTrials();

        async function getTrials ()
        {
            const response = await fetch(`https://clinicaltrials.gov/api/query/full_studies?expr=${text}+SEARCH%5BLocation%5D%28AREA%5BLocationCity%5D+Birmingham+AND+AREA%5BLocationState%5D+Alabama%29&min_rnk=1&max_rnk=10&fmt=json`);
            const trials = await response.json();

            setNumbers(trials.FullStudiesResponse);
            setTrials(trials.FullStudiesResponse.FullStudies)
        }
    }, []);

    console.log(trials);

    return (
        <>
            <SubHeader />
            <div className="container results">
                <div className="callout">
                    <h1>Search Results</h1>
                </div>
            </div>

            <section>
                <div className="container results space">


                    <div className="seven columns offset-by-one-half">
                        <div className="info">

                            Showing {numbers.NStudiesReturned} of {numbers.NStudiesFound} Search Results for "{text}"
                        </div>
                        <div className="panels">
                            {trials.map((trial, index) => (
                                <>
                                    <Link to={`/trials/results/${text}/${trial.Study.ProtocolSection.IdentificationModule.NCTId}`}>
                                        <div className="panel" key={trial.Rank}>
                                            <div className="container">
                                                <div className="seven columns">
                                                    <h1>{trial.Study.ProtocolSection.IdentificationModule.BriefTitle}</h1>
                                                    <p>{trial.Study.ProtocolSection.DescriptionModule.BriefSummary}</p>
                                                    <p className="type">{trial.Study.ProtocolSection.IdentificationModule.NCTId} | {trial.Study.ProtocolSection.DesignModule.StudyType}</p>
                                                </div>
                                                <div className="three columns">
                                                    <ul>
                                                        <li>
                                                            <FontAwesomeIcon icon="users" /> {`Enrolling ` + trial.Study.ProtocolSection.EligibilityModule.Gender.toLowerCase() + ` patients`}
                                                        </li>
                                                        <li>
                                                            <FontAwesomeIcon icon="hospital" /> {`Enrolling patients above ` + trial.Study.ProtocolSection.EligibilityModule.MinimumAge + ` of age.`}
                                                        </li>
                                                        <li>
                                                            <FontAwesomeIcon icon="vial" /> {`Sampling method: ` + trial.Study.ProtocolSection.EligibilityModule.SamplingMethod}
                                                        </li>
                                                        <li>
                                                            <FontAwesomeIcon icon="location-arrow" /> {trial.Study.ProtocolSection.IdentificationModule.Organization.OrgFullName}
                                                        </li>
                                                        {/* <li>
                                                        <FontAwesomeIcon icon="map-marker-alt" /> {trial.Study.ProtocolSection.ContactsLocationsModule.LocationList.Location.map((m: { LocationZip: number; LocationCity: string; LocationState: string }, index: number) => (
                                                            <>
                                                                {m.LocationCity}, {m.LocationState} - ({m.LocationZip})
                                                            </>
                                                        ))}
                                                    </li> */}
                                                    </ul>
                                                    <Link className="button" to={`/trials/results/${text}/${trial.Study.ProtocolSection.IdentificationModule.NCTId}`}>
                                                        Learn More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </>
                            ))}
                        </div>
                        <div className="return">
                            <Link className="button" to="/trials">
                                Back To Clinical Trial Search
                            </Link>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )

}

export default Results;




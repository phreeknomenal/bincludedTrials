import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/* COMPONENT IMPORTS */
import SubHeader from '../components/SubHeader';

const FullStudy: React.FC = () =>
{

    const { text, id }: { text: string; id: string } = useParams();

    const [studies, setStudies] = useState([]);

    useEffect(() =>
    {
        fetch(`https://clinicaltrials.gov/api/query/full_studies?expr=${text}+AND+%28AREA%5BNCTId%5D+${id}%29&min_rnk=1&max_rnk=&fmt=json`)
            .then(res => res.json())
            .then(fullStudy => setStudies(fullStudy.FullStudiesResponse.FullStudies));
    }, []);

    const images = [
        "url(/images/trailtest1.jpg)",
        "url(/images/trailtest2.jpg)",
        "url(/images/trailtest3.jpeg)",
        "url(/images/trailtest23.jpeg)",
        "url(/images/trailtest5.jpeg)",
        "url(/images/trailtest44.jpg)",
        "url(/images/trailtest6.png)"
    ];

    console.log(studies);

    return (
        <>
            <SubHeader />
            <div className="container study">
                {studies.map((study, index) => (
                    <>
                        <div className="callout" style={{ backgroundImage: `${images[5]}` }}>
                            <div className="overlay"></div>
                            <div className="seven columns offset-by-one-half heading">
                                <h1>{study.Study.ProtocolSection.IdentificationModule.BriefTitle}</h1>
                                <p className="type">{study.Study.ProtocolSection.IdentificationModule.NCTId} | {study.Study.ProtocolSection.DesignModule.StudyType}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>

            <section>
                <div className="container study">
                    <div className="seven columns offset-by-one-half">
                        <div className="head">
                            <div className="info">
                                <Link to={`/trials/results/${text}`}>
                                    <FontAwesomeIcon icon="arrow-left" /> Back To Search Results for "{text.replace(/,/g, ", ")}"
                                </Link>
                            </div>
                            <div className="bread">
                                <p>
                                    Home / <Link to="/trials">Clinical Trials</Link> / <Link to={`/trials/results/${text}`}>{text.replace(/,/g, ", ")}</Link>
                                </p>
                            </div>
                        </div>
                        {studies.map((study, index) => (
                            <>
                                <div className="panel">
                                    <div className="container">
                                        <div className="seven columns">
                                            <h1>About</h1>
                                            <p>{study.Study.ProtocolSection.DescriptionModule.DetailedDescription}</p>
                                            <h1>Eligibility Criteria</h1>
                                            <p>{study.Study.ProtocolSection.EligibilityModule.EligibilityCriteria}</p>
                                            <h1>Outcomes</h1>
                                            <p>
                                                {study.Study.ProtocolSection.OutcomesModule.PrimaryOutcomeList.PrimaryOutcome.map((p: { PrimaryOutcomeMeasure: string; PrimaryOutcomeDescription: string; }, index: number) => (
                                                    <>
                                                        <h3>{p.PrimaryOutcomeMeasure}</h3>
                                                        <p>{p.PrimaryOutcomeDescription}</p>
                                                    </>
                                                ))}
                                            </p>
                                        </div>
                                        <div className="three columns">
                                            <h1>Details</h1>
                                            <ul>
                                                <li>
                                                    <FontAwesomeIcon icon="hourglass-start" /> Start Date (Actual): {study.Study.ProtocolSection.StatusModule.StartDateStruct.StartDate}
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon="hourglass-end" /> End Date (Anticipated): {study.Study.ProtocolSection.StatusModule.CompletionDateStruct.CompletionDate}
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon="venus-mars" /> {`Enrolling ` + study.Study.ProtocolSection.EligibilityModule.Gender.toLowerCase() + ` patients`}
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon="birthday-cake" /> {`Enrolling patients above ` + study.Study.ProtocolSection.EligibilityModule.MinimumAge + ` of age.`}
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon="vial" /> {`Sampling method: ` + study.Study.ProtocolSection.EligibilityModule.SamplingMethod}
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon="location-arrow" /> {study.Study.ProtocolSection.IdentificationModule.Organization.OrgFullName}
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon="door-open" /> Overall Status: {study.Study.ProtocolSection.StatusModule.OverallStatus}
                                                </li>
                                                {/* <li>
                                                    <FontAwesomeIcon icon="pills" /> Intervention Type: {study.Study.ProtocolSection.ArmsInterventionsModule.InterventionList.Intervention.map((m: { InterventionType: string; }, index: number) => (
                                                        <>
                                                            {m.InterventionType}
                                                        </>
                                                    ))}
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon="thumbs-up" /> FDA Approval: {study.Study.ProtocolSection.OversightModule.IsFDARegulatedDrug}
                                                </li> */}
                                            </ul>
                                            <h1>Contact Information</h1>
                                            {study.Study.ProtocolSection.ContactsLocationsModule.OverallOfficialList.OverallOfficial.map((m: { OverallOfficialName: number; OverallOfficialAffiliation: string; OverallOfficialRole: string }, index: number) => (
                                                <>
                                                    {m.OverallOfficialName}<br />
                                                    {m.OverallOfficialAffiliation}<br />
                                                    ({m.OverallOfficialRole})
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
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

export default FullStudy;

{/* <div className="panel" key={study.Rank}>
    {study.Study.ProtocolSection.IdentificationModule.NCTId}<br />
    {study.Study.ProtocolSection.IdentificationModule.Organization.OrgFullName}<br />
    {study.Study.ProtocolSection.IdentificationModule.BriefTitle}<br />
    <br /><br />
    {study.Study.ProtocolSection.DesignModule.StudyType}<br />
    { }<br />
    <br />
    <br />
    {`Sampling metod: ` + study.Study.ProtocolSection.EligibilityModule.SamplingMethod}<br />
    <br /><br />
    {study.Study.ProtocolSection.ContactsLocationsModule.LocationList.Location.map((m: { LocationZip: number; LocationState: string; LocationCity: string; }, index: number) => (
        <>
            {m.LocationCity}, {m.LocationState} {m.LocationZip}
        </>
    ))}
</div> */}
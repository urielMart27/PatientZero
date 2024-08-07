import React from "react";

const links = [
    {
        name: 'National Alliance on Mental Illness (NAMI)',
        url: 'https://www.nami.org',
      },
      {
        name: 'Mental Health America (MHA)',
        url: 'https://www.mhanational.org',
      },
      {
        name: 'Anxiety and Depression Association of America (ADAA)',
        url: 'https://adaa.org',
      },
      {
        name: 'Depression and Bipolar Support Alliance (DBSA)',
        url: 'https://www.dbsalliance.org',
      },
      {
        name: 'American Foundation for Suicide Prevention (AFSP)',
        url: 'https://afsp.org',
      },
      {
        name: 'Substance Abuse and Mental Health Services Administration (SAMHSA)',
        url: 'https://www.samhsa.gov',
      },
  
];

const SupportLinks = () => {
    return (
        <div>
            <h2>Mental Health Organizations and Support Groups</h2>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SupportLinks
import React from 'react';
import { SiCisco, SiSalesforce, SiLinkedin } from 'react-icons/si';

const CredlyIcon = () => (
    <div className="font-bold text-lg border border-current rounded-full w-12 h-12 flex items-center justify-center">Credly</div>
);

const Certifications = () => {
    return (
        <section className="section" id="certifications">
            <h2 className="section-title font-dot">Certifications</h2>
            <div className="cert-grid justify-center">
                <a href="https://www.credly.com/users/japhet-gonzales" target="_blank" rel="noopener noreferrer" className="cert-item" title="Credly">
                    <CredlyIcon />
                </a>
                <a href="https://www.credly.com/badges/e2f0416b-240f-47c2-9463-339ba020d9e9/public_url" target="_blank" rel="noopener noreferrer" className="cert-item hover:text-[#00bceb]" title="Cisco">
                    <SiCisco />
                </a>
                <a href="https://students.yourlearning.ibm.com/credential/CREDLY-b8810a57-2c5a-4bbc-81f1-9bfc649ad13d" target="_blank" rel="noopener noreferrer" className="cert-item hover:text-[#1f70c1]" title="IBM">
                    <span className="font-bold tracking-widest font-sans">IBM</span>
                </a>
                <a href="https://www.salesforce.com/trailblazer/kd6tu8z29dg4ptqv2a" target="_blank" rel="noopener noreferrer" className="cert-item hover:text-[#00a1e0]" title="Salesforce">
                    <SiSalesforce />
                </a>
            </div>
        </section>
    );
};
export default Certifications;
